<template>
    <div class="layout">
        <Layout>
            <!--顶部菜单 Breadcrumb-->
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
                <Sider hide-trigger :style="{background: '#fff'}">
                    <side-meun :routes="permission_routers"></side-meun>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                        <breadcrumb></breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
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