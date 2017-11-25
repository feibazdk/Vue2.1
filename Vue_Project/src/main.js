// 入口文件
import Vue from 'vue';

// 1.1 导入 路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);
// 1.3 导入自己的 router.js路由模块
import router from './router.js'

// 1.1 导入 路由的包
import VueResource from 'vue-resource';
// 1.2 安装路由
Vue.use(VueResource);
// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})


// 导入项目根组件
import App from './App.vue';
import './lib/style.css'

// 按需导入 Miut-ui 中的组件
import { Header, Swipe, SwipeItem, Button  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入 mui 文件
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';


var vm = new Vue({
    el: '#app',
    router,  // 1.4 挂载路由对象到 VM 实例上
    render: c => c(App)
})