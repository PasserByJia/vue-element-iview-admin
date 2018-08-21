import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import router from '../router'

const service = axios.create({
  baseURL: process.env.BASE_URL, 
  timeout: 15000                  
})
// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.error(error) // for debug
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    //console.log(res.returnCode);
    if(res.returnCode!=="200"){
      if(res.returnCode==="001")
      {
        Message({
          showClose: true,
          message: res.returnMsg,
          type: 'error',
          duration: 500,
          onClose: () => {
            store.dispatch('NoLogIn').then(() => {
              location.reload()// 为了重新实例化vue-router对象 避免bug
            })
          }
        });
        return Promise.reject("未登录")
      }else if(res.returnCode==="403"){
        Message({
          showClose: true,
          message: res.returnMsg,
          type: 'error',
          duration: 1000,
          onClose: () => {
            router.push({path: '/'})
          }
        });
        return Promise.reject()
      }
    }else{
      if(res.returnData){
        return res.returnData;
      }else{
        return res;
      }
    }
  },
  error => {
    console.error('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)
export default service

