import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import configRouter from './router';

// import MockRenderer from './mock';
// MockRenderer();

Vue.use(VueRouter);

const router = new VueRouter();

configRouter(router);

router.start(App, '#app');


