const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/create',
    createProxyMiddleware({
      target: 'https://api-v1.amaofaith.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/analysis',
    createProxyMiddleware({
      target: 'https://api-v1.amaofaith.com',
      changeOrigin: true,
    })
  );
};