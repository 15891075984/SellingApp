
import axios from 'axios'
import { Toast } from 'mint-ui';

let httpCode = [      //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
    [400,'请求参数错误'],
    [401,'权限不足, 请重新登录'],
    [403,'服务器拒绝本次访问'],
    [404, '请求资源未找到'],
    [500, '内部服务器错误'],
    [501, '服务器不支持该请求中使用的方法'],
    [502, '网关错误'],
    [504, '网关超时'],
]
let httpCodeMap = new Map(httpCode);


axios.defaults.timeout = 10000;
axios.interceptors.request.use(config=>{
    if ( config.url === '/second-hand/login') {
        return config
    }
    if (localStorage.token) { //判断token是否存在
        config.headers.token = localStorage.token;  //将token设置成请求头
    }
    return config
})
axios.interceptors.response.use(config=>{
    console.log(config)

    //对请求status进行拦截，提示用户
    const status = config.status
    const message = httpCodeMap.get(status)
    if ( message ) {
        let instance = Toast( message );
        setTimeout(() => {
        instance.close();
        }, 2000);
    }
    //对后端接口code码进行拦截code 0 success 1 failed
    const code = config.data.code
    if (code !== 0) {
        let instance = Toast( config.data.message );
        setTimeout(() => {
            instance.close();
        }, 2000);
    }
    return config
},function(err){
    console.log('err',err)
})
export default axios