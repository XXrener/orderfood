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
    <aside class="left_cate" id="left_cate">
      <ul>
        <li>精品粥类</li>
        <li>精品小炒</li>
        <li>精品烧烤</li>
        <li>精品酒水</li>
        <li>特色推荐</li>
        <li>厨师长推荐</li>
      </ul>

      <!-- 菜单按钮 -->
      <div class="nav_cate" id="nav_cate">
        <img :src="urlnav" />
        <p>菜单</p>
      </div>
    </aside>

    <!-- 内容区 -->
    <div class="content">
      <div class="item" v-for=" (item,index) in listData" :key="index">
        <h3 class="item_cate">
            {{item.title}}
        </h3>

        <ul class="item_list">
          <li  v-for=" food in item.list" :key="food.id">
            <router-link to="pcontent">
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
    <div class="masking" id="masking"></div>

    <!-- 定位按钮 导航 购物车 -->
    <!-- <div class="footer_nav">
      <img :src="urlnavigation" alt />
      <p>导航</p>
    </div> -->

    <div class="footer_cart">
      <img :src="urlcart" alt />
      <p>购物车</p>
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
      selections:[]
    };
  },
  methods: {
    asideDomInit() {
      var navCate = document.getElementById("nav_cate"); //菜单
      var leftCate = document.getElementById("left_cate"); //分类列表
      var masking = document.getElementById("masking"); //蒙版
      var flag = true; //中间变量 通过真假 让同一次点击执行不同结果

      masking.onclick = navCate.onclick = function () {
        //蒙版点击事件与菜单按钮一同监听 并执行同一函数
        // alert('1')

        if (flag == true) {
          flag = false;
          leftCate.style.transform = "translate(0,0)";
          masking.style.display = "block";

          document.body.style.overflow = "hidden"; //通过设置滚动条隐藏 让其不能移动蒙版下面的内容区
        } else {
          flag = true;
          leftCate.style.transform = "translate(-100%,0)";
          masking.style.display = "none";

          document.body.style.overflow = "auto"; //如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容
        }
        console.log(flag);
      };
    },

  },
  mounted() {
     /*  upload.getOrder().then(res=>{
        console.log(res,"主页数据")
      }).catch(err=>{
        console.log(err,"主页数据获取错误")
      }) */
      console.log(axios)
      axios.get('/productlist')
        .then(res =>{
            console.log(res,"00000")
          
             this.listData = res.data.result;
            
             console.log(this.selections,"书记胡")
           
        })
        .catch( err =>{
            console.log(err,"ssssss")
        })
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

    // .hlist{

    //     flex: 1;
    //     text-align: center;
    //     padding-top: .2rem;
    //     border-right: 1px solid #eee;

    //     img{
    //         width: 2rem;
    //         height: 2rem;
    //         margin: 0 auto;
    //     }

    //     &:last-child{

    //         border-right: none;
    //     }
    // }
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
    transition: all 1s;

    transform: translate(-100%, 0);

    z-index: 2;

    width: 6rem;

    height: 100%;

    position: fixed;

    background: #eee;
    top: 0px;
    left: 0px;

    ul {
      position: absolute;

      height: 100%;
      padding: 0.5rem;

      z-index: 3;

      background: #eee;
      li {
        line-height: 4.4rem;
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

        height: 1.8rem;

        margin-left: 1rem;

        margin-top: 0.4rem;
      }
      p {
        color: #fff;
        margin-left: 1rem;

        margin-top: -0.3rem;
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

    display: none;
  }
}
</style>