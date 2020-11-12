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
         <router-link to="/home">
             <li :class="{navShow:flag}">
              <img :src="urlmenu" alt />
              <p>菜单</p>
              </li>
         </router-link>
          
          <li :class="{navShow:flag}">
            <router-link to="/cart">
                <img :src="urlcart" />
                 <p>购物车</p>
            </router-link>
          </li>
           <li :class="{navShow:flag}">
              <router-link to="/order">
                  <img :src="urlorder" />
                    <p>订单</p>
              </router-link>
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
      this.navShow= !this.navShow;
      this.flag = !this.flag;
      let that = this;
      setTimeout(function(){
           that.$store.commit('showMasking',that.flag);
      },600)
     
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
    z-index: 666;
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
    z-index: 665;
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
      transition:  all .4s linear;
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
         transform: translateX(11rem);
        }
        &:nth-child(2){
          transform: translate(9rem,-5rem);
        }
        &:nth-child(3){

          transform: translate(5rem,-9rem);
        }
        &:nth-child(4){
           transform: translate(0rem,-11rem);
        }
      }
    }
     
  }
}
</style>