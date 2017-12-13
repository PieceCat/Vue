<template>
<<<<<<< HEAD
  <div ref="muicontent" class="mui-content">
    <mt-loadmore :autoFill="false" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" 
    @bottom-status-change="statusChange" ref="loadmore">
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goods" :key="item.id">
                <router-link :to="{name:'goodsDetail',params:{id:item.id}}">
                <img class="mui-media-object" :src="item.img_url">
                <h5>{{ item.title }}</h5>
                </router-link>    
                <div class="box">
                <div class="price">
                    <h6><span>￥{{ item.sell_price }}</span><s>￥{{ item.market_price}}</s></h6>
                    <div class="sell">
                    <span class="count">剩{{ item.stock_quantity}}件</span>
                    <span class="topsell">热卖中</span>
                    </div>
                </div>
                </div>
            </li>
        </ul>   
=======
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
>>>>>>> dev
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
<<<<<<< HEAD
        let height = document.documentElement.clientHeight
        this.$refs.muicontent.style.height = height+'px'
=======
      let height = document.documentElement.clientHeight
      this.$refs.muicontent.style.height = height + 'px'
>>>>>>> dev
    },
    methods:{
      getgoodslist(){
        let url = 'getgoods?pageindex='+this.pageindex
        this.axios
          .get(url)
          .then((response)=>{
            if(response.status === 200 && response.data.status === 0){
<<<<<<< HEAD
                if(response.data.message.length === 0){
                    this.allLoaded = true
                }
                
              this.goods = this.goods.concat(response.data.message)
=======
              if(response.data.length === 0){
                //没有数据的时候length为0，告诉loadmore数据加载完毕
                allLoaded:true
              }
              this.goods = this.goods.concat(response.data.message)
              //对数据加载完毕后对组件进行一些重新定位的操作
>>>>>>> dev
              this.$refs.loadmore.onBottomLoaded()
            }
          })
          .catch((err)=>{
<<<<<<< HEAD
              console.error(err)
          })
      },
      loadBottom(){
          console.log('调用了');
          this.pageindex++
          this.getgoodslist()
      },
      statusChange(status){
          console.log(status);
=======
            console.error(err);
          })
      },
      loadBottom(){
        this.pageindex++;
        this.getgoodslist();
      },
      statusChange(status){
        console.log(status);
>>>>>>> dev
      }
    }
}
</script>
<style scoped>
    .mui-table-view:before {
        display: none;
    }
<<<<<<< HEAD
    
    .mui-table-view:after {
        display: none;
=======
    .mint-loadmore{
      padding-bottom: 50px;
>>>>>>> dev
    }
    
    .mui-content>.mui-table-view:first-child {
        margin-top: 0px;
    }
    
    .mui-table-view.mui-grid-view .mui-table-view-cell {
        margin-right: 0px;
        padding: 0px;
    }
    
    .mui-table-view.mui-grid-view {
        padding: 5px;
    }
    
    .mui-table-view-cell {
        border: 1px solid rgba(92, 92, 92, 0.5);
        box-shadow: 0 0 4px #666;
        padding: 4px;
        margin-top: 5px;
        margin-left: 5px;
        width: 48%;
    }
    
    .mui-table-view-cell img {
        width: 100%;
    }
    
    .mui-table-view-cell:after {
        display: none;
    }
    
    .mui-table-view-cell>a {
        margin: 0;
    }
    
    .mui-table-view.mui-grid-view .mui-table-view-cell>a:not(.mui-btn) {
        margin: 0;
        margin-bottom: 5px;
        text-align: left;
        color: #000;
        white-space: normal;
    }
    h5{
        color:#000;
        text-align: left;
        font-size:12px;
        font-family: '微软雅黑';
        padding: 0 2px;
        display: block;
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
    .mint-loadmore{
        padding-bottom: 50px;
    }
</style>

