import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import configRouter from './router';
import MockInit from 'Vuex/mock';
import VueResource from 'vue-resource';

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
