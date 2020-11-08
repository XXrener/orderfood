<template>
  <div id="navfooter">
    <!-- {{msg}} -->
    <!-- 定位按钮 导航 购物车 -->
    <div class="footer_nav" v-if="flag" @click="showMenu">
      <img :src="urlnavigation" alt />
      <p>导航</p>
    </div>
    <div class="footer_nav nav" v-else @click="showMenu">
      <img :src="urlclose" />
            <p>返回</p>
    </div>
    <div class="footer_nav_show"  v-if="!flag">
        
        <ul class="list" >
          
          <li :class="{navShow:navShow}">
            <img :src="urlmenu" alt />
            <p>菜单</p>
          </li>
          
          <li :class="{navShow:navShow}">
            <img :src="urlcart" />
            <p>购物车</p>
          </li>
          <li :class="{navShow:navShow}">
            <img :src="urlorder" />
            <p>订单</p>
          </li>
          <li :class="{navShow:navShow}">
            <img :src="urlwallet" />
            <p>结账</p>
          </li> 
        </ul>
        
      </div>
    <!-- </transition> -->
        
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
      this.navShow =!this.navShow;
      this.flag =!this.flag;
      
      console.log(this.navShow)
    }
  },
  mounted(){
    // this.footflag()
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
      position: fixed;
      bottom:.2rem;
      left: .5rem;
  .list{
    
      
    li{
      // display: none;
      position: fixed;
      bottom:.2rem;
      left: .5rem;
      
      width: 5rem;
      height: 5rem;
      background: #000;

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

     &:not(.navShow){
        &:nth-child(1){
        animation: mesh .6s linear forwards;
        }
        &:nth-child(2){
          // background-color: red;
          animation: mesh2 .6s linear forwards;
        }
        &:nth-child(3){
          // background-color: red;
          animation: mesh3 .6s linear forwards;
        }
        &:nth-child(4){
          // background-color: red;
          animation: mesh4 .6s linear forwards;
        }
      }
       &.navShow{
        &:nth-child(1){
        animation: shrink .6s linear forwards;
        }
        &:nth-child(2){
          // background-color: red;
          animation: shrink2 .6s linear forwards;
        }
        &:nth-child(3){
          // background-color: red;
          animation: shrink3 .6s linear forwards;
        }
        &:nth-child(4){
          // background-color: red;
          animation: shrink4 .6s linear forwards;
        }
      }
    }
     
  }
}
@keyframes mesh {
    from{
      display: block;
      opacity: .2;
      transform: translateX(0px);
    }
    to{
      display: block;
      opacity: 1;
      transform: translateX(11rem);
    }
}
@keyframes mesh2 {
    from{
      display: block;
      opacity: .2;
      transform: translate(0px);
    }
    to{
      display: block;
      opacity: 1;
      // background-color:red;
      transform: translate(9rem,-5rem);
    }
}
@keyframes mesh3 {
    from{
      display: block;
      opacity: .2;
      transform: translate(0px);
    }
    to{
      display: block;
      opacity: 1;
      // background-color:red;
      transform: translate(5rem,-9rem);
    }
}
@keyframes mesh4 {
    from{
      display: block;
      opacity: .2;
      transform: translate(0px);
    }
    to{
      display: block;
      opacity: 1;
      // background-color:red;
      transform: translate(0rem,-11rem);
    }
}
/*收缩*/
@keyframes shrink {
    from{
      
      display: block;
      opacity: 1;
      transform: translateX(11rem);
    }
    to{
      display: block;
      opacity: .2;
      transform: translateX(0px);
    }
}
@keyframes shrink2 {
    from{
      display: block;
      opacity: 1;
      // background-color:red;
      transform: translate(9rem,-5rem);
    }
    to{
       display: block;
      opacity: .2;
      transform: translate(0px);
      
    }
}
@keyframes shrink3 {
    from{
      display: block;
      opacity: 1;
      // background-color:red;
      transform: translate(5rem,-9rem);
    }
    to{
       display: block;
      opacity: .2;
      transform: translate(0px);
      
    }
}
@keyframes shrink4 {
    from{
      display: block;
      opacity: 1;
      // background-color:red;
      transform: translate(0rem,-11rem);
    }
    to{
      display: block;
      opacity: .2;
      transform: translate(0px);
      
    }
}
</style>