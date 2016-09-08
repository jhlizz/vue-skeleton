import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    indexMsg: '这是精选页面！',
    count: 0
};

const mutations = {
    CHANGEDATA (state) {
        state.indexMsg = `这是精选页面！你一共点了${ ++state.count }下按钮！`;
    }
};

export default new Vuex.Store({
    state,
    mutations
});
