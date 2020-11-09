import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Satart from "./components/Satart.vue"
import Cart from "./components/Cart.vue"
import Home from "./components/Home.vue"
import Hot from "./components/Hot.vue"
import Order from "./components/Order.vue"
import Pcontent from "./components/Pcontent.vue"
import Search from "./components/Search.vue"
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/satart',
            component: Satart,
            mate: {
                title: '开始',
                tier: 0
            }
        },
        {
            path: '/home',
            component: Home,
            mate: {
                title: '首页',
                tier: 1
            }
        },
        {
            path: '/cart',
            component: Cart,
            mate: {
                title: '购物车',
                tier: 2
            }
        },
        {
            path: '/hot',
            component: Hot,
            mate: {
                title: '热门',
                tier: 3
            }
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/pcontent',
            component: Pcontent
        },
        {
            path: '/search',
            component: Search,
            mate: {
                title: '热门',
                tier: 4
            }
        },
        {
            path: '/*',
            redirect: '/satart'
        }
    ]
})

export default router