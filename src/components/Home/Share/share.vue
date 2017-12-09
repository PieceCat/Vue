<template>
    <div class="mui-content">
        <div class="share">
            <div class="category">
                <ul ref="cul">
                    <li>
                        <a v-on:click="getImgList(-1)">全部</a>
                    </li>
                    <li v-for="item in category" :key="item.id">
                        <a @click="getImgList(item.id)">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="imglist">
                <ul>
                    <li v-for="item in images" :key="item.id">
                        <router-link :to="{name:'shareDetail',params:{id:item.id}}">
                            <img  v-bind:src="item.img_url">
                            <p>
                                <span class="title" v-text="item.title"></span><br />
                                {{item.zhaiyao}}
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>     
        </div>
    </div>
</template>
<script>
    import { Indicator } from 'mint-ui'
    export default{
        data(){
            return{
                images:[],
                category:[]
            }
        },
        created:function(){
            this.getCategory()
            this.getImgList(-1)
        },
        methods:{
            getCategory(){
                this.$http
                .get('getimgcategory')
                .then((response)=>{
                    if(response.status===200&&response.data.status===0){
                        this.category = response.data.message
                        this.$refs.cul.style.width = 65 * (response.data.message.length + 1) + 'px';
                    }else{
                        alert('服务器内部错误')
                    }
                })
                .catch((err)=>{
                    console.err(err);
                })
            },
            getImgList(id){
                Indicator.open('加载中...')
                this.$http
                .get('getimages/'+id)
                .then((response)=>{
                    if(response.status===200&&response.data.status===0){
                        this.images=response.data.message
                        Indicator.close();
                    }else{
                        alert('服务器内部错误')
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
    
    .imglist p {
        color: #fff;
        position: absolute;
        bottom: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.4);
    }
    
    .imglist .title {
        font-weight: bold;
    }
    
    .imglist ul {
        padding: 0;
    }
    
    .imglist li {
        list-style: none;
        position: relative;
    }
    
    .imglist img {
        width: 100%;
        height: 300px;
        vertical-align: top;
    }
    /*image[lazy=loading] {
        width: 100%;
        height: 300px;
        margin: auto;
    }*/
    /*懒加载图片样式end*/
    
    .category {
        /*width: 1000px;*/
        overflow-x: auto;
        overflow-y: hidden;
    }
    
    .category ul {
        margin: 0px;
        padding: 0px;
    }
    
    .category>ul>li {
        list-style: none;
        display: inline-block;
        padding: 20px 5px;
    }
    
    .category li>a {
        color: #0094ff;
        font-size: 14px;
        cursor: pointer;
    }
    
    .share {
        margin-bottom: 50px;
        background-color: #fff
    }
</style>
