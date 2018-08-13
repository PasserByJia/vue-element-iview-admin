<template>
    <h1>HELLO!!!!!!!!!!!!!{{nickname}}</h1>
</template>
<script>

    import {mapGetters} from 'vuex'
    export default {
        
        computed: {
            ...mapGetters([
                'nickname',
            ]),
        }
    }
</script>