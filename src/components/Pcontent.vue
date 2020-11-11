<template>
    <div id="pcontent">
       <!-- {{msg}} -->
       <router-link to="home">
           <div class="back">
                <p>返回</p>
            </div>
       </router-link>
    <div class="p_content">		
        <div class="p_info">				
            <img :src="api+cartlist.img_url"/>				
            <h2>{{cartlist.title}}</h2>				
            <p class="price"><span>{{cartlist.price}}</span>/份</p>
        </div>
        <div class="p_detial">
            <h3>
                商品详情					
            </h3>
            <div class="p_content"> 
                <p v-html="cartlist.content">
              
                </p>
            </div>
        </div>
    </div>

    <footer class="pfooter">
			
        <div class="cart">				
            <strong>数量:</strong>
            <div class="cart_num">
              <div class="input_left" @click="subtraction">-</div>
              <div class="input_center">
                  <input ref="amount" type="text"  readonly="readonly" value="1" name="num" id="num" />
              </div>
              <div class="input_right" @click="addition">+</div>				      
            </div>								
        
        </div>
        
        <button class="addcart" @click="addCart">加入购物车</button>			
    </footer>
    </div>
</template>

<script>
    import config from '../api/config'
    import axios from 'axios'
    export default {
        name:'pcontent',
        data(){
            return{
                msg:"开始组件挂载",
                api: config.api,
                cartlist:[]
            }
        },
        mounted(){
            
            console.log(this.$route.query,"2222222222")
            let uid = this.$route.query;
            this.downLoadContent(uid)
        },
        methods:{
            downLoadContent(uid){
                axios.get("/productcontent",{params:{id:uid.id}}).then(res =>{
                   
                    this.cartlist = res.data.result[0];
                    console.log(this.cartlist,"0000000000")
                    
                }).catch( err =>{
                    console.log(err)
                })
            },
            subtraction(){
                if(this.$refs.amount.value>1){
                    this.$refs.amount.value-=1
                }else{
                    this.$refs.amount.value =1
                }
               
            },
            addition(){
                this.$refs.amount.value = parseInt(this.$refs.amount.value)+1;
            },
            /*
                加入购物车
            */
           addCart(){
               //桌子号 二维码获取 暂定值
               axios.post('/api/addcart',{
                   uid:'a001',
                   title:this.cartlist.title,
                   product_id:this.cartlist._id,
                   img_url:this.cartlist.img_url,
                   price:this.cartlist.price,
                   num:this.$refs.amount.value,
               }).then(res =>{
                   console.log(res,"加入购物车")
                   if(res.data.msg){
                       this.$router.push({path:'home'})
                   }
               }).catch(err =>{
                   console.log(err,"加入失败")
               })
           }
        }
    }
</script>

<style lang="scss" scoped>
#pcontent{

    .back{
    
    
        height: 3.8rem;
        line-height: 3.8rem;
        width: 3.8rem;
        
        border-radius: 50%;
        
        
        background: #000;
        
        
        position: fixed;
        
        
        top: .5rem;
        
        left: .5rem;
        
        color: #fff;

        p{
            font-size: 1rem;
        }
        
        
        &:before{
            
            
            content: "";
            
            display: block;
            
            width: .8rem;
            height: .8rem;
            
            border-left: .2rem solid #fff;
            border-bottom: .2rem solid #fff;
            
            float: left;
            
            position: relative;
            
            top:1.3rem;
            
            left:.6rem;
            
            transform: rotate(45deg);
            
            margin-right: .4rem;
    
        }
    }

    .p_content{
        
        .p_info{
            background: #fff;      
            img{
                width: 100%;
                
                height: 18rem
            } 
            
            h2{
                padding: .2rem .5rem;
            } 
            
            .price{
                
                padding: .2rem .5rem;
                
                color: red;
            }
        }
        
        .p_detial{
                
                
            background: #fff;
            
            margin-top: 1rem;
            
            h3{
                padding: .5rem;
            }
            
            .p_content{
                padding: 1rem;
                
                
                img{
                    max-width: 100%;
                    
                    display: block;
                    
                    margin: 0 auto;
                }
                
                *{
                    
                    line-height: 1.5;
                    
                    color: #666;
                }
            }
        }
        
        
    }



/*底部*/

.pfooter{
    
  
    position: fixed;  
    
    bottom: 0px;  
    height: 4.4rem;  
    line-height: 4.4rem;
    
    background: #fff;
    
    left: 0px;
    
    width: 100%;
    
    border-top: 1px solid #eee;
    
    .cart{
        
        float: left;
        
            
        display:flex;   
        
        strong{
            
            flex: 1;
            
            font-size: 1.6rem;
            
            padding: 0rem .5rem;
        }
        
        .cart_num{
            
            width: 10rem;      
            
            display: flex;
            margin-top: .8rem;
            
            
            .input_left,.input_right{
                flex: 1;
                
                width: 2.8rem;
                height: 2.8rem;
                
                line-height: 2.8rem;
                
                text-align: center;
                
                color: red;
                
                border: 1px solid #eee;
                
                font-size: 2.4rem;
            }    
            
            .input_center{
                
                flex: 1;
                
                input{
                    
                    width: 2rem;
                    text-align: center;
                        width: 100%;
                        height: 2.8rem; 
                        border: none;
                        
                        border-top: 1px solid #eee;
                        
                        border-bottom: 1px solid #eee;
                
                        float: left;
                }
            }
        }
      
  }
  
  .addcart{
      
        float: right;
      
        background: red;
        color: #fff;
        height: 3rem;
        border: none;
        padding: 0 .5rem;
        border-radius: .5rem;
        margin-top: .8rem;
        margin-right: .5rem;
  }
    
}

}
</style>