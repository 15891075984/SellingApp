/*
 * @Author: your name
 * @Date: 2020-02-19 15:06:38
 * @LastEditTime: 2020-02-20 21:55:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \App\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Search,Toast } from 'vant'
import ajax from './ajax/http'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import UtilJS from './assets/js/util.js'
Vue.config.productionTip = false

//引入vant组件
Vue.use(Button).use(Search).use(Toast)
//引入轮播图组件
Vue.use(VueAwesomeSwiper)

Vue.prototype.util = UtilJS

Vue.prototype.ajax = ajax
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
