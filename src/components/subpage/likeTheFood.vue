<template>
    <div id="likeTheFood">
        <mu-container class="search-food">
            <!-- <mu-flex justify-content="center"> -->
                <mu-paper :z-depth="1">
                <mu-appbar color="primary">
                    <mu-button icon slot="left" to="home">
                    <mu-icon value="arrow_back"></mu-icon>
                    </mu-button>
                    返回
                </mu-appbar>
                <mu-row class="autoComputed" gutter>
                    <mu-col span="12" lg="12" sm="12">
                      <mu-auto-complete :data="hintName" label="请输入菜名" :max-search-results="5"  v-model="dishName" open-on-focus @keyup.enter.native="searchMenu"></mu-auto-complete>
                    </mu-col>
                  </mu-row>
                <mu-grid-list class="gridlist-demo">
                    <!-- <mu-sub-header>December</mu-sub-header> -->
                    <mu-grid-tile v-for="(tile, index) in likelist" :key="index">
                    <img :src="tile.url_img" >
                    <span slot="title">{{tile.name}}</span>
                    <span slot="subTitle">by <b>{{tile.price}}</b></span>
                    <mu-button slot="action" icon :to="{name:'pcontent',query:{aid:tile.aid,uid:tile.uid }}">
                        <mu-icon value="favorite_border"></mu-icon>
                    </mu-button>
                    </mu-grid-tile>
                </mu-grid-list>
                </mu-paper>
            <!-- </mu-flex> -->
        </mu-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"likeTheFood",
    data(){
        return{
            likelist:[],
            searchlist:'',
            dishName: '', //搜索输入值
            hintName:[]   //后端返回的所有名字
        }
    },
    methods:{
        searchMenu(){
          // console.log(this.dishName)
          for (let i = 0; i < this.searchlist.length; i++) {
            const list = this.searchlist[i];
            
            for (let j = 0; j < list.list.length; j++) {
              const hint = list.list[j];
              console.log(this.dishName == hint.name,hint.name,"条件有问题嘛")
              if(this.dishName == hint.name){
                this.likelist = []
                this.likelist.push(hint)
                console.log(hint,"一个菜单那")
              }
              // console.log(hint.name,"sssssssssswwwwweeeeeeeeee")
            }
            // console.log("aaaaaaaaaaaaa8888888888888888")
          }
        },
        hint(){
          
        }
    },
    mounted(){
      axios.get('/api/list.json').then(res=>{
        console.log(res)
        this.likelist =res.data.list
      }).catch(err=>{
        console.log(err)
      });
      axios.get('/api/menu.json').then(res =>{
        let hint=[]
            this.searchlist = res.data.body.menulist;
            for (let i = 0; i < this.searchlist.length; i++) {
              const list = this.searchlist[i];
                for (let j = 0; j < list.list.length; j++) {
                  const hint = list.list[j];
                  this.hintName.push(hint.name)
                }
            }
            console.log(hint,"返回了什么")
           
      }).catch(err =>{
        console.log(err,"返回了什么错误")
      })
    }
}
</script>

<style lang="scss">
#likeTheFood{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  .search-food{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>