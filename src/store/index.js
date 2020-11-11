import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !='production'

const store = new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        uid:'',
        title:'',
        price:''

    },
    mutations:{
        tableprople(state,nums){
            state.prople = nums
        },
        comment(state,com){ 
            state.pid = com
        }
    }
 })

export default store