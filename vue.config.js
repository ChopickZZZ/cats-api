const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/frontend-challenge/" : "/",
  transpileDependencies: true,
  lintOnSave: false
})
