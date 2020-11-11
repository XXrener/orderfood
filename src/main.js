import Vue from 'vue'
import App from './App.vue'
import router from './router'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 默认配置
const baseUrl = 'http://a.itying.com/api/'
axios.defaults.timeout = 10000;//超时
axios.defaults.baseURL = baseUrl;//默认地址
/* axios.defaults.transformRequest = function (data){
  data = JSON.stringify(data)
  return data;
} */
Vue.use(VueAxios,axios)

//jQuery
import $ from 'jquery'

// vuex
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'


//scss全局
import '@/assets/css/basic.scss'

//vuex
import store from './store/index'

//  全局组件
new Vue({
  render: h => h(App),
  router,
  $,
  store
}).$mount('#app')
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor