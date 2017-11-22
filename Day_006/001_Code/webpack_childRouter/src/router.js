// 1. 导入 vue-router 包
import VueRouter from 'vue-router';

import login from './subcom/login.vue';
import register from './subcom/register.vue';

import mobile from './login/mobile.vue';
import account from './login/account.vue';

var router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: login,
            children: [
                { path: 'mobile', component: mobile },
                { path: 'account', component: account }
            ]
        },
        { path: '/register', component: register }
    ]
})


export default router;