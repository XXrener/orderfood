<template>
  <div id="app">
    <!-- <Satart></Satart> -->
    <transition :name="order" mode="out-in" :duration="{ enter: 500, leave: 0 }">
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
width: 100vw;
height: 100vh;
// padding: .2rem;
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
 
.slide-right-enter {
  visibility: hidden; opacity: 0;
  transform: translateX(-100%);
}
 
.slide-right-leave-active {
  visibility: hidden; opacity: 0;
  transform: translateX(100%);
}
 
.slide-left-enter {
  visibility: hidden; opacity: 0;
  transform: translateX(100%);
}
 
.slide-left-leave-active {
  visibility: hidden; opacity: 0;
  transform: translateX(-100%);

}
}
</style>
