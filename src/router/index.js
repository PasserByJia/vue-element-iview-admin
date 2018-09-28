import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/nav1/HelloWorld'
import index from '@/components/index'
import test1 from '@/views/nav1/test1'
import test2 from '@/views/nav1/test2'
import page1 from '@/views/nav2/page1'
import page2 from '@/views/nav2/page2'
import login from '@/components/login'
import page404 from '@/views/404/404'
import welcome from '@/components/welcome'
import pc from '@/views/utils/PersonalCenter'
Vue.use(Router)
//基本路由,主要由无序权限的页面构成
export const constantRouterMap =[
  {path:'/login',component:login,hidden: true},
  {path: '/404', component: page404, hidden: true},
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/welcome',
    hidden: true,
    children:[{
      path: 'pc', component: pc,meta: {title: '修改密码'},
    }]
  },
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/welcome',
    hidden: true,
    children:[{
      path: 'welcome', component: welcome
    }]
  }
]

//实际注册到vue-router中的路由(实际上是可变的)
export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

//需要权限的路由存放在这数组当中
export const asyncRouterMap = [
  {
    path:'/path1',
    component : index,
    redirect :'/HelloWorld',
    name:'导航一',
    meta:{icon:'ios-apps'},
    //通过menu确定这个路由需要的角色
    menu: '角色一',
    children:[
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        meta: {title: '1-1', icon: 'ios-menu'},
        component: HelloWorld
      },
      {
        path: '/test1',
        name: 'test1',
        meta: {title: '1-2', icon: 'ios-menu'},
        component: test1
      },
      {
        path: '/test2',
        name: 'test2',
        meta: {title: '1-3', icon: 'ios-menu'},
        component: test2
      },
    ]
  },
  {
    path:'/path2',
    component : index,
    redirect :'/page1',
    name:'导航二',
    meta:{icon:'ios-apps'},
    menu: '角色二',
    children:[
      {
        path: '/page1',
        name: 'page1',
        meta: {title: '2-1', icon: 'ios-menu'},
        component: page1
      },
      {
        path: '/page2',
        name: 'page2',
        meta: {title: '2-2', icon: 'ios-menu'},
        component: page2
      },
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]