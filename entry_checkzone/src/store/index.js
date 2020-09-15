import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        curpage: "Page_1",
        pagenum: 1,
        maxpage: 4,
        cooling: false,
    },
    mutations: {
        RESET: (state) => {
            state.curpage = "Page_1"
            state.pagenum = 1
        },
        SET_CURPAGE: (state) => {
            state.curpage = `Page_${state.pagenum}`;
        },
        SET_PAGENUM: (state, num) => {
            state.pagenum = num;
        },
        SET_COOLING: (state, val) => {
            state.cooling = val;
        },
        PASS: state => {
            state.curpage = "Gen_token"
            state.pagenum = 0;
        }
    },
    actions: {},
    modules: {},
});
