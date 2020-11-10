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
    <aside class="left_cate" :class="{isCate:isShow}">
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
      <div class="nav_cate" @click="isShow=!isShow">
        <img :src="urlnav" />
        <p>菜单</p>
      </div>
    </aside>

    <!-- 内容区 -->
    <div class="content">
      <div class="item" v-for=" (item,index) in listData" :key="index" >{{'order_'+index}}
        <h3 class="item_cate" :ref="'order_'+index">
            {{item.title}}
        </h3>

        <ul class="item_list">
          <li  v-for=" food in item.list" :key="food.id">
            <router-link to="pcontent/888">
              <div class="inner">
                <img :src="'http://a.itying.com/api/productlist/'+food.img_url" alt />
                <p class="title">{{food.title}}</p>
                <p class="price">
                  <span>￥</span>{{food.price}}
                </p>
              </div>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
    <!-- 蒙版 -->
    <div :class="{masking:isShow}" @click="isShow=!isShow"></div>
    <div class="footer_cart">
      <router-link to="/cart">
        <img :src="urlcart" alt />
        <p>购物车</p>
      </router-link>
    </div>
    <v-navfooter></v-navfooter>
  </div>
</template>

<script>
import urlreshou from "../assets/images/rexiao.png";
import urlcaidan from "../assets/images/caidan.png";
import urlsousou from "../assets/images/sousuo.png";

import urlnav from "../assets/images/nav.png"; //底部三按钮
import urlnavigation from "../assets/images/navigation.png";
// import urlcart from "../assets/images/cart.png";

//组件引入
import navfooter from './bottomMenu/NavFooter'

//请求
// import upload from '../api/upload'
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
      listData:[],
      selections:[],
      isShow:false,     //菜单显示
      optionsMenu:0, //点击菜单
      scroll:''
    };
  },
  created(){
    // window.addEventListener()
  },
  methods: {
    locationMenu(uid){
      this.optionsMenu=uid;
      let srcoll = document.documentElement.scrollTop || document.body.scrollTop;
      window.addEventListener('scroll',srcoll,true)
      srcoll = this.$refs['order_'+uid][0].scrollTop
      console.log(srcoll)
    },
    muneScroll(){
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scroll,"滚动条")
     
    }

  },
  mounted() {
      console.log(axios)
      axios.get('/productlist')
        .then(res =>{
             this.listData = res.data.result;
        })
        .catch( err =>{
            console.log(err,"ssssss")
        }),
        window.addEventListener('scroll', this.muneScroll,true)
  },
  components:{
    'v-navfooter':navfooter
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
    
    z-index: 2;
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
      z-index: 3;
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

      right: -3.5rem;

      background: rgba(132, 128, 128, 0.9);
      top: 42%;

      width: 5rem;

      height: 4rem;
      text-align: center;

      border-radius: 0rem 50% 50% 0rem;

      z-index: 2;
      img {
        width: 1.8rem;

        height: 1.6rem;

        margin-left: 1rem;

        margin-top: 0.4rem;
      }
      p {
        color: #fff;
        margin-left: 1rem;
        margin-top: -0.3rem;
        font-size: 14px;
      }
    }
  }

  /*透明层*/

  .masking {
    position: fixed;

    width: 100%;
    height: 100%;

    background: rgba(132, 128, 128, 0.4);

    left: 0px;

    top: 0px;
    z-index: 1;
  }
}
</style>