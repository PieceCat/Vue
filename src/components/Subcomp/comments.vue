<template>
      <!--  评论 -->
    <div class="comment">
    <!--添加评论-->
        <h4>提交评论</h4>
        <div class="submitcomment">
            <textarea placeholder="请输入评论内容" class="textarea" v-model="content"></textarea>
            <button class="mui-btn mui-btn-primary" v-on:click="postComments">发表</button>
        </div>

        <div class="title">
            <h4>评论列表</h4>
        </div>    

    <!--评论列表-->
        <div class="item" v-for="item in comments" :key="item.id">
            <div class="content">{{item.content}}</div>
            <div>
                <span class="user">{{item.user_name}}</span>  <span>{{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
        </div>

        <div class="more">
            <button class="mui-btn mui-btn-primary mui-btn-outlined" @click="getmore">加载更多</button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                comments:[],
                content:'',
                pageIndex:1
            }
        },
        props:['newsid'],
        created(){
            this.getComments()
        },
        methods:{
            getComments(isReload){
                this.$http
                .get('getcomments/'+this.newsid+'?pageindex='+this.pageIndex)
                .then((response)=>{
                    if(response.status===200 && response.data.status===0){
                        if(response.data.length!==0){
                            if(!isReload){
                                this.comments = response.data.message
                            }else{
                                this.comments = this.comments.concat(response.data.message)
                            }
                        }else{
                            this.$toast('内部服务器错误')
                        }
                    }
                })
                .catch((err)=>{
                    console.error(err);
                })
            },
            postComments(){
                if(!this.content && this.content.length<=0){
                    this.$toast('请输入评论内容')
                    return
                }
                this.$http
                .post('postcomment/'+this.newsid,'content='+this.content)
                .then((response)=>{
                    if(response.data.status===0){
                        this.getComments()
                        this.content=''
                    }
                    this.$toast(response.data.message)
                })
            },
            getmore(){
                this.pageIndex++;
                this.getComments(true)
            }
        }
    }
    
</script>
<style scoped>
    .title{
       height: 100%;
       border-bottom: 2px solid rgba(92,92,92,0.1);
       padding: 10px 5px;
   }

    .title h3{
        font-size: 16px;
        font-weight: bold;
        color:#0094ff;
    }
    .title span{
        font-size:12px;
        color:rgba(92,92,92,0.6);
    }
    .content{
        padding: 5px 5px;
        width: 100%;
        
    }
    .detail {
    	margin-bottom: 50px;
    }
    .title {
		border-top: 1px solid rgba(92,92,92,0.4);
		border-bottom: 1px solid rgba(92,92,92,0.4);
		margin-top: 10px;
		padding: 10px 0px;

	}
	.textarea {
		margin-top: 10px;
		padding: 2px;
		width: 95%;
	}
	.submitarea {
		text-align: center;
	}
	.mui-btn-primary {
		width: 95%;
		
	}
	.wrap {
		border-bottom: 1px solid rgba(92,92,92,0.4);
		padding: 5px;

	}
	.other {
		font-size: 15px;
		padding: 5px;
		display: flex;
		justify-content: space-between;
	}
	.user {
		color: skyblue;
	}
	.more {
		margin-top: 10px;
		text-align: center;
		padding: 5px;

	}
</style>
