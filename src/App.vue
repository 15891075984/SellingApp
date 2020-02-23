<!--
 * @Author: your name
 * @Date: 2020-02-19 15:06:38
 * @LastEditTime: 2020-02-23 21:30:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \App\src\App.vue
 -->
<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script>
import 'vant/lib/button/style';
export default {
  name: 'App',
  created () {
    this.ajax.get('/').then(res => {
      this.swiperData = res.data
      console.log(res.data)
    })
  },
  data() {
      return {
        searchValue: '',
        swiperData: []
      }
  }
}
</script>
