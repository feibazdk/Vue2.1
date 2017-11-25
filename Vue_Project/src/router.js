// 1. 导入 vue-router 包
import VueRouter from 'vue-router';

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/Newlist.vue'


var router = new VueRouter({
    // 配置路由骨子额
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: NewsList }
    ],
    // 覆盖默认路由高亮的类
    linkActiveClass: 'mui-active'
})


export default router;