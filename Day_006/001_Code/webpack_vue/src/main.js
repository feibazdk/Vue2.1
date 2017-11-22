// 使用 webpack 如何构建vue项目
// console.log('Ok')

// 复习在普通网页中如何使用vue
// 1. 使用script标签，引入 vue 包
// 2. 在index页面中，创建一个 id 容器
// 4、创建 Vue 实例

// 在webpack中使用 vue
// 注意：在 webpack 中，使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，
// You are using the runtime-only build of Vue where the template......
// 只提供了 runtime-only 的方式，并没有提供类似网页中的使用方式
import Vue from "vue";

import login from './login.vue';

// 回顾 包的查找规则：
// 1. 找项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】
// 解决方法 1：
// import Vue from '../node_modules/vue/dist/vue.js'
// 解决方法 2： 在webpack.config.js 中进行配置

var vm = new Vue({
    el: '#app',
    data: {
        msg: '一杆梅子酒'
    },
    // render: function(createElement){
    //     // 在webpack中，如果想通过 vue 把一个组件放到页面中去展示，vm 实例 中的render 函数可以实现
    //     return createElement(login);
    // }
    render: c => c(login)
})

// 总结梳理： webpack 中如何使用 vue :
// 1. 安装vue的包：cnpm i vue -save
// 2. 在 webpack 中，推荐使用 .vue 组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader    cnpm i vue-loader vue-template-complier --save-dev
// 3. 在 main.js 中，导入 vue 模块  import Vue from 'vue'
// 4. 定义一个 .vue 结尾的组件，其中，组件有三部分组成： template script style
// 5. 使用 import login from './login.vue' 导入这个组件
// 6. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })
// 7. 在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域；


import es, { one, two as tow  } from './es.js';
console.log(es.name);
console.log(one)
console.log(tow)
