<template>
  <div class="mui-content">
    <div class="detail">
        <slider :imgurl="imgurl"></slider>
        <div class="sellInfo">
          <h4>{{ goodsInfo.title }}</h4>
          <div class="price">
            市场价：<s>￥{{ goodsInfo.market_price }}</s>
            销售价：<span>￥{{ goodsInfo.sell_price }}</span>
          </div>
          <div class="num">
            购买数量：
            <sum :storageNum="goodsInfo.stock_quantity"></sum>
          </div>
          <div class="button">
            <div class="mui-btn mui-btn-primary">立即购买</div>
            <button type="button" class="mui-btn mui-btn-danger">加入购物车</button>
          </div>
        </div>
        <div class="info">
          <h5>商品参数</h5>
          <div class="params">
            <p>商品编号：{{ goodsInfo.goods_no }}</p>
            <p>库存情况：{{ goodsInfo.stock_quantity }}</p>
            <p>上架时间：{{ goodsInfo.add_time}}</p>
          </div>
        </div>
        <div class="button">
          <router-link :to="{name:'goodsDesc',params:{id:goodsInfo.id}}"><mt-button type="primary" size="large" plain>图文介绍</mt-button></router-link>
          <router-link :to="{name:'goodsComment',params:{id:goodsInfo.id}}"><mt-button type="danger" size="large" plain>商品评论</mt-button></router-link>
        </div>  
    </div>
  </div>
</template>
<script>
  import slider from '../../Subcomp/slide.vue'
  import sum from '../../Subcomp/sum.vue'
  export default{
    data(){
      return{
        goodsInfo:{},
        imgurl:''
      }
    },
    props:['id'],
    created(){
      this.imgurl = 'getthumimages/'+this.id
      this.getGoodsInfo()
    },
    components:{
      slider,
      sum
    },
    methods:{
      getGoodsInfo(){
        let url = 'goods/getinfo/'+this.id
        this.axios
          .get(url)
          .then((response)=>{
            if(response.status === 200 && response.data.status === 0){
              if(response.data.length != 0){
                this.goodsInfo = response.data.message[0]
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
    background-color:#fff;
  }
  .detail>div{
    border: 1px solid rgba(92, 92, 92, 0.8);
    margin: 5px;
    border-radius: 5px;
    padding: 10px;
  }
  .sellInfo h4{
    color: #0094ff;
    border-bottom: 1px solid rgba(92, 92, 92, 0.3 );
    padding-bottom: 10px;
  }
  .price{
    margin: 10px;
    font-size: 14px;
  }
  .price s{
    margin-right: 20px;
  }
  .price span{
    color:red;
    font-size: 18px;
  }
  .mui-content-padded{
    display: inline-block;
  }
  .num{
    font-size: 14px;
    margin: 10px;
  }
  .mui-content-padded{
    margin: 0;
  }
  .button{
    margin: 10px;
  }
  .info h5{
    margin: 5px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.3 );
    font-size:14px;
    font-weight: bold;
  }
  .params p{
    font-size: 14px;
    color: #8f8f94;
    margin-bottom: 0;
  }
  .params{
    padding: 5px 30px;
  }
  .mint-button--primary.is-plain{
    margin-bottom: 10px;
  }
</style>

