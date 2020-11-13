<template>
     <!-- 蒙版 -->
     <transition name="mask">
         <div class="masking" v-if="isShowMasking"></div>
     </transition>
    
</template>
<script>
export default {
    name:'masking',
    data(){
        return{
            // isShowmaSking:this.$store.state.isShowMasking
        }
    },
    computed:{
        isShowMasking(){
            return   this.$store.state.isShowMasking
        }
    },
    methods:{
        masking(){
            this.$store.commit('showMasking',false)
            console.log(this.$store.state.isShowMasking)
        }
    }
}
</script>
<style lang="scss">
 /*透明层*/
   /*  .ssss{
         &:not(.masking){
             animation: .5s maskss linear ;
         }
    } */
  .masking {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(132, 128, 128, 0.4);
    animation: .3s mask linear ;
    // transition: opacity .3s linear;
    // transform:
    z-index: 555;
  }
    .mask-enter,.mask-leave-to{
        opacity: 0;
    }
    .mask-enter-active{ //进场 
        transition: all .2s ease;
    }
    .mask-leave-active {  //离场
        transition:all .2s ease;
    }
/*   @keyframes mask {
      from{
          opacity: 0;
      }
      to{
          opacity: 1;
      }
  }
  @keyframes maskss {
      from{
          opacity: 1;
      }
      to{
          opacity: 0;
      }
  } */
</style>