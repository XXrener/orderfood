<template>
  <div id="satart">
    <!-- 开始页面 -->
    <div class="satart_content">
      <header class="satart_header">
        <img :src="urlcanju" alt="" />
        <p>修改人数</p>
      </header>

      <p class="notice">*请重新选择人数，小二正在快马加鞭给你送餐具*</p>

      <div class="satart_list">
        <ul class="use_list">
          <li
            v-for="(num, index) in nums"
            :key="index"
            @click="maxplayers(index)"
          >
            <span :class="[select == index ? 'redColor' : '']">{{ num }}</span>
          </li>
        </ul>
      </div>
      <div class="mark_input">
        <input
          type="text"
          v-model="p_mark"
          
        />
          <!-- placeholder="请输入您的口味要求，忌口等（可不填）" -->
        <ul class="mark_list">
          <li
            class="taste"
            ref="index"
            v-for="(item, index) in taste"
            :key="index"
            @click="textOptions(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="people">
          <div class="btn" @click="changeCancel">
            <span>取消</span>
        </div>
        <div class="btn" @click="changeVerify">
            <span>确认</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urlcanju from "../assets/images/canju.jpg";
// import $ from 'jquery'
// import axios from 'axios'
export default {
  name: "satart",
  data() {
    return {
      msg: "开始组件挂载",
      urlcanju,
      selections: false,
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      select: 0,
      taste: ["打包带走", "不要放辣椒", "微辣","堂食","单身狗套餐"],
      p_mark:this.$store.state.remarks
    };
  },
  computed:{
   
  },
  methods: {
    changeCancel(){
      this.$router.go(-1)
    },
    changeVerify(){
      this.$store.commit("changePeople", this.nums[this.select]);
      this.$store.commit("changeRemarks", this.p_mark);
      this.$router.go(-1)
    },
    maxplayers(index) {
      //人数本地储存
      this.select = index;
      //当前数组下标 等于当前数组值
    },
    /* satartOrder() {
      this.$router.push({ path: "home" });
    }, */
    textOptions(index) {
      //口味选择
      let uid = index;
      this.p_mark += " " + this.$refs.index[uid].innerHTML.trim();
     
      console.log(this.p_mark);
    },
  },
  mounted() {
    // 初始化
    window.localStorage.clear();
    this.maxplayers(0);
  },
};
</script>

<style lang="scss">
#satart {
  .satart_header {
    width: 11rem;

    margin: 5rem auto 0rem auto;

    border-radius: 0.5rem;

    background: #000;

    img {
      height: 2.2rem;

      line-height: 2.2rem;
      position: relative;

      top: 0.5rem;
      margin-left: 1rem;
    }

    p {
      display: inline-block;
      height: 3.2rem;

      line-height: 3.2rem;
      color: #fff;
      padding-left: 0.5rem;
    }
  }

  .notice {
    color: red;
    //
    text-align: center;

    margin: 1rem 0rem;
    font-size: 1rem;
  }
  .mark_input {
    padding: 1rem;

    input {
      height: 3rem;
      line-height: 3rem;

      width: 100%;
      border: 1px solid #eee;
    }
  }
  .mark_list {
    display: flex;

    flex-wrap: wrap;
    padding: 0.5rem;

    li {
      //  width: 25%;
      padding: 0.5rem;
      box-sizing: border-box; /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/
      //  background-color: red;
      text-align: center;
      margin: 0.25rem;
      span {
        display: block;

        width: 100%;
        height: 3.2rem;

        line-height: 3.2rem;
        text-align: center;
        background: #fff;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
    }

    li.active {
      span {
        background: red;
        border: 1px solid red;

        color: #fff;
      }
    }
  }
  .use_list {
    display: flex;

    flex-wrap: wrap;
    padding: 0.5rem;

    li {
      width: 25%;
      padding: 0.5rem;
      box-sizing: border-box; /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/

      span {
        &.redColor {
          background-color: #26a2ff;
          color: white;
        }

        display: block;

        width: 100%;
        height: 3.2rem;

        line-height: 3.2rem;
        text-align: center;
        background: #fff;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
    }
  }
  .people{
    display: flex;
    
    justify-content: space-around;
   
    // align-items: center;
    .btn{
      // flex: 1;
      line-height: 3.5rem;
       
      span{
        display: block;
      width: 5.5rem;
      height: 3.5rem;
      color: #fff;
       text-align: center;
      letter-spacing: 0.3rem;
      background-color: #26a2ff;
       border-radius: .8rem;
     
      }
    }
  }
}
</style>