/*
 * @Author: your name
 * @Date: 2020-02-19 15:06:38
 * @LastEditTime: 2020-02-20 22:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \App\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Category from '@/pages/Category'
import Search from '@/pages/Search'
import Buy from '@/pages/Buy'
import NotFound from '@/pages/notFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:'/category',
      name:'Category',
      component: Category
    },{
      path: '/search',
      name:'search',
      component: Search
    },{
      path: '/buy/:id',
      name:'buy',
      component: Buy,
    },{
      path:'/404',
      name:'404',
      component: NotFound
    },{
      path:'*',
      redirect:'/404'
    }
  ]
})
