import Vue from 'vue';
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter);

import App from './App.vue';

import login from './main/login.vue';
import register from './main/register.vue';

var router = new VueRouter({
    routes: [
        { path: '/login', component: login },
        { path: '/register', component: register }
    ]
})

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(App)
})