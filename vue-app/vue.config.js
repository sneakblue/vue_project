const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
      proxy: 'http://localhost:5000'
  },
  publicPath: process.env.NODE_ENV === 'Production' ? 'https://fortestapping.herokuapp.com' : '/'
})
