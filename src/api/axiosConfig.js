import axios from 'axios'


  // import baseURL from './baseUrl'
  // 默认配置
  const baseUrl = 'http://a.itying.com/api/';
  axios.defaults.timeout = 10000;//超时
  axios.defaults.baseURL = baseUrl;//默认地址
  
  //数据转换
  axios.defaults.transformRequest = function (data){
      data = JSON.stringify(data)
      return data;
  }
  
  // 方法
  
  //路由请求拦截
  // request 拦截器
  axios.interceptors.request.use(
      config =>{
          config.headers['Content-Type']= 'application/json;charset=UTF-8';
          return config;
        
      },
      error => {
          return Promise.reject(error.response);
        }
  )
  
  // / 路由响应拦截
  // http response 拦截器
  axios.interceptors.response.use(
    response => {
          console.log(response,"拦截器")
          return    
    },
    error => {
      return Promise.reject(error.response)   // 返回接口返回的错误信息
    });
    
    exprot {
      axios
    }



