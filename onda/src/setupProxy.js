const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/onda',
    createProxyMiddleware({
      target: process.env.BASE_URL,
      pathRewrite: {
        '^/onda': '',
      },
      changeOrigin: true,
    }),
  );

  app.use(
    '/kakao',
    createProxyMiddleware({
      target: 'https://dapi.kakao.com',
      pathRewrite: {
        '^/kakao': '',
      },
      changeOrigin: true,
    }),
  );
};
