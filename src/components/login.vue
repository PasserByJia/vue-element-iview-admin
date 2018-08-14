<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="handleSubmit2">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  //import NProgress from 'nprogress'
  import {setToken} from '../utils/token-util'
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        role1 : {
          userPermission:
          {
            menuList:["role1"],
            avatar: 'http://ww2.sinaimg.cn/orj480/4c5bf3f1gw1f9cophprgwj20hs0hsdgp.jpg',
            roleId:349,
            nickname:"角色一",
            roleName:"ABC",
            permissionList:["article:list","user:list","role:list","role:add"],
            userId:10003
          }
        },
        role2 : {
          userPermission:
          {
            menuList:["role2"],
            avatar: 'http://ww2.sinaimg.cn/orj480/4c5bf3f1gw1f9cophprgwj20hs0hsdgp.jpg',
            roleId:349,
            nickname:"角色二",
            roleName:"ABC",
            permissionList:["article:list","user:list","role:list","role:add"],
            userId:10003
          }
        },
        role3 : {
          userPermission:
          {
            menuList:["role1","role2"],
            avatar: 'http://ww2.sinaimg.cn/orj480/4c5bf3f1gw1f9cophprgwj20hs0hsdgp.jpg',
            roleId:349,
            nickname:"管理员账户",
            roleName:"ABC",
            permissionList:["article:list","user:list","role:list","role:add"],
            userId:10003
          }
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true,
      };
    },
    methods: {
      handleSubmit2(ev) {
         if(this.ruleForm2.account=="1"&&this.ruleForm2.checkPass=="1")
         {  
            this.$store.dispatch('GetInfo',this.role1).then(() => {
              this.$router.push({path: '/'})
            })
         }else if(this.ruleForm2.account=="2"&&this.ruleForm2.checkPass=="2"){
            this.$store.dispatch('GetInfo',this.role2).then(() => {
              this.$router.push({path: '/'})
            })
         }else if(this.ruleForm2.account=="3"&&this.ruleForm2.checkPass=="3"){
            this.$store.dispatch('GetInfo',this.role3).then(() => {
              this.$router.push({path: '/'})
            })
         }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>