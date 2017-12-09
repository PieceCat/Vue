<template>
  <div class="mui-content">
    <div class="title">
      <h3>{{news.title}}</h3>
      <span>{{news.add_time | fmtdate("YYYY-MM-DD HH:mm:ss")}}&nbsp;&nbsp;&nbsp;&nbsp;{{news.click}}次浏览</span>
    </div>
    <div class="details" v-html="news.content">
    </div>
    <comments :newsid="id"></comments>
  </div>
</template>
<script>
    import comments from '../../Subcomp/comments.vue';
    export default{
        data(){
            return{
                news:{}
            }
        },
        created(){
            this.getDetail()
        },
        components:{
            comments
        },
        props:['id'],
        methods:{
            getDetail(){
                this.$http
                .get('getnew/'+this.id)
                .then((response)=>{
                    if(response.status===200 && response.data.status===0){
                        this.news = response.data.message[0]
                    }else{
                        this.$toast('服务器内部错误')
                    }
                })
                .catch((err)=>{
                    console.error(err)
                })
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
