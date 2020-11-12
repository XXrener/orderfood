const webpack = require('webpack');
 const path = require('path');  //路径别名配置
 const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }]),
    config.resolve.alias  //添加别名
      .set('@',resolve('src'))
      .set('@assets',resolve('src/assets'))
      .set('@components',resolve('src/components'))
      .set('@store',resolve('store/index.js'))
  },
  devServer:{
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置后自动启动浏览器
    hotOnly: true, // 热更新
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        changeOrigin:true,
        ws:true,  //代理webpack
        pathRewrite:{   //重定向 请求路径
            "^/api":"/"
        }
      }
    }
  }
}