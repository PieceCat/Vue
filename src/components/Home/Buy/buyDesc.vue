<template>
  <div class="mui-content">
    <h3>{{ goodsDesc.title }}</h3>
    <div class="details" v-html="goodsDesc.content"></div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        goodsDesc:{}
      }
    },
    props:['id'],
    created(){
      this.getDesc()
    },
    methods:{
      getDesc(){
        let url = 'goods/getdesc/'+this.id
        this.axios
          .get(url)
          .then((response)=>{
            if(response.status === 200 && response.data.status === 0){
              if(response.data.length !=0 ){
                this.goodsDesc = response.data.message[0]
              }else{
                console.log('服务器内部错误');
              }
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
  .mui-content{
    background-color: #fff;
  }
  h3{
    padding: 10px;
    margin: 5px 0;
    border-bottom:1px solid rgba(92, 92, 92, 0.3);
    color:#0094ff
  }
</style>
