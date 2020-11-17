<template>
  <div id="btnMenu">
        <mu-container style="max-height:300px;width:100%">
            <mu-bottom-nav :value.sync="shift" shift @change="opendrawer">
                <mu-bottom-nav-item value="menu" title="分类" icon="restore" @event="clickMenu"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="home" title="主页" icon="home"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="cart" title="购物车" icon="location_on"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
  </div>
</template>
<script>
export default {
    name:"btnMenu",
    data(){
        return {
            shift: 'home'
        }
    },
    props:{
        open:{
            type:Boolean
        }
    },
    methods:{
        opendrawer(value){
            this.shift = value
            console.log(value =='menu',"8888888888888")
            if(value =='menu'){
                this.$emit('openDraWer')
            }
            console.log(value,"000000000000")
           
        },
        ssss(){
            console.log("sssssssssssssssssssss")
        },
        clickMenu(){
            console.log("888888888888888888888")
        }
    }
   
}
</script>

<style lang="scss">
#btnMenu{
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    // height: 100vh;
}
</style>