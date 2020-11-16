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
        people:0,   //用餐人数
        menulocal:[],//菜单
        remarks:''
    },
    mutations:{
        changePeople(state,nums){   //用餐人数
            state.people = nums
        },
        changeRemarks(state,text){ 
            state.remarks = text
        },
        showMasking(state,masking){
            state.isShowMasking = masking;
        },
        menulocal(state,obj){   //购物车页添加菜品

            // state.menulocal.push(obj)


            console.log(state.menulocal ==null || state.menulocal.length ==0,"第一个条件")

            // console.log(state.menulocal ==null || state.menulocal.length ==0,"真假")
            if(state.menulocal ==null || state.menulocal.length ==0 ){
           
                return state.menulocal.push(obj)

            }else{
                // console.log("111111111111")
                    for (let i = 0; i < state.menulocal.length; i++) {
                        const menu = state.menulocal[i];
                        console.log(menu.uid == obj.uid,"第二回合")
                        if(menu.uid == obj.uid){
                            return menu.num+=obj.num;
                            // break;
                        }
                    }
            }
            // console.log("第三个22222222222")
           return state.menulocal.push(obj)

       
        },
        addmenu(state,uid){//购物车数量加一
               
                for (let i = 0; i < state.menulocal.length; i++) {
                    const list = state.menulocal[i];
                    if(list.uid == uid){
                        list.num +=1;
                        break;
                    }
                }
        },
        submenu(state,uid){ //购物车数量减一 数量为了0时删除
            for (let i = 0; i < state.menulocal.length; i++) {
                const list = state.menulocal[i];
                if(list.uid ==uid){
                    if(list.num>1){
                        list.num -=1;
                        break;
                    }else{
                        console.log(i,"你到是第几个啊")
                        state.menulocal.splice(i,1)
                        break;
                    }
                }
            }
        }
    }
 })

export default store