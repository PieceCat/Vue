<template>
    <mt-swipe>
        <mt-swipe-item v-for="(item, index) in imgList" :key="index" >
			<a  v-bind:href="item.url">
		  		<img v-bind:src="item.img" alt="轮播图">
		  	</a>
	    </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    import Vue from 'vue'
    import {Swipe,SwipeItem} from 'mint-ui'

    import 'mint-ui/lib/style.css'

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default{
        data(){
            return{
                imgList:[]
            }
        },
        created:function(){
            this.getlunbo()
        },
        props:['imgurl'],
        methods:{
            getlunbo:function(){
                this.$http
                .get(this.imgurl)
                .then((response)=>{
                    if(response.status===200 && response.data.status===0){
                        this.imgList = response.data.message;
                    }else{
                        console.log('服务器内部错误');
                    }
                })
                .catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
    
</script>
<style scoped>
    .mint-swipe{
        height: 250px;
    }
    .mint-swipe img{
        width: 100%;
        height: 100%;
    }
    
</style>
