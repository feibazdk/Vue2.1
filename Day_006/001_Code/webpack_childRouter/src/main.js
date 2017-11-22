import Vue from 'vue';
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter);

import App from './App.vue';

// 导入 自定义路由模块
import router from './router.js'


var vm = new Vue({
    el: '#app',
    router,
    render: c => c(App)
})