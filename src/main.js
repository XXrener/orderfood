import Vue from 'vue'
import App from './App.vue'
import router from './router'

//axios
import axios from './api/axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'


//axios


//scss全局
import '@/assets/css/basic.scss'
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor