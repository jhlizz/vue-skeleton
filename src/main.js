import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import configRouter from './router';

import VueResource from 'vue-resource';

import MockRenderer from './vuex/mock';
MockRenderer();

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter();

configRouter(router);

router.start(App, '#app');




