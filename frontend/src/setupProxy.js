const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      ['/api', '/create', '/generated'],
    {
      target: 'http://j7c106.p.ssafy.io:9000',
      changeOrigin: true,
      router: {
        '/api': 'http://j7c106.p.ssafy.io:8081',
        '/generated' : 'https://images.wombo.art'
      },
      pathRewrite: {
        '^/api': ''
      }
    })
  )
  
}
