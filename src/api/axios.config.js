import axios from './axios'

   /* const getOrder = async ()=>{   
   
        await $axios.get('/productlist').then(res=>{
            return new Promise.resolve(res,"获取菜品")
        }).catch(err=>{
            return new Promise.reject(err.response,"菜品获取错误")
        })
    }
 */
export default{
         /**
         * 获取菜品
        */
    async getOrder(){
        return await axios.get('/productlist')
        .then(res =>{
            return new Promise.resolve(res,"二次封装菜单")
        })
        .catch( err =>{
            return new Promise.reject(err.response,"二次封装报错")
        })
    }
}