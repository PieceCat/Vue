<template>
    <div class="mui-content">
        <div class="share">
            <div class="category">
                <ul>
                    <li><a>全部</a></li>
                    <li v-for="(item,index) in category" :key="item.id">
                        <a>{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="imglist">
                <ul>
                    <li v-for="item in images" :key="item.id">
                        <router-link v-bind='{to:"/share"+item.id}'>
                            <img  v-lazy="item.img_url">
                        </router-link>
                    </li>
                </ul>
            </div>     
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                images:[],
                category:[]
            }
        },
        created:function(){
            this.getCategory()
            this.getImgList(0)
        },
        methods:{
            getCategory(){
                let url = this.common.apiHost+'getimgcategory'
                this.$http.get(url).then(response=>{
                    this.category = response.body.message
                    console.log(this.category)
                },response=>{
                    console.log('服务器错误')
                })
            },
            getImgList(cid){
                Indicator.open('加载中')
                let url = this.common.apiHost+'getimages/'+cid
                this.$http.get(url).then(response=>{
                    this.images=response.body.message
                    Indecator.close()
                },response=>{
                    console.log('服务器内部错误');
                })
            }
        }
    }
</script>
<style scoped>
    .share ul{
        list-style: none;
        overflow: hidden;
    }
    .category li {
        float: left;
    }
    .imglist img {
        width: 100%;
        height: 300px;
    }
</style>
