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
//按需引入Muse
import 'muse-ui/lib/styles/base.less';
import { AppBar, AutoComplete, BottomNav, BottomSheet, Button, Carousel, Drawer, Grid, GridList, Icon, List, Paper, Radio, Select, SubHeader, Switch } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
// Vue.use(CredentialsContainer)
Vue.use(SubHeader)
Vue.use(AppBar)
Vue.use(Grid)
Vue.use(Button)
Vue.use(Select)
Vue.use(Carousel)
Vue.use(Paper)
Vue.use(GridList)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(BottomNav)
Vue.use(BottomSheet)
Vue.use(List)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(AutoComplete)
//字体引入
import 'typeface-roboto'

// Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
//  全局组件
import NavFooter from './components/bottomMenu/NavFooter.vue'
import Masking from './components/Masking/masking.vue'
import BottomMenu from "./components/bottomMenu/bottomMenu.vue"
Vue.component('NavFooter',NavFooter)
Vue.component('Masking',Masking)
Vue.component('BottomMenu',BottomMenu)
new Vue({
  render: h => h(App),
  router,
  $,
  store
}).$mount('#app')
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor