import Vue from 'vue'
import App from './App.vue'
import router from './router'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 默认配置
const baseUrl = 'http://localhost:8080/'
axios.defaults.timeout = 100000;//超时
axios.defaults.baseURL = baseUrl;//默认地址
axios.headers={'X-Requested-With': 'XMLHttpRequest'};
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

//minut-UI
import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//scss全局
import '@/assets/css/basic.scss'

//vuex
import store from './store/index'

//  全局组件
import NavFooter from './components/bottomMenu/NavFooter.vue'
import Masking from './components/Masking/masking.vue'
Vue.component('NavFooter',NavFooter)
Vue.component('Masking',Masking)
new Vue({
  render: h => h(App),
  router,
  $,
  store
}).$mount('#app')
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor