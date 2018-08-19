import store from './'
import {getToken, removeToken, setToken} from '@/utils/token-util'
import router from '../router'
import {default as axios} from '@/utils/interceptor'

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
        state.nickname = userInfo.nickname;
        state.userId = userInfo.userId;
        state.role = userInfo.nickname;
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
      //登录
      Login({commit,state},loginForm){
        return new Promise((resolve,reject)=>{
          axios.put("/login",loginForm).then(data => {
            if(data=="success"){
              setToken();
            }
            resolve(data);
          }).catch(err => {
            reject(err)
          })
        })
      },
      // 获取用户信息
      GetInfo({commit, state}) {
        return new Promise((resolve,reject) => {
          axios.get("/getRes").then(data =>{
            //储存用户信息
            commit('SET_USER', data);
            //cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
            setToken();
            //生成路由
            let userPermission = data ;
            store.dispatch('GenerateRoutes', userPermission).then(() => {
              //生成该用户的新路由json操作完毕之后,调用vue-router的动态新增路由方法,将新路由添加
              router.addRoutes(store.getters.addRouters)
              resolve()
            })
          }).catch(err =>{
            reject(err)
          })
          
        })
      },
      // 登出
      LogOut({commit}) {
        return new Promise((resolve) => {
          axios.get("/logout").then(data => {
            commit('RESET_USER');
            removeToken();
            resolve();
          }).catch(err => {
            this.$message.error("error:500");
            reject(err)
          })
        })
      },
      NoLogIn({commit}){
        return new Promise((resolve) =>{
          commit('RESET_USER');
         // console.log(getToken());
          removeToken();
         // console.log(getToken());
          resolve();
        })
      },
    }
}
export default user