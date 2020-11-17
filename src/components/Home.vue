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
  
      <mu-drawer :open.sync="open" width="150">
        <mu-list  class="asideMenu">
          <mu-list-item button v-for=" (items,index) in listData" :key="items.id" @click="locationMenu(index)">
            <mu-list-item-title>{{items.title}}</mu-list-item-title>
          </mu-list-item>
          <mu-list-item  @click="open = false; shift = 'home'" button>
            <mu-list-item-title>返回</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>

    <!-- 内容区 -->
      
    <div class="content" ref="content">
      <nav  v-for=" (item,key) in listData" :key="key" :ref="item.id">
          
      <mu-grid-list class="gridlist">
         <mu-appbar style="width: 100%;" title="Title" color='#2196f3'>
              {{item.title}}
            </mu-appbar>
        <!-- <mu-sub-header></mu-sub-header> -->
        <mu-grid-tile class="gridname" v-for="food in item.list" :key="food.id">
          <img :src="food.url_img" >
          <span slot="title">{{food.name}}</span>
          <span slot="subTitle">￥ <b>{{food.price}}</b></span>
          <mu-button slot="action" icon :to="{name:'pcontent',query:{aid:food.aid,uid:food.uid }}">
            <mu-icon value="star_border"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
      </nav>
     

      
      <!-- <div class="item" v-for=" (item,key) in listData" :key="key" :ref="item.id" >
        <h3 ref="cartlist" class="item_cate" > 
           
        </h3> -->
        <!-- <mu-grid-list class="gridlist-demo" :cols="2" v-for=" food in item.list" :key="food.id">
          <mu-sub-header>December</mu-sub-header>
          <mu-grid-tile >
             <mu-paper class="demo-paper" :z-depth="1">
                 <img :src="food.url_img" >
                  <span slot="title">{{food.name}}</span>
                  <span slot="subTitle">￥ <b>{{food.price}}</b></span>
                  <mu-button slot="action" icon :to="{name:'pcontent',query:{aid:food.aid,uid:food.uid }}">
                    <mu-icon value="star_border"></mu-icon>
                  </mu-button>

             </mu-paper>
           
          </mu-grid-tile>
        </mu-grid-list> -->
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
  <!--     </div> -->
    </div>
    <!-- <BottomMenu :openDraWer="openDraWer"></BottomMenu> -->
     <mu-container style=" position:fixed; bottom:0;max-height:300px;width:100%;padding:0;z-index:9999 ">
            <mu-bottom-nav :value.sync="shift" shift @change="opendrawer">
                <mu-bottom-nav-item value="menu" title="分类" icon="restore" event="openDraWer"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="home" title="主页" icon="home"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="cart" title="购物车" icon="location_on" to="/cart"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
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
              
      open: false,//muse-ui 变量
      shift:"home"
     
  
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
      opendrawer(value){
          this.shift = value
          if(this.shift == 'menu'){ //菜单列表
            this.open = !this.open
          }
      },
      openDraWer(){
          this.open = !this.open;
          console.log("菜单组件")
      },
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
              this.open=!this.open
              this.shift='home'
              // scroll.scrollTop = 0;
            break;
            case 1:
              window.scrollTo({ //平滑滚动
                  top: 865, 
                  behavior: "smooth" 
              });
              this.open=!this.open
              this.shift='home'
              console.log(scroll.scrollTop)
              break;
            case 2:
              window.scrollTo({ //平滑滚动
                  top: 2005, 
                  behavior: "smooth" 
              });
              this.open=!this.open
              this.shift='home'
              console.log(scroll.scrollTop)
              // scroll.scrollTop = 1173;
              break;
            case 3:
              window.scrollTo({ //平滑滚动
                  top: 2786, 
                  behavior: "smooth" 
              });
              this.open=!this.open
              this.shift='home'
              console.log(scroll.scrollTop)
              // scroll.scrollTop =1653;
              break;
            case 4:
              window.scrollTo({ //平滑滚动
                  top:3518, 
                  behavior: "smooth" 
              });
              this.open=!this.open
              this.shift='home'
               console.log(scroll.scrollTop)
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

<style lang="scss">
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
  /**侧边菜单*/
  .asideMenu{
    padding-top:10rem;
  }
  .content{
    padding: 2rem .5rem;
    .gridlist{
      padding: .2rem;
      .gridname{
        padding: .2rem;
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