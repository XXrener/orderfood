<template>
  <div id="app">
    <!-- <Satart></Satart> -->
    <transition :name="order">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Satart from './components/Satart'
export default {
  name: 'App',
  data(){
    return {
      order:''
    }
  },
  components: {
  //  Satart
  },
  watch:{
   '$route'(to, from){
      console.log(to,"你是什么")
      console.log(from,"你又是什么")
      console.log(to.meta.tier > from.meta.tier,"你对不对的啊")
      if (to.meta.tier > from.meta.tier) {
        this.order= " slide-left";
      } else {
        this.order= "slide-right";
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
 
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
 
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
 
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
 
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);

}
}
</style>
