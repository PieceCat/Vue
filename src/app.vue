<template>
    <div class="container">
        <header class="mui-bar mui-bar-nav">
			<a v-if="isShow" @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">底部选项卡-div模式</h1>
		</header>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon iconfont icon-weibo"><span class="mui-badge">{{ count }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		<router-view></router-view>
    </div>
</template>
<script>
	import vueObj from './config/communication'
	//导入本地存储模块
	import { getData } from './config/localstorageHelp'
    export default{
        data(){
            return{
				isShow:false,
				count:0
            }
		},
		methods:{
			goback(){
				//后退
				this.$router.back()
			},
			judgeBack(path){
				let arr = ['/home','/member','/shopcar','/search']
				if(arr.indexOf(path) == -1){
					this.isShow = true;
				}else{
					this.isShow = false;
				}
			}
		},
		created(){
			this.judgeBack(this.$route.path)
			//当组件创建完毕，监听updateBadge事件
			vueObj.$on('updateBadge',(count)=>{
				this.count += count
			})
			//读取本地存储中商品的总数
			let data = getData()
			let count = 0;
			data.forEach(item => {
				count += item.count
			});
			this.count = count
		},
		watch: {
			'$route':function(newValue){
				this.judgeBack(newValue.path)
			}
		}
    }
</script>

<style scoped>
    
</style>