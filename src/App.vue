<template>
    <div id="main">
        <div class="view">
            <router-view></router-view>
        </div>
        <div class="menubar">
            <Menubar></Menubar>
        </div>
    </div>
</template>

<script>
    import Menubar from 'components/Menubar';
    import store from 'Vuex/store';

    export default {
        ready: function() {
            this
            .$http
            .get('/featured/userinfo')
            .then(res => {
                console.log('====================请求成功====================');
                console.log(JSON.parse(res.data));
            });
        },
        components: {
            Menubar
        },
        store
    };
</script>

<style>
    html, #app {
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #main {
        height: 100%;
    }

    .view {
        height: 100%;
    }

    .menubar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: #fff;
    }
</style>
