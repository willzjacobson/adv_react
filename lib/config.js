module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.NODE_ENV === 'production' ? 8080 : 3000,
};
