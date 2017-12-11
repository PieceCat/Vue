<template>
  <div class="mui-content">
      <div class="shopcar">
          <div class="row" v-for="item in shopcarlist" :key="item.id">
              <div class="left">
                  <mt-switch v-model="value"></mt-switch>
              </div>
              <div class="center">
                  <img :src="item.thumb_path" alt="">
              </div>
              <div class="right">
                <h4>{{ item.title }}</h4>
                <span>￥{{ item.sell_price }}</span>
                <div class="num"><sum></sum></div>
                <a href="#">删除</a>
              </div>
          </div>

      </div>
  </div>
</template>
<script>
    import sum from '../Subcomp/sum.vue'
    export default{
        data(){
            return{
                shopcarlist:[]
            }
        },
        props:['id'],
        created(){
           this.getShopcarList()
        },
        components:{
            sum
        },
        methods:{
             getShopcarList(){
                let url = 'goods/getshopcarlist/87'
                this.axios
                    .get(url)
                    .then((response)=>{
                        if(response.status === 200 && response.data.status === 0){
                            this.shopcarlist = response.data.message
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
    .mui-content{
        background-color: #fff;
    }
    .row{
        display: flex;
        padding: 10px 5px;
        border-bottom: 1px solid rgba(1, 1, 1, 0.3)
    }
    .row .left{
        padding-top: 20px;
    }
    .row .center{
        margin-left: 5px;
    }
    .row .center img{
        width: 75px;
        height: 75px;
    }
    .row .right{
        margin-left: 5px;
    }
    .row .right h4{
        font-size: 16px;
        padding: 5px 0;
        margin: 5px 0;
        color: #0094ff;
    }
    .row .right span{
        color: red;
        font-size: 20px;
    }
    .row .right a{
        font-size: 14px;
        color: gray;
        margin-left: 5px;
    }
    .row .right .num{
        display: inline-block;
    }
</style>

