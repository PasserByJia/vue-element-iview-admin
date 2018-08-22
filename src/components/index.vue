<template>
    <div class="layout">
        <Layout>
            <!--顶部菜单-->
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo" >
                        <span >PPAP</span>
                    </div>
                    <div class="layout-nav">
                        <nav-bar></nav-bar>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{height:'650px'}">
                <!--侧边菜单栏-->
                <Sider hide-trigger :style="{background: '#fff'}">
                    <!--通过prop将菜单信息传递给子组件-->
                    <side-meun :routes="permission_routers"></side-meun>
                </Sider>
                <!--主体部分-->
                <Layout :style="{padding: '0 24px 24px'}">
                    <!--面包屑-->
                    <breadcrumb></breadcrumb>
                    <!--内容区域-->
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    //mapGetters 辅助函数 mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
    import {mapGetters} from 'vuex'
    import sideMeun from './layout/SideMeun';
    import navBar from './layout/NavBar';
    import breadcrumb from './layout/Breadcrumb'
    
    export default {
        components: {
            sideMeun,
            navBar,
            breadcrumb,
        },
        computed: {
            //获取到‘/store/getters.js’重新映射到permission_routers中的数据
            ...mapGetters([
                'permission_routers',
            ]),
        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>