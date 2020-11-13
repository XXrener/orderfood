<template>
  <div id="home">
    <header class="index_header">
      <nav>
        <ul class="index_list">
          <li>
            <img :src="urlreshou" alt />
            <p>热销榜</p>
          </li>
          <li>
            <img :src="urlcaidan" alt />
            <P>你点过的菜</P>
          </li>
          <li>
            <img :src="urlsousou" alt />
            <p>猜你喜欢</p>
          </li>
        </ul>
      </nav>
    </header>
    <!-- 侧边栏分类菜单 -->
    <aside class="left_cate" :class="{isCate:flag}">
      <ul>
        <li v-for=" (items,index) in listData"
           :key="index" 
           :ref="[optionsMenu==index?'redColor':null]"
           @click="locationMenu(index)"
           :class="[optionsMenu==index?'redColor':null]">
          {{items.title}}
        </li>
        
      </ul>

      <!-- 菜单按钮 -->
      <div class="nav_cate" @click="openMenu">
        <img :src="urlnav" />
        <p>菜单</p>
      </div>
    </aside>

    <!-- 内容区 -->
    <div class="content">
      <div class="item" v-for=" (item,key) in listData" :key="key" :ref="item.id" >
        <h3 class="item_cate" >
            {{item.title}}
        </h3>

        <ul class="item_list">
          <li  v-for=" food in item.list" :key="food.id">
            <router-link :to="{name:'pcontent',query:{aid:food.aid,uid:food.uid }}">
              <div class="inner">
                <img :src="food.url_img" alt />
                <p class="title">{{food.name}}</p>
                <p class="price">
                  <span>￥</span>{{food.price}}
                </p>
              </div>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
   
    <div class="footer_cart">
      <span class="cartnum" v-if="isShowCartNum">{{cartNum}}</span>
      <router-link to="/cart">
        <img :src="urlcart" alt />
        <p>购物车</p>
      </router-link>
    </div>
    <NavFooter></NavFooter>
    <Masking></Masking>
  </div>
</template>

<script>
import urlreshou from "../assets/images/rexiao.png";
import urlcaidan from "../assets/images/caidan.png";
import urlsousou from "../assets/images/sousuo.png";

import urlnav from "../assets/images/nav.png"; //底部三按钮
import urlnavigation from "../assets/images/navigation.png";
//请求
import config from '../api/config'
import axios from 'axios'

export default {
  name: "home",
  data() {
    return {
      msg: "开始组件挂载",
      urlreshou ,
      urlcaidan,
      urlsousou,
      urlnav,
      urlnavigation,
      urlcart:require('../assets/images/cart.png'),
       api:config.api,  //图片拼接URL
      listData:[],
      selections:[],
      flag:false,
      optionsMenu:0, //点击菜单
      scroll:'',
     
      cartNum:0 , //购物车数量
    isShowCartNum:true //购物车数量显示
    };
  },
  created(){
    // window.addEventListener()
  },
  computed:{
  
  },
  methods: {
      openMenu(){  
        this.flag = !this.flag
        this.$store.commit('showMasking',this.flag)
      }

  },
  mounted() {
     
      axios.get('/api/menu.json').then(res =>{
        if(res.data){
          this.listData = res.data.body.menulist
        }
        // console.log(res.data.body.menulist)
      }).catch(err =>{
        console.log(err,"本地请求出错")
      })
  }
};
</script>

<style lang="scss" scoped>
#home {
  .index_header {
    width: 96%;

    margin: 0 auto;

    height: 4.4rem;

    background: #fff;
    margin-top: 1rem;

    display: flex;
    border-radius: 0.5rem;
    nav {
      height: 4rem;
      width: 100%;
      ul {
        display: flex;

        li {
          flex: 1;
          text-align: center;
          border-right: 1px solid #f1f1f1;
          box-sizing: border-box;
          // border:1px #ff0000 solid;

          &:last-child {
            border-right: none;
          }
          img {
            width: 2rem;
            height: 2rem;
            margin: 0 auto;
            margin-top: 0.2rem;
          }

          p {
            // margin-top: -0.2rem;
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  /*列表*/
  .item {
    .item_cate {
      text-align: center;

      padding: 0.5rem;
    }

    .item_list {
      
      display: flex;

      flex-wrap: wrap;

      padding: 0px 0.5rem;
       a{
        text-decoration: none;
      }

      li {
       
        width: 33.3%;
        padding: 0.5rem;

        box-sizing: border-box;

        .inner {
          background: #fff;
          width: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 8rem;
          }
          p {
            padding: 0.2rem 0.5rem;
          }
        }
      }
    }
  }

  /*侧边栏*/

  .left_cate {
    /*css3运动  加过渡效果*/
    transition: all .6s;
    &.isCate{
      transform: translate(100%, 0);
    }
    
    z-index: 667;
    width: 6rem;
    height: 100%;
    position: fixed;
    margin-left:-6rem;
    background: #eee;
    top: 0px;
    left: 0px;

    ul {
      position: absolute;
      height: 100%;
      padding: 12rem 0.5rem 0.5rem 0.5rem;
      z-index: 666;
      background: #eee;
      li {
        &.redColor{
          background-color: #4a4848;
          color:#f1f1f1;
          font-weight: 600;
        }
        text-align: center;
        line-height: 2.4rem;
        margin: 1.5rem 0;
        border-radius: .3rem;
      }
    }

    .nav_cate {
      
          position: absolute;
          right: -2.9rem;
          background: rgba(132, 128, 128, 0.9);
          top: 42%;
          width: 3rem;
          height: 4rem;
          text-align: center;
          border-radius: 0rem 50% 50% 0rem;
          z-index: 665;
      img {
        width: 1.8rem;

        height: 1.6rem;

        // margin-left: 1rem;

        margin-top: 0.4rem;
      }
      p {
       color: #fff;
      font-size: 14px;
      text-decoration: none;
      }
    }
  }
  .footer_cart{
    a{
      text-decoration: none;
    }
    p{
      text-decoration: none;
    }
    .cartnum{
      background: #c50808;
      font-size: 10px;
      line-height: 1.8rem;
      border-radius: 50%;
      color: #fff;
      // padding: .25rem;
      width: 1.8rem;
      height: 1.8rem;
      text-align: center;
      position: fixed;
      right: .2rem;
      bottom: 3.8rem;
    }
  }

 
}
</style>