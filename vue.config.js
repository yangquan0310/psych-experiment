const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: "./", // 默认'/'，部署应用包时的基本 URL
  outputDir: "app",
  indexPath: "./templates/index.html",
  assetsDir: "./static"
})
