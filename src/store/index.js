import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// const debug = process.env.NODE_ENV !='production'

const store = new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        isShowMasking:true,
        menulocal:[
            {
               
            }
        ]
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
        menulocal(state,obj){
            
            /* for( let i = 0; i <state.menulocal.length ;i++){
               
                if(state.menulocal[i].uid ==''){
                    state.menulocal = [
                                {
                                    uid:obj.uid,
                                    name:obj.name,
                                    price:obj.price,
                                    url:obj.url_img,
                                    num:obj.num
                                }
                            ]
                    
                    console.log(state.menulocal,"结算1")
                    return //单次数据 防止重复循环

                }else if(state.menulocal[i].uid !='' && state.menulocal[i].uid == obj.uid){

                        state.menulocal[i].num += obj.num;
                        console.log(state.menulocal,"结算2")
                        return //单页数据 防止重复循环
    
    
                }else if(state.menulocal[i].uid !='' && state.menulocal[i].uid != obj.uid){
                    state.menulocal.push(
                        {
                            uid:obj.uid,
                            name:obj.name,
                            price:obj.price,
                            url:obj.url_img,
                            num:obj.num
                        }
                    )
                    console.log(state.menulocal,"结算3")
                        return
                }
            
                 
            } */
        }
    }
 })

export default store