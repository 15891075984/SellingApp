/*
 * @Author: your name
 * @Date: 2020-02-19 16:31:13
 * @LastEditTime: 2020-02-19 19:56:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \App\src\ajax\axios.js
 */
import axios from 'axios'
import {Toast} from 'vant'
//请求拦截器
// let Toast
axios.interceptors.request.use((config) => {
    // 请求接口地址  可根据 process.env.NODE_ENV 更改
    //全局引入loading
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:500000
    });
    config.baseURL = 'http://localhost:3100/'
    return config
},err => {
    console.log(11111, err)
    return Promise.reject(err);
})

axios.interceptors.response.use(response => {
    Toast.clear()
    //对 response进行检验  such  code = 0
    return response
},err => {
    console.log(22222, err)
    return Promise.reject(err)
})

export default  axios