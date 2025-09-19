
import { fileTypeFromFile, crypto, dotenv, axios, FileToken, generateToken, CloudConvert, fs, promisify, gfsProcessed } from '../utils/coreModules.js';

dotenv.config();
const unlinkAsync = promisify(fs.unlink);

const cloudConvert = new CloudConvert(process.env.CLOUDC_APIK);

const ALLOWED_MIMES = [
  // video
  'video/mp4', 'video/webm', 'video/quicktime', 'video/x-matroska', 'video/x-msvideo', 'video/3gpp',
  // audio
  'audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav', 'audio/x-flac', 'audio/flac', 'audio/mp4', 'audio/x-m4a', 'audio/wma',
  // images (GIF)
  'image/gif'
];

export const multimediaConverter = async (req, res) => {
  let inputFilePath;
  try {
    if (!req.file || !req.body.outputFormat) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    inputFilePath = req.file.path; 
    const fileInfo = await fileTypeFromFile(inputFilePath);

    if (!fileInfo || !ALLOWED_MIMES.includes(fileInfo.mime)) {
      try { await unlinkAsync(inputFilePath); } catch (e) {}
      return res.status(400).json({ error: 'Invalid file type' });
    }

    const originalName = (req.file.originalname || 'file')
      .replace(/[^a-zA-Z0-9-_.]/g, '_')
      .slice(0, 100);
    const outputFormat = String(req.body.outputFormat).replace(/[^a-z0-9]/gi, '').toLowerCase();

    const job = await cloudConvert.jobs.create({
      tasks: {
        'import-upload': { operation: 'import/upload' },
        'convert-file': {
          operation: 'convert',
          input: ['import-upload'],
          output_format: outputFormat,
          engine: 'ffmpeg' 
        },
        'export-url': { operation: 'export/url', input: ['convert-file'] }
      }
    });

    const uploadTask = job.tasks.find(t => t.name === 'import-upload');
    await cloudConvert.tasks.upload(uploadTask, fs.createReadStream(inputFilePath), originalName);

    const completedJob = await cloudConvert.jobs.wait(job.id);
    const exportTask = completedJob.tasks.find(t => t.name === 'export-url');

    if (!exportTask || !exportTask.result || !exportTask.result.files || !exportTask.result.files[0]) {
      try { await unlinkAsync(inputFilePath); } catch(e) {}
      return res.status(500).json({ error: 'Conversion produced no output' });
    }

    const downloadUrl = exportTask.result.files[0].url;

    const downloadResponse = await axios.get(downloadUrl, { responseType: 'stream', timeout: 60000 });

    const uniqueName = `${originalName}_${crypto.randomBytes(4).toString('hex')}.${outputFormat}`;
    const contentType = downloadResponse.headers['content-type'] || `application/octet-stream`;

    const processedStream = gfsProcessed.openUploadStream(uniqueName, { contentType });
    downloadResponse.data.pipe(processedStream);

    await new Promise((resolve, reject) => {
      processedStream.on('finish', resolve);
      processedStream.on('error', reject);
    });

    const token = generateToken(processedStream.id.toString(), req.ip);

    const fileTokenDoc = {
      token,
      fileId: processedStream.id,
      expiresAt: new Date(Date.now() + (60 * 60 * 1000)) 
    };
    if (req.session?.user?._id) fileTokenDoc.userId = req.session.user._id;

    await FileToken.create(fileTokenDoc);

    try { await unlinkAsync(inputFilePath); } catch (e) {
      console.warn('Failed to remove temp upload:', inputFilePath, e?.message);
    }

    return res.json({
      success: true,
      token,
      fileName: uniqueName,
      outputFormat
    });

  } catch (err) {
    console.error('Multimedia conversion error:', err);

    if (inputFilePath) {
      try {
        await unlinkAsync(inputFilePath);
        console.log(`[${new Date().toISOString()}] 🗑️ Temp file removed: ${inputFilePath}`);
      } catch (deleteErr) {
        console.warn(`Failed to delete temp file: ${inputFilePath}`, deleteErr.message);
      }
    } else {
      console.warn('inputFilePath was not defined, skipping temp cleanup.');
    }

    return res.status(500).json({ error: 'Conversion failed', details: err.message });
  }
};
