<template>
  <div class="mui-content">
      <div class="title">
          <h3>{{ imageInfo.title }}</h3>
          <span>{{ imageInfo.add_time | fmtdate('YYYY-MM-DD') }}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>点击次数{{ imageInfo.click }}</span>
      </div>

      <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in imageUrl" :key="index">
                <a href="#">
                   <img class="preview-img" :key="index" :src="item.src" height="100" @click="$preview.open(index, imageUrl)">
                </a>
            </li>
        </ul> 

        <p class="content" v-html="imageInfo.content">
        </p>
        
        <comment :newsid="id"></comment>
        
  </div>
</template>
<script>
    import comments from '../../Subcomp/comments.vue'
    export default{
        data(){
            return{
                imageInfo:{},
                imageUrl:[]
            }
        },
        created(){
            this.getImageInfo(),
            this.getImage()
        },
        components:{
            comment:comments
        },
        props:['id'],
        methods:{
            getImageInfo(){
                this.$http
                .get('getimageInfo/'+this.id)
                .then((response)=>{
                    if(response.status===200&&response.data.status===0){
                        if(response.data.length!=0){
                             this.imageInfo = response.data.message[0]
                        }else{
                            this.$toast('服务器内部错误')
                        }
                    }
                })
                .catch((err)=>{
                    console.error(err);
                })
            },
            getImage(){
                this.axios
                .get('getthumimages/'+this.id)
                .then((response)=>{
                    if(response.status === 200 && response.data.status === 0){
                        this.imageUrl = response.data.message
                        this.imageUrl.forEach(item => {
						item.h = 400;
						item.w = 600;
					})
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
    .mui-content {
    background-color: #fff;
    }
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
        font-size: 14px;
        color: #8f8f94;
        
    }
    .info {
    	margin-bottom: 50px;
    }

    /*九宫格样式*/
    .mui-grid-view.mui-grid-9 {
    	background-color: #fff;
    	border-top: 0px;
    	border-left: 0px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    	border-right: 0px;
    	border-bottom: 0px;
    	padding: 0px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn) {
    	padding: 5px;
    }

</style>
