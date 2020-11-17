<template>
    <div>
        <mu-container>
            <mu-flex justify-content="center">
                <mu-paper :z-depth="1">
                <mu-appbar color="primary">
                    <mu-button icon slot="left" to="home">
                    <mu-icon value="arrow_back"></mu-icon>
                    </mu-button>
                    返回
                </mu-appbar>
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
            </mu-flex>
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
            list: [{
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'Breakfast',
              author: 'Myron'
            }, {
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'Burger',
              author: 'Linyu'
            }, {
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'Camera',
              author: 'ruolin'
            }, {
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'Hats',
              author: 'kakali'
            }, {
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'Honey',
              author: 'yuyang'
            }, {
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'Morning',
              author: 'mokayi'
            }, {
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'Vegetables',
              author: 'NUyyyyyyy'
            }, {
              image: require('../../assets/images/imgc/c1.jpg'),
              title: 'water',
              author: 'TDDyyyyyyy'
            }]
        }
    },
    methods:{

    },
    mounted(){
      axios.get('/api/list.json').then(res=>{
        console.log(res)
        this.likelist =res.data.list
      }).catch(err=>{
        console.log(err)
      })
    }
}
</script>

<style lang="scss">

</style>