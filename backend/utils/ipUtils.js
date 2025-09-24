// utils/ipUtils.js
export const normalizeIp = (ip) => {
  if (!ip) return '';
  // strip IPv4-mapped IPv6 prefix
  if (ip.startsWith('::ffff:')) return ip.replace('::ffff:', '');
  // map IPv6 loopback to IPv4 loopback
  if (ip === '::1') return '127.0.0.1';
  return ip;
};

export const getClientIpFromReq = (req) => {
  // Prefer X-Forwarded-For when present (may be comma-separated)
  const xff = req.headers['x-forwarded-for'] || req.headers['X-Forwarded-For'];
  let ip = '';
  if (xff) {
    ip = String(xff).split(',')[0].trim();
  } else if (req.ip) {
    ip = req.ip;
  } else if (req.socket?.remoteAddress) {
    ip = req.socket.remoteAddress;
  }
  return normalizeIp(ip);
};
