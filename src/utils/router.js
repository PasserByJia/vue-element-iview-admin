import router from '../router'
import {getToken} from './token-util'
const whiteList = ['/login', '/404'] //白名单,不需要登录的路由
router.beforeEach((to, from, next) => {
    if(getToken()){ //如果有就直接到首页咯
        next();
    } else {
        if(to.path=='/login'){ //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login');
        }

    }
})
