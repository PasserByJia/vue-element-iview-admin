<template>
    <div>
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <template v-for="item in routes" >
                <Submenu :name="item.name" :key="item.key" v-if="!item.hidden&&item.children">
                    <template slot="title">
                        <Icon :type="item.meta.icon"></Icon>
                        <span class="layout-text">{{item.name}}</span>
                    </template>
                    <template v-for="child in item.children">
                        <MenuItem :name="child.name" :to="child.path" :key="child.key">
                            <Icon :type="child.meta.icon"></Icon>
                            <span class="layout-text" :key="child.key">{{child.name}}</span>
                        </MenuItem>
                    </template>
                </Submenu>
            </template>
        </Menu>
    </div>
</template>
<script>
    export default {
        name: 'SidebarItem',
        props: {
            routes: {
                type: Array
            }
        },
    }
</script>
