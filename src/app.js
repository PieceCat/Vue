import Vue from 'vue';

//引用过滤器
import './config/filters'

//加载外部插件 
import './config/plugins'

//加载组件（模块）
import app from './app.vue'

//引入路由模块
import router from './config/router'

let vm = new Vue({
    el: '#app',
    router,
    render: c => c(app),
    created() {
        // 设置axios的拦截器
        // 发送请求之前
        // 此处this指向Vue实例
        this.axios.interceptors.request.use(function(config) {
            // Do something before request is sent
            //此处this因作用域不能指向Vue实例，可以使用.bind(this)改变指向，也可以用箭头函数
            this.$indicator.open('正在加载...');
            return config;
        }.bind(this), function(error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.axios.interceptors.response.use(function(response) {
            // Do something with response data
            this.$indicator.close();

            return response;
        }.bind(this), function(error) {
            // Do something with response error
            return Promise.reject(error);
        });
    }
})