<template>
  <div id="navfooter">
    <!-- {{msg}} -->
    <!-- 定位按钮 导航 购物车 -->
    <div class="footer_nav" v-if="!flag" @click="showMenu">
      <img :src="urlnavigation" alt />
      <p>导航</p>
    </div>
    <div class="footer_nav nav" v-else @click="showMenu">
      <img :src="urlclose" />
            <p>返回</p>
    </div>
    <div class="footer_nav_show"> 
        <ul class="list"  >   
          <li :class="{navShow:flag}">
            <img :src="urlmenu" alt />
            <p>菜单</p>
          </li>
          
          <li :class="{navShow:flag}">
            <img :src="urlcart" />
            <p>购物车</p>
          </li>
          <li :class="{navShow:flag}">
            <img :src="urlorder" />
            <p>订单</p>
          </li>
          <li :class="{navShow:flag}">
            <img :src="urlwallet" />
            <p>结账</p>
          </li> 
        </ul>     
      </div>      
  </div>
</template>

<script>
// 图片引入
// import urlcaidan from "../../assets/images/caidan.png";
// import urlmenu from "../assets/images/menu.png"
// import urlorder from "../assets/images/order.png"
// import urlwallet from "../assets/images/wallet.png"
// import urlclose from "../assets/images/close.png"
export default {
  name: "navfooter",
  data() {
    return {
      msg: "底部组件",
      urlcart: require("../../assets/images/cart.png"),
      urlmenu: require("../../assets/images/menu.png"),
      urlorder: require("../../assets/images/order.png"),
      urlwallet: require("../../assets/images/wallet.png"),
      urlclose: require("../../assets/images/close.png"),
      urlnavigation: require("../../assets/images/navigation.png"),
      flag: false,
      navShow:false
    };
  },
  methods: {
  
    showMenu(){
      this.navShow= !this.navShow
      this.flag = !this.flag
     console.log(this.navShow,"列表")
      console.log(this.flag,"事件")
    }
  },
  mounted(){
    console.log(this.navShow,"列表")
    console.log(this.flag,"事件")
  }
};
</script>
<style lang="scss">
 
/*
*
*底部定位导航和购物车
*
*/

.footer_nav{
    z-index: 10;
    &.nav{
      background-color: #000;
    }
    position: fixed;
    bottom:.2rem;
    left: .5rem;
    
    width: 5rem;
    height: 5rem;
    background: #99999990;

    text-align: center;

    border-radius: 50%;

    img{
        width: 2rem;
        height: 2rem;

        margin-top: .1rem;
    }

    p{  
        // margin-top: -.1rem;
        color: #ffffff;
        // font-size: rem;
    }
}

/*
***导航展开菜单
*/
.footer_nav_show{
    z-index: 8;
      position: fixed;
      bottom:.2rem;
      left: .5rem;
  .list{
    
      
    li{
      position: fixed;
      bottom:.2rem;
      left: .5rem; 
      width: 5rem;
      height: 5rem;
      background: #000;
      text-align: center;
      border-radius: 50%;
      transition:  all .6s linear;
      opacity: 0;
      img{
          width: 2rem;
          height: 2rem;

          margin-top: .1rem;
      }

      p{  
          color: #ffffff;
      }

     &.navShow{
        
        opacity: 1;
        &:nth-child(1){
          
        // animation: mesh .6s linear forwards;
         transform: translateX(11rem);
        }
        &:nth-child(2){
    
          // background-color: red;
          // animation: mesh2 .6s linear forwards;
          transform: translate(9rem,-5rem);
        }
        &:nth-child(3){
    
          // background-color: red;
          // animation: mesh3 .6s linear forwards;
          transform: translate(5rem,-9rem);
        }
        &:nth-child(4){
    
          // background-color: red;
          // animation: mesh4 .6s linear forwards;
           transform: translate(0rem,-11rem);
        }
      }
    }
     
  }
}
</style>