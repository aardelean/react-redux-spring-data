require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  port: process.env.PORT || 3000,
  app: {
    baseApiUrl: 'http://localhost:9502',
    title: 'Grid Items',
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Grid Items'},
      {name: 'robots', content: 'index,follow'},
      {name: 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'Copyright', content: 'aardelean'},
      {name: 'audience', content: 'all'},
      {charset: 'utf-8'},
      {property: 'keywords', content: 'grid'},
      {property: 'og:locale', content: 'en_US'},
      {property: 'og:title', content: 'grid play with items'},
      {property: 'og:description'}
    ]
  }
}, environment);
