import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MockInit from 'Vuex/mock';
import configRouter from './router';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource);

// 根据当前环境判断是否初始化mockjs
if ('production' !== process.env.NODE_ENV) {
    MockInit();
}

// 配置vue-resource拦截器
Vue.http.interceptors.push((request, next) => {
    console.log('====================请求发送前的拦截处理====================');

    next((response) => {
        console.log('====================请求响应后的拦截处理====================');

        if (response.ok) {
            let data = JSON.parse(response.data);
            if (!data.success) {
                switch(data.code) {
                    case 401:
                        console.log('登录超时');
                        break;
                    case 403:
                        console.log('鉴权失败');
                        break;
                    case 408:
                        console.log('请求超时');
                        break;
                }
            }
        }
        return response;
    });

});

// 初始化vue-router路由
const router = new VueRouter({
    hashbang: false,
    history: true
});
configRouter(router);
router.start(App, '#app');
