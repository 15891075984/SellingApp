<!--
 * @Author: your name
 * @Date: 2020-02-19 16:07:40
 * @LastEditTime: 2020-02-23 21:44:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \App\src\page\Index.vue
 -->

<template>
  <div class="main">
    <!-- <van-search
      v-model="searchValue"
      shape="round"
      background="#FFDA44"
      show-action
      placeholder="搜索宝贝/鱼塘/用户"
      @focus="goSearch"
    ><div slot="action" @click="goCategory">三</div>
    </van-search>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item) in swiperData" :key="item.id">
          <img :src="item.url" style="width:100%;height:150px" @click="handleClickImg(item)">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> -->
    <Search/>
    <IndexNav></IndexNav>
    <NavBottom ></NavBottom>
  </div>
</template>

<script>
import NavBottom from '../components/NavBottom'
import IndexNav from '../components/IndexNav.vue'
import Search from '../components/Search'
export default {
  name: 'Index',
  components:{
    NavBottom,
    IndexNav,
    Search
  },
  created () {
    this.ajax.get('/').then(res => {
      this.swiperData = res.data
      console.log(res.data)
    })
  },
  data() {
      return {
        searchValue: '',
        swiperData: [],
        swiperOption: {
          init:false,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    updated() {
      if (this.swiperData.length>1) {
        this.swiper.init();
      }
    },
    methods: {
      handleClickImg (item) {
        this.$router.push({name:'buy',params:{id:item.id}})
      },
      //查询按钮
      onSearch (value) {
        alert(value)
      },
      //取消查询
      onCancel (value) {
        alert(value)
      },
      goSearch () {
        this.$router.push({path:'/search'})
      },
      goCategory () {
        this.$router.push({path:'/category'})
      }
    }
}
</script>
<style>
</style>
