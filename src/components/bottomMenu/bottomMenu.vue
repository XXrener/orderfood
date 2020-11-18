<template>
  <div id="btnMenu">
        <mu-container class="gridlist">
            <mu-button color="#2196f3"  @click="openshow">
                <mu-icon top value="subject"></mu-icon>
                列表
            </mu-button> 
            <mu-button color="#2196f3" to="/home">
                <mu-icon top value="home"></mu-icon>
                主页
            </mu-button>
            <mu-button color="#2196f3" to='/cart'>
                <mu-icon top value="shopping_cart"></mu-icon>
                购物车
            </mu-button> 
              
        </mu-container>
  </div>
</template>
<script>
export default {
    name:"btnMenu",
    data(){
        return {
            shift: 'home',
            open:false
        }
    },
    watch:{

    },
    computed:{
   
    },
    methods:{
       openshow(){
           this.open =!this.open
           this.$store.commit('openShow',this.open)
           console.log("55555")
       }
    },
    mounted(){
        this.shift = 'home'
    }
}
</script>

<style lang="scss">
#btnMenu{
    position:absolute;
    bottom:0;
    left: 0;
    width: 100vw;
    .gridlist{
        position:fixed; 
        bottom:0;
        max-height:5rem;
        width:100%;
        padding:0;
        z-index:9999;
        background-color: #2196f3; 
        display: flex;

        button{
            flex: 1;
            padding: .5rem;
            height: 4rem;
            // margin-left: .25rem;
        }
        a{
            flex: 1;
            height: 4rem;
        }
    }
}
</style>