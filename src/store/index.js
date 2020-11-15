// import { for } from 'core-js/fn/symbol'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// const debug = process.env.NODE_ENV !='production'

const store = new Vuex.Store({
    plugins:[createPersistedState({
        storage:sessionStorage
    })],
    state:{
        isShowMasking:false,
        menulocal:[]
    },
    mutations:{
        tableprople(state,nums){
            state.prople = nums
        },
        comment(state,com){ 
            state.uid = com
        },
        showMasking(state,masking){
            state.isShowMasking = masking;
        },
        menulocal(state,obj){   //购物车页添加菜品
         
            console.log(state.menulocal ==null || state.menulocal.length ==0,"真假")
            if(state.menulocal ==null || state.menulocal.length ==0 ){
           
                return state.menulocal.push(obj)
              

            }else{
                    for (let i = 0; i < state.menulocal.length; i++) {
                        const menu = state.menulocal[i];
                        console.log(menu,"一维数组")
                        if(menu.uid == obj.uid){
                            return menu.num+=obj.num;
                        }
                    }
            }
            return state.menulocal.push(obj)

       
        },
        addmenu(state,uid){//购物车数量加一
               
                for (let i = 0; i < state.menulocal.length; i++) {
                    const list = state.menulocal[i];
                    if(list.uid == uid){
                        return list.num +=1;
                    }
                }
        },
        submenu(state,uid){ //购物车数量减一 数量为了0时删除
            for (let i = 0; i < state.menulocal.length; i++) {
                const list = state.menulocal[i];
                if(list.uid ==uid){
                    if(list.num>1){
                        return list.num -=1;
                    }else{
                        console.log(i,"你到是第几个啊")
                        state.menulocal.splice(i,1)
                    }
                }
            }
        }
    }
 })

export default store