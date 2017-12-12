<template>
  <div class="mui-content" ref="muicontent">
    <mt-loadmore :autoFill="false" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="statusChange" ref="loadmore">
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goods" :key="item.id">
          <router-link :to="{name:'goodsDetail',params:{id:item.id}}">
            <img class="mui-media-object" :src="item.img_url">
          </router-link>    
          <div class="box">
            <h5>{{ item.title }}</h5>
            <div class="price">
              <h6><span>￥{{ item.sell_price }}</span><s>￥{{ item.market_price }}</s></h6>
              <div class="sell">
                <span class="count">剩{{ item.stock_quantity}}件</span>
                <span class="topsell">热卖中</span>
              </div>
            </div>
          </div>
        </li>
      </ul>    
    </mt-loadmore>
  </div>
</template>
<script>
export default {
    data(){
      return{
        goods:[],
        pageindex:1,
        allLoaded:false
      }
    },
    created(){
      this.getgoodslist()
    },
    mounted(){
      let height = document.documentElement.clientHeight
      this.$refs.muicontent.style.height = height + 'px'
    },
    methods:{
      getgoodslist(){
        let url = 'getgoods?pageindex='+this.pageindex
        this.axios
          .get(url)
          .then((response)=>{
            if(response.status === 200 && response.data.status === 0){
              if(response.data.length === 0){
                //没有数据的时候length为0，告诉loadmore数据加载完毕
                allLoaded:true
              }
              this.goods = this.goods.concat(response.data.message)
              //对数据加载完毕后对组件进行一些重新定位的操作
              this.$refs.loadmore.onBottomLoaded()
            }
          })
          .catch((err)=>{
            console.error(err);
          })
      },
      loadBottom(){
        this.pageindex++;
        this.getgoodslist();
      },
      statusChange(status){
        console.log(status);
      }
    }
}
</script>
<style scoped>
    .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn){
      margin: -7px;
    }
    .mint-loadmore{
      padding-bottom: 50px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell{
          padding: 5px;
      }
    .mui-grid-view li{
        border: 1px solid rgba(92,92,92,0.4);
        margin: 4px 2px 4px 4px;
        box-shadow:0 0 4px #666;
        height: 300px;
        position: relative;
    }

    .box {
    	position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
    }
    .box h5{
        color:#000;
        text-align: left;
        font-size:12px;
        font-family: '微软雅黑';
        padding: 0 2px;
    }
    .box .price{
        height: 60px;
        background-color: rgba(92,92,92,0.1);
        margin: 0;
        padding: 5px;
    }
    .box .price h6{
        text-align: left;
    }

    .box .price h6 span{
        color:red;
        font-size: 14px;
        margin-right: 15px;
    }
    .sell{
        margin-top: 15px;
        font-size: 12px;
    }
    .sell .topsell{
        float: left;
        width: 40%;
        text-align: left;
        color:rgba(92,92,92,0.8);
    }
    .sell .count{
        float: right;
        width: 55%;
        text-align: right;
        color:rgba(92,92,92,0.8);
    }
</style>

