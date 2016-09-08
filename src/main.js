import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import configRouter from './router';

import VueResource from 'vue-resource';

// import Mock模块，并根据当前环境判断是否初始化
import MockInit from 'Vuex/mock';
if ('production' !== process.env.NODE_ENV) {
    MockInit();
}

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    hashbang: false,
    history: true
});

configRouter(router);

router.start(App, '#app');
