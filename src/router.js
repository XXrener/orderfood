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
import SatartCopy from "./components/SatartCopy.vue"
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:"satart",
            path: '/satart',
            component: Satart,
            meta: {
                title: '开始',
                tier: 0
            }
        },
        {   
            name:'home',
            path: '/home',
            component: Home,
            meta: {
                title: '首页',
                tier: 1
            }
        },
        {
            name:'pcontent',
            path: '/pcontent',
            component: Pcontent,
            meta:{
                title:"下单",
                tier:2
            }
        },
        {
            name:'cart',
            path: '/cart',
            component: Cart,
            meta: {
                title: '购物车',
                tier: 3
            }
        },
        {
            name:"SatartCopy",
            path: '/SatartCopy',
            component: SatartCopy,
            meta: {
                title: '修改',
                tier: 4
            }
        },
        {
            name:'order',
            path: '/order',
            component: Order,
            meta:{
                title:"下单",
                tier:5
            }
        },
        
        {
            name:'hot',
            path: '/hot',
            component: Hot,
            meta: {
                title: '热门',
                tier: 6
            }
        },
        /* {
            path: '/pcontent/:id',
            component: Pcontent
        }, */
        {
            name:'search',
            path: '/search',
            component: Search,
            meta: {
                title: '热门',
                tier: 7
            }
        },
        
        {
            path: '/*',
            redirect: '/satart'
        }
    ]
})

export default router