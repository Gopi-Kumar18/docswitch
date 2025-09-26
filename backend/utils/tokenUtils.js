
import { jwt, normalizeIp } from '../utils/coreModules.js';
import dotenv from 'dotenv';


dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const generateToken = (encodedFilePath, clientIp) => {
   const ip = normalizeIp(clientIp || '');

  return jwt.sign(
    { file: encodedFilePath, ip: clientIp },
    JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};

export const verifyDownloadToken = (token, clientIp) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256']
    });
     if (normalizeIp(decoded.ip) !== normalizeIp(clientIp || '')) return null;
    //  console.log('Verifying token', token, 'clientIp:', clientIp); // debug logging
    return decoded;
    
  } catch (err) {
    return null;
  }
};