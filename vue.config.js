// import baseUrl from './src/api/baseUrl'

// const { default: baseURL } = require("./src/api/units")

const BaseURL = 'http://a.itying.com/'

module.exports={
   /*  publicPath:process.env.NODE_ENV === 'production'
    ?'/production-sub-path/'
    :'/',   //开发 ：生产 */
    // lintOnSave:process.env.NODE_ENV !=='production',//禁用ESlint
    devServer:{     //开启浏览器警告信息
        /* overlay:{
            warnings:true,
            errors:true,
            // host:'127.0.0.1',//主机
            // port:3030,  //主机端口

            // hot:true,//webpack热模块
            open:'Google Chrome'//启动服务器时打开浏览器
        }, */

        Proxy:{ //开启代理
            '/api':{
                target:BaseURL,
                pathRewrite:{'^/api':'/'},
                // secure:false //关闭 （默认不接受在具有无效证书的 HTTPS 上运行的后端服务器） 功能
            }
        }
    }
}