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
          <!-- <li><span>2人</span></li>
          <li><span>3人</span></li>
          <li><span>4人</span></li>
          <li><span>5人</span></li>
          <li><span>6人</span></li>
          <li><span>7人</span></li>
          <li><span>8人</span></li>
          <li><span>9人</span></li>
          <li><span>10人</span></li>
          <li><span>11人</span></li>
          <li><span>12人</span></li> -->
        </ul>
      </div>
      <div id="begin" class="satart">
        <router-link to="/home">
          <span>开始点餐</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import urlcanju from "../assets/images/canju.jpg";
// import $ from 'jquery'
export default {
  name: "satart",
  data() {
    return {
      msg: "开始组件挂载",
      urlcanju,
      selections:false,
      nums:[1,2,3,4,5,6,7,8,9,10,11,12],
      select:0
    }
  },
  methods:{
    maxplayers(index){
       this.select = index;
       let uid = index +1;
       this.$store.commit('tableprople',uid)
    }
  },
  mounted(){
    // 初始化
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
    color: red;
    //
    text-align: center;

    margin: 1rem 0rem;
    font-size: 1rem;
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
           background-color: #be0303;
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

.satart {
  position: fixed;

  bottom: 5rem;

  left: 50%;
  margin-left: -3rem;

  width: 6rem;

  height: 6rem;

  border-radius: 50%;

  background: red;
  background-image: radial-gradient(#f72323, #be0303, #f33737); //径向渐变
  color: #fff;
  
  a {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    span {
      display: block;

      width: 2rem;

      margin: 0 auto;

      position: relative;

      top: 1.5rem;
    }
  }
}
</style>