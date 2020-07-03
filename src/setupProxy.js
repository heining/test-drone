// const proxy = require('http-proxy-middleware')
// 1.0.0版对模块的引用做了修改
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://113.31.105.181:8180/',
    secure: false,
    // changeOrigin: true,
    pathRewrite: {  
      "^/api": "/api"
    }
  }))
}