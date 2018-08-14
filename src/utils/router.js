import router from '../router'
import store from '../store'
import {getToken} from './token-util'
const whiteList = ['/login', '/404'] //白名单,不需要登录的路由
router.beforeEach((to, from, next) => {
    if(getToken()){ //如果有就直接到首页咯
        if (to.path === '/login') {
            next({path: '/'})
          } else if (!store.getters.role) {
            store.dispatch('GetInfo').then(() => {
                next({...to})
            })
          } else {
            next()
          }
    }else if (whiteList.indexOf(to.path) !== -1) {
        //如果前往的路径是白名单内的,就可以直接前往
        next()
    }else {
        next('/login');

    }
})
