
import { gfsProcessed } from '../config/db.js';
import FileToken from '../models/FileToken.js';
import { verifyDownloadToken } from '../utils/tokenUtils.js';
import { getClientIpFromReq } from '../utils/ipUtils.js';

export const downloadConvertedFile = async (req, res) => {
  try {
    const { token } = req.query;
    const clientIp = getClientIpFromReq(req);


    // debug logging...
    // console.log('Download requested:', 'tokenPrefix=', token ? String(token).slice(0, 12) + '...' : null, 'clientIp=', clientIp);

    const decoded = verifyDownloadToken(token, clientIp);
    if (!decoded?.file) {
      return res.status(401).json({ error: 'Invalid token or File Expired' });
    }

    const record = await FileToken.findOne({ token });
    if (!record || record.fileId.toString() !== decoded.file) {
      return res.status(401).json({ error: 'File Expired' });
    }

    if (new Date() > record.expiresAt) {
      return res.status(401).json({ error: 'File expired' });
    }

    const files = await gfsProcessed.find({ _id: record.fileId }).toArray();
     if (!files || files.length === 0) {
       return res.status(404).json({ error: 'You have reached maximum time of file downloading.Please download again' });
    }

    const file = files[0];

    res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
    res.setHeader('Content-Type', file.contentType || 'application/octet-stream');
    const downloadStream = gfsProcessed.openDownloadStream(record.fileId);
    downloadStream.pipe(res);

  } catch (err) {
    console.error('Download Error:', err);
    res.status(500).json({ error: err.message });
  }
};