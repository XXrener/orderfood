import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

//scss全局
import '@/assets/css/basic.scss'
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor