import {
fs, crypto, dotenv, fileTypeFromFile, promisify, FileToken, generateToken, path, gfsProcessed
} from '../utils/coreModules.js';

import {
ServicePrincipalCredentials, PDFServices, MimeType, SplitPDFParams, SplitPDFJob, SplitPDFResult, SDKError, ServiceUsageError, ServiceApiError, ClientConfig
} from '@adobe/pdfservices-node-sdk';

import archiver from 'archiver';
import { pipeline } from 'stream/promises';
import os from 'os';

dotenv.config();
const unlinkAsync = promisify(fs.unlink);

export const splitPdf = async (req, res) => {
let inputFilePath;
const tmpFilesToCleanup = [];
let zipTmpPath = null;

try {
if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });

inputFilePath = req.file.path;
const info = await fileTypeFromFile(inputFilePath);
if (!info || info.mime !== MimeType.PDF) {
  await unlinkAsync(inputFilePath).catch(() => {});
  return res.status(400).json({ error: 'Only PDFs allowed.' });
}

const pageCount = parseInt(req.body.pageCount, 10) || 2;
const baseName  = req.file.originalname.replace(/[^a-zA-Z0-9-_.]/g, '_').slice(0, 100);

const credentials  = new ServicePrincipalCredentials({
  clientId:     process.env.PDF_SERVICES_CLIENT_ID,
  clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
});
const clientConfig = new ClientConfig({ timeout: 60000 });
const pdfServices  = new PDFServices({ credentials, clientConfig });

const inputAsset = await pdfServices.upload({
  readStream: fs.createReadStream(inputFilePath),
  mimeType:   MimeType.PDF
});

const params = new SplitPDFParams({ pageCount });
const job    = new SplitPDFJob({ inputAsset, params });
const pollingURL = await pdfServices.submit({ job });

const result = await pdfServices.getJobResult({
  pollingURL,
  resultType: SplitPDFResult
});

const assets = result.result.assets || [];
if (!assets || assets.length <= 1) {
  await unlinkAsync(inputFilePath).catch(() => {});
  return res.status(400).json({ error: 'Cannot split a PDF that contains only a single page or requested split yields single file.' });
}

const tmpDir = path.join(os.tmpdir(), 'docswitch-split');
await fs.promises.mkdir(tmpDir, { recursive: true });

const zipName = `${path.parse(baseName).name}_parts_${crypto.randomBytes(4).toString('hex')}.zip`;
zipTmpPath = path.join(tmpDir, zipName);
const outputZipStream = fs.createWriteStream(zipTmpPath);
const archive = archiver('zip', { zlib: { level: 9 } });
archive.pipe(outputZipStream);

for (let i = 0; i < assets.length; i++) {
  const streamRes = await pdfServices.getContent({ asset: assets[i] });

  const partName  = `${path.parse(baseName).name}_part${i+1}_${crypto.randomBytes(4).toString('hex')}.pdf`;
  const tmpPartPath = path.join(tmpDir, partName);

  const tmpWriteStream = fs.createWriteStream(tmpPartPath);
  await pipeline(streamRes.readStream, tmpWriteStream);
  tmpFilesToCleanup.push(tmpPartPath);

  archive.file(tmpPartPath, { name: partName });

  const uploadStream = gfsProcessed.openUploadStream(partName, { contentType: MimeType.PDF });
  await pipeline(fs.createReadStream(tmpPartPath), uploadStream);

  const token = generateToken(uploadStream.id.toString(), req.ip);
  await FileToken.create({
    token,
    fileId:    uploadStream.id,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000)
  });
}

await archive.finalize();
await new Promise((resolve, reject) => {
  outputZipStream.on('close', resolve);
  outputZipStream.on('end', resolve);
  outputZipStream.on('error', reject);
});

const zipUploadStream = gfsProcessed.openUploadStream(zipName, { contentType: 'application/zip' });
await pipeline(fs.createReadStream(zipTmpPath), zipUploadStream);

const zipToken = generateToken(zipUploadStream.id.toString(), req.ip);
await FileToken.create({
  token: zipToken,
  fileId: zipUploadStream.id,
  expiresAt: new Date(Date.now() + 60 * 60 * 1000)
});

await unlinkAsync(inputFilePath).catch(() => {});
for (const f of tmpFilesToCleanup) await unlinkAsync(f).catch(() => {});
if (zipTmpPath) await unlinkAsync(zipTmpPath).catch(() => {});

return res.json({
  success: true,
  zip: {
    fileName: zipName,
    token: zipToken
  }
});


} catch (err) {
if (req.file?.path) await unlinkAsync(req.file.path).catch(() => {});
if (zipTmpPath) await unlinkAsync(zipTmpPath).catch(() => {});
const msg =
err instanceof ServiceApiError ? 'Adobe API error' :
err instanceof ServiceUsageError ? 'Adobe usage error' :
err instanceof SDKError ? 'Adobe SDK error' :
'Internal error';
return res.status(500).json({
error: msg,
details: process.env.NODE_ENV === 'development' ? (err.response?.data || err.message || String(err)) : undefined
});
}
};