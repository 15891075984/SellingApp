/*
 * @Author: your name
 * @Date: 2020-02-19 15:06:38
 * @LastEditTime: 2020-02-23 21:10:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \App\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Search,Toast,Tabbar,TabbarItem } from 'vant'
import ajax from './ajax/http'
import store from './store/index'
import mint from './library/mint'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import UtilJS from './assets/js/util.js'
Vue.config.productionTip = false

//引入vant组件
Vue.use(Button).use(Search).use(Toast).use(Tabbar).use(TabbarItem)
//引入轮播图组件
Vue.use(VueAwesomeSwiper)

Vue.prototype.util = UtilJS

Vue.prototype.ajax = ajax
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
