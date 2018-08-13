import store from './'
import {getToken, removeToken, setToken} from '@/utils/token-util'
import router from '../router'

const user = {
    state: {
      nickname: "",
      userId: "",
      avatar: 'http://ww2.sinaimg.cn/orj480/4c5bf3f1gw1f9cophprgwj20hs0hsdgp.jpg',
      role: '',
      menus: [],
      permissions: [],
    },
    mutations: {
      SET_USER: (state, userInfo) => {
        state.avatar = userInfo.avatar
        state.nickname = userInfo.nickname;
        state.userId = userInfo.userId;
        state.role = userInfo.roleName;
        state.menus = userInfo.menuList;
        state.permissions = userInfo.permissionList;
      },
      RESET_USER: (state) => {
        state.nickname = "";
        state.userId = "";
        state.role = '';
        state.menus = [];
        state.permissions = [];
      }
    },
    actions: {
      // 获取用户信息
      GetInfo({commit, state}) {
       let form = {
          userPermission:
          {
            menuList:["role1","user","article"],
            avatar: 'http://ww2.sinaimg.cn/orj480/4c5bf3f1gw1f9cophprgwj20hs0hsdgp.jpg',
            roleId:349,
            nickname:"管理员账户--为方便大家登陆测试，请勿修改此号",
            roleName:"ABC",
            permissionList:["article:list","user:list","role:list","role:add"],
            userId:10003
          }
        }
        return new Promise((resolve, reject) => {
          //储存用户信息
          commit('SET_USER', form.userPermission);
          //cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
          setToken();
          //生成路由
          let userPermission = form.userPermission ;
          store.dispatch('GenerateRoutes', userPermission).then(() => {
            //生成该用户的新路由json操作完毕之后,调用vue-router的动态新增路由方法,将新路由添加
            router.addRoutes(store.getters.addRouters)
          })
        })
      },
     
     
    }
}
export default user