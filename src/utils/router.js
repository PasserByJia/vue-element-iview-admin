import router from '../router'
import store from '../store'
import {getToken} from './token-util'
const whiteList = ['/login', '/404'] //白名单,不需要登录的路由
router.beforeEach((to, from, next) => {
    if(getToken()){ 
        //登录后将导向/login路由重定向到主页面
        if (to.path === '/login') {
            next({path: '/'})
            //检测vuex储存的用户信息是否还存在,不存在重新获取一次
        } else if (!store.getters.role) {
            store.dispatch('GetInfo').then(() => {
                next({...to})
            })
        } else {//next()终止跳出循环
            next()
        }
    }else if (whiteList.indexOf(to.path) !== -1) {
        //如果前往的路径是白名单内的,就可以直接前往
        next()
    }else {
        next('/login');
    }
})
