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
            <sum :storageNum="goodsInfo.stock_quantity" @numberChange="numberChanged"></sum>
            <transition 
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter"
                    v-on:after-leave="afterLeave">
            <div v-show="isShow" class="ball"></div>
            </transition>
          </div>
          
          <div class="button">
            <div class="mui-btn mui-btn-primary">立即购买</div>
            <button @click="addshopcar" class="mui-btn mui-btn-danger">加入购物车</button>
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
          <!-- <router-link :to="{name:'goodsDesc',params:{id:goodsInfo.id}}"><mt-button type="primary" size="large" plain>图文介绍</mt-button></router-link> -->
          <a @click="push" class="mui-btn mui-btn-primary mui-btn-outlined">图文介绍</a>
          <!-- <router-link :to="{name:'goodsComment',params:{id:goodsInfo.id}}"><mt-button type="danger" size="large" plain>商品评论</mt-button></router-link> -->
          <a @click="pushone" class="mui-btn mui-btn-danger mui-btn-outlined">商品评论</a>
        </div>  
    </div>
  </div>
</template>
<script>
  import slider from '../../Subcomp/slide.vue'
  import sum from '../../Subcomp/sum.vue'
  import vueObj from '../../../config/communication'
  import { setData } from '../../../config/localstorageHelp'
  export default{
    data(){
      return{
        goodsInfo:{},
        imgurl:'',
        count:1,
        isShow:false
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
      },
      push(){
        this.$router.push({name:'goodsDesc',params:{id:this.id}})
      },
      pushone(){
        this.$router.push({name:'goodsComment',params:{id:this.id}})
      },
      //数字变化是触发该事件
      numberChanged(count){
        
        this.count = count
      },
      addshopcar(count){
        //点击添加购物车，把this.count传给通讯模块
        //显示小球
        this.isShow = true
        // vueObj.$emit('updateBadge',this.count)
        setData({id:this.id,count:this.count})
      },
      //执行动画的钩子函数
      beforeEnter(el){
        el.style.transform = 'translate(0,0)'
      },
      enter(el,done){
        
        //getBoundingClientRect()方法返回元素的大小以及相对于视口的位置
        //小球的位置
        let elX = el.getBoundingClientRect().left
        let elY = el.getBoundingClientRect().top
        //badge的位置
        //通过dom获取badge
        let badge = document.querySelector('.mui-badge')
        let badgeX = badge.getBoundingClientRect().left
        let badgeY = badge.getBoundingClientRect().top

        let x = badgeX - elX
        let y = badgeY - elY
        
        el.style.transform = `translate(${x}px,${y}px)`
        done()
      },
      afterEnter:function(el){
        this.isShow = false
      },
      afterLeave:function(){
        //当小球完全离开的时候更新badge
        vueObj.$emit('updateBadge',this.count)
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
    position: relative;
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
  .mint-button{
    font-size: 14px;
    height: 35px;
  }
  .button a{
    width: 100%;
  }
  .button a:first-child{
    margin-bottom: 10px;
  }
  .ball {
    left: 115px;
    top: 3px;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: red;
    transition: all 0.5s linear;
    z-index: 1000;
  }
</style>

