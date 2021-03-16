const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  const target = process.env.PROXY_TARGET || 'http://localhost:5000/';
  app.use(proxy('/api', { target }));
};