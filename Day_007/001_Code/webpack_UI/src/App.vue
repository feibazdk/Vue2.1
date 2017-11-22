<template>
  <div>

      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>

      <router-view></router-view>

      <mt-button plain type="primary" size="large" @click="show">蓝色天空</mt-button> <br>
      <mt-button type="danger" size="large">红色禁区</mt-button>

      <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>

<script>

    import { Toast } from "mint-ui";
    export default {
        data() {
            return {
                toastInstanse: null
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                // 模拟获取列表的 一个 AJax 方法
                // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
                this.show();
                setTimeout(() => {
                    //  当 3 秒过后，数据获取回来了，要把 Toast 移除
                    this.toastInstanse.close();
                }, 3000);
            },
            show() {
                this.toastInstanse = Toast({
                    message: "这是消息",
                    duration: -1, // 如果是 -1 则弹出之后不消失
                    position: "top",
                    iconClass: "glyphicon glyphicon-heart", // 设置 图标的类
                    className: "mytoast" // 自定义Toast的样式，需要自己提供一个类名
                });
            }
        }
    }
</script>


<style>

</style>
