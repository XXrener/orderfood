<template>
  <div id="home">
    <header class="index_header">
      <nav>
        <ul class="index_list">
            <mu-button icon slot="left" to="hotList">
                    <mu-icon value="whatshot" color="#ff5722"></mu-icon>
                     热销榜
            </mu-button>
            <mu-button icon slot="left" to="historyCart">
                    <mu-icon value="restaurant" color="#ffcdd2"></mu-icon>
                     你点过的菜
            </mu-button>
            <mu-button icon slot="left" to="likeTheFood">
                    <mu-icon value="favorite_border" color="#f44336"></mu-icon>
                     猜你喜欢
            </mu-button>
        </ul>
      </nav>
    </header>
    <!-- 侧边栏分类菜单 -->
    <!-- <mu-container>
        <mu-flex justify-content="center" align-items="center">
          <mu-switch style="margin-left: 16px" v-model="docked" label="docked"></mu-switch>
          <mu-radio style="margin-left: 16px" v-model="position" value="left" label="left"></mu-radio>
          <mu-radio style="margin-left: 16px" v-model="position" value="right" label="right"></mu-radio>
          <mu-button color="primary" style="margin-left: 16px" @click="open = !open">
            toggle
          </mu-button>
        </mu-flex>
          <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
            <mu-list>
              <mu-list-item button>
                <mu-list-item-title>Menu Item 1</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-title>Menu Item 2</mu-list-item-title>
              </mu-list-item>
              <mu-list-item  @click="open = false" button>
                <mu-list-item-title>Close</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-drawer>
    </mu-container> -->
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
      <mu-button class="nav_cate" icon slot="top" @click="openMenu">
        <mu-icon value="favorite_border" color="#f44336"></mu-icon>
            
      </mu-button>
      <!-- <div class="nav_cate" @click="openMenu">
        <img :src="urlnav" />
        <p>菜单</p>
      </div> -->
    </aside>

    <!-- 内容区 -->
    <div class="content" ref="content">
      <div class="item" v-for=" (item,key) in listData" :key="key" :ref="item.id" >
        <h3 ref="cartlist" class="item_cate" >
           
            <mu-appbar style="width: 100%;" title="Title">
                 {{item.title}}
            </mu-appbar>
        </h3>
        <mu-grid-list class="gridlist-demo" :cols="2">
          <!-- <mu-sub-header>December</mu-sub-header> -->
          <mu-grid-tile v-for=" food in item.list" :key="food.id">
             <mu-paper class="demo-paper" :z-depth="1">
                 <img :src="food.url_img" >
                  <span slot="title">{{food.name}}</span>
                  <span slot="subTitle">￥ <b>{{food.price}}</b></span>
                  <mu-button slot="action" icon :to="{name:'pcontent',query:{aid:food.aid,uid:food.uid }}">
                    <mu-icon value="star_border"></mu-icon>
                  </mu-button>

             </mu-paper>
           
          </mu-grid-tile>
        </mu-grid-list>
        <!-- <ul class="item_list">
          <li >
            <router-link >
              <div class="inner">
                <img :src="food.url_img" alt />
                <p class="title">{{food.name}}</p>
                <p class="price">
                  <span>￥</span>{{food.price}}
                </p>
              </div>
            </router-link>
          </li>

        </ul> -->
      </div>
    </div>
   
    <div class="footer_cart" style="positon:fixed;right:1.2rem;bottom:0rem;">
      <span class="cartnum" v-if="isShowCartNum">{{totalnum}}</span>
      <router-link to="/cart">
        <img :src="urlcart" alt />
        <p>购物车</p>
      </router-link>
    </div>
    <NavFooter></NavFooter>
    <!-- <Masking></Masking> -->
    <!-- <mu-container>
      <mu-bottom-nav shift="true">
        <mu-bottom-nav-item title="菜单" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="主页" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="购物车" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container> -->
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
      isShowCartNum:true, //购物车数量显示
        //muse-ui 变量
  
    };
  },
  created(){
    // window.addEventListener()
  },
  computed:{
      // 购物车按钮数量
     totalnum(){
       let num = this.$store.state.menulocal;
       let total = 0;
       for (let i = 0; i < num.length; i++) {
         const list = num[i];
         total += list.num
       }
       return total
     }
  },
  methods: {
      openMenu(){  //菜单预览
        this.flag = !this.flag
        // this.$store.commit('showMasking',this.flag)
      },
      locationMenu(index){
        this.optionsMenu = index;//按钮颜色
        this.$nextTick(()=>{
          let scroll = document.documentElement|| document.body;

        switch(index){  //动画
            case 0:
              window.scrollTo({ //平滑滚动
                  top: 0, 
                  behavior: "smooth" 
              });
              this.flag = !this.flag
              // scroll.scrollTop = 0;
            break;
            case 1:
              window.scrollTo({ //平滑滚动
                  top: 540, 
                  behavior: "smooth" 
              });
              this.flag = !this.flag
              console.log(scroll.scrollTop)
              break;
            case 2:
              window.scrollTo({ //平滑滚动
                  top: 1173, 
                  behavior: "smooth" 
              });
              this.flag = !this.flag
              console.log(scroll.scrollTop)
              // scroll.scrollTop = 1173;
              break;
            case 3:
              window.scrollTo({ //平滑滚动
                  top: 1653, 
                  behavior: "smooth" 
              });
              this.flag = !this.flag
              console.log(scroll.scrollTop)
              // scroll.scrollTop =1653;
              break;
            case 4:
              window.scrollTo({ //平滑滚动
                  top:scroll.offsetHeight-scroll.clientHeight, 
                  behavior: "smooth" 
              });
              this.flag = !this.flag
              // scroll.offsetHeight-scroll.clientHeight;
              // scroll.scrollTop = scroll.offsetHeight-scroll.clientHeight;
              break;
        }

      })
        
    }

  },
  mounted() {
     
      axios.get('/api/menu.json').then(res =>{  //获取本地JSON
      console.log(res,"有没有获取到")
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
  width: 100vw;
  height: 100vh;
  .index_header {
    width: 96%;

    margin: 0 auto;

    height: 4.4rem;

    background: #2196f3;
    margin-top: 1rem;

    display: flex;
    border-radius: 0.5rem;
    nav {
      height: 4rem;
      width: 100%;
      ul {
        display: flex;

        a{
          flex: 1;
          text-align: center;
          color: #FFF;
          font-size: 10px;
         
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
            font-size: 12px;
            padding: 0.2rem 0.5rem;
            color: #555;
            span{
              color: red;
            }
          }

          &:active{
            p{
              color: #555;
              span{
                color: red;
              }
            }
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
    left:-6rem;
    background: #2196f3;
    top: 0px;
   

    ul {
      position: relative;
      height: 100%;
      padding: 12rem 0.5rem 0.5rem 0.5rem;
      z-index: 666;
      background: #2196f3;
      li {
        &.redColor{
          background-color: #f1f1f1;
          color:#4a4848;
          font-weight: 600;
        }
        text-align: center;
        line-height: 2.4rem;
        margin: 1.5rem 0;
        border-radius: .3rem;
        &:last-child{
          letter-spacing: -.2rem;
        }
      }
    }

    .nav_cate {
      
          position: absolute;
          right: -3.9rem;
          background: #2196f3;
          top: 42%; 
          text-align: center;
          z-index: 665;
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
      position:absolute;  
      left: 3.5rem;
      top: -0.5rem;
    }
  }

 
}
</style>