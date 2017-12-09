<template>
  <div class="mui-content">
    <div class="news">
        <ul class="mui-table-view">
            <li v-for="(item,index) in news" :key="index" class="mui-table-view-cell mui-media">
                <router-link :to="{name:'newsDetail',params:{id:item.id}}">
                    <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
                    <div class="mui-media-body mui-ellipsis">
                        {{item.title}}
                        <p class='time'>
                            发表时间:{{item.add_time | fmtdate('YYYY-MM-DD') }}
                            <span class="span">点击数：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                news:[]
            }
        },
        created:function(){
            this.getNews()
        },
        methods:{
            getNews(){
                this.$http.get('getnewslist')
                .then((response)=>{
                    if(response.status===200 && response.data.status===0){
                        this.news = response.data.message
                    }else{
                        this.$toast('服务器内部错误')
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
    .news{
        margin-bottom: 50px;
    }
    .mui-media-body{
        font-size: 15px;
    }
    .time{
        font-size: 12px;
        color: #0094ff;
        display: flex;
        justify-content: space-between;
    }
    
</style>

