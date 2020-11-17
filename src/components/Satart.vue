<template>
  <div id="satart">
    <!-- 开始页面 -->
    <div class="satart_content">
      <header class="satart_header">
        <img :src="urlcanju" alt="" />
        <p>用餐人数</p>
      </header>

      <p class="notice">*请选择用餐人数 ，小二正在快马加鞭给你送餐具*</p>

      <div class="satart_list">
        <ul class="use_list">
          <li v-for="(num,index) in nums" :key="index" @click="maxplayers(index)">
            <span :class="[select==index?'redColor':'']">{{num}}</span>
          </li>
        </ul>
      </div>
      <div class="mark_input">
            <input type="text" v-model='p_mark' placeholder="请输入您的口味要求，忌口等（可不填）"/>
        </div>

        
        <ul class="mark_list">
            <li class="taste" ref="index" v-for=" (item,index) in taste" 
            :key="index" 
            @click="textOptions(index)">						
                {{item}}
            </li>
           
        </ul>
         
      <!-- <div id="begin" class="satart">
          <span>扫码点餐</span>
      </div> -->
      <mt-button  @click="camera =true"
          type="primary"
          size="small"
          class="orderbtn"
      >扫码点餐</mt-button>
      <mt-actionsheet
              :actions="actions"
              v-model="camera">
              扫码点餐
            </mt-actionsheet>
    </div>
  </div>
</template>

<script>
import urlcanju from "../assets/images/canju.jpg";
// import $ from 'jquery'
// import axios from 'axios'
export default {
  name: "satart",
  data() {
    return {
      msg: "开始组件挂载",
      urlcanju,
      selections:false,
      nums:[1,2,3,4,5,6,7,8,9,10,11,12],
      select:0,
      taste:['打包带走','不要放辣椒','微辣'],
      p_mark:'',
      p_num:'',
      camera:false, //扫一扫
      actions:[{
        name:"扫一扫",
        method: this.getCamera
      }]
    }
  },
  methods:{
    maxplayers(index){  //人数本地储存
       this.select = index;
       this.$store.commit('changePeople',this.nums[index]) //当前数组下标 等于当前数组值
    },
    satartOrder(){
      // this.$router.push({ path: 'home' })
      
    },
    textOptions(index){  //口味选择
      let uid = index;
        this.p_mark += ' '+this.$refs.index[uid].innerHTML.trim()
        this.$store.commit('changeRemarks',this.p_mark)
        console.log(this.p_mark)
    },
    getCamera(){
      this.$router.push({path:'/home'})
       console.log("获取相机")
      
    },
    closeScan(){
       
    }
  },
  mounted(){
    // 初始化
    window.localStorage.clear()
    this.maxplayers(0)
  }
};
</script>

<style lang="scss">
#satart {
  .satart_header {
    width: 11rem;

    margin: 5rem auto 0rem auto;

    border-radius: 0.5rem;

    background: #000;

    img {
      height: 2.2rem;

      line-height: 2.2rem;
      position: relative;

      top: 0.5rem;
      margin-left: 1rem;
    }

    p {
      display: inline-block;
      height: 3.2rem;

      line-height: 3.2rem;
      color: #fff;
      padding-left: 0.5rem;
    }
  }

  .notice {
    // color: red;
    //
    text-align: center;

    margin: 1rem 0rem;
    font-size: 1rem;
  }
    .mark_input{
        padding: 1rem;

        input{

            height: 3rem;
            line-height:3rem;

            width:100%;
            border:1px solid #eee;
        }

    }
    .mark_list{
        
        display: flex;
        
        flex-wrap: wrap;
        padding: .5rem;
        
        li{

            //  width: 25%;
             padding: .5rem;             
             box-sizing: border-box;   /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/
            //  background-color: red;
             text-align: center;
             margin: .25rem;
             span{
                 
                 display: block;
                 
                 width: 100%;
                 height: 3.2rem;
                 
                 line-height: 3.2rem;
                 text-align: center;
                 background: #fff;
                 border-radius: .5rem;
                 border: 1px solid #ccc;
             }
            
        } 
    }
  .use_list {
    display: flex;

    flex-wrap: wrap;
    padding: 0.5rem;

    li {
      width: 25%;
      padding: 0.5rem;
      box-sizing: border-box; /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/
    
      span {
          &.redColor{
           background-color: #26a2ff;
            color: white;
          }

        display: block;

        width: 100%;
        height: 3.2rem;

        line-height: 3.2rem;
        text-align: center;
        background: #fff;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
    }
  }
}
.orderbtn{
  // margin: 0 auto;
  margin-top: 10rem;
  position: relative;
  left: 37%;
  text-align: center;
}


</style>