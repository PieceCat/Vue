<template>
  <div class="mui-content">
      <div class="shopcar">
          <div class="row" v-for="(item,index) in goodslist" :key="item.id">
              <div class="left">
                  <mt-switch v-model="values[index]"></mt-switch>
              </div>
              <div class="center">
                  <img width="75" height="75" :src="item.thumb_path" alt="">
              </div>
              <div class="right">
                <h4>{{ item.title }}</h4>
                <span>￥{{ item.sell_price }}</span>
                <div class="num"><sum @numberChange="numberChanged" :num="item.count" :id="item.id"></sum></div>
                <a @click="deleteGoods(item.id)">删除</a>
              </div>
          </div>

        <div class="total">
			<div class="left">
				<h4>总计(不含运费):</h4>
				<span>已经选择商品 {{ total }} 件，共计￥{{ totalPrice }}元</span>
			</div>
			<div class="right">
				<button  class="mui-btn mui-btn-danger">去结算</button>
			</div>
		</div>
      </div>
  </div>
</template>
<script>
    import vueObj from '../../config/communication'
    import sum from '../Subcomp/sum.vue'
    import { getData,update,deleteData } from '../../config/localstorageHelp'
    export default{
        data(){
            return{
                goodslist:[],
                values:[],
                totalPrice:0,
                total:0
            }
        },
        created(){
           this.getData()
        },
        components:{
            sum
        },
        methods:{
             getData(){
                //获取本地存储中的数据
                let data = getData()
                let ids = [];
                if (data.length === 0){
                    return
                }
                //遍历本地存储中的数据，把id放在数组中
                data.forEach(item => {
                    ids.push(item.id)
                    //初始化 mt-swich 需要绑定的数组
                    this.values.push(false)
                });
                let url = 'goods/getshopcarlist/'+ids.join(',')
                this.axios
                    .get(url)
                    .then((response)=>{
                        if(response.status === 200 && response.data.status === 0){
                            this.goodslist = response.data.message

                            // 为了方便把本地存储中存储的商品对象中的count属性  赋给 goodslist数组中的每一个对象
                            // 对data数组和goodslist数组排序，保证 索引和id的属性是一致的
                            data.sort(function(item1,item2){
                                return item1.id > item2.id
                            })
                            this.goodslist.sort(function(item1,item2){
                                return item1.id > item2.id
                            })
                            
                            // 4 把本地存储中存储的商品对象中的count属性，赋给 goodslist数组中的每一个对象上
                            data.forEach((item,index)=>{
                                this.goodslist[index].count = item.count
                            })
                        }else{
                            console.log('服务器内部错误');
                        }
                    })
                    .catch((err)=>{
                        console.error(err);
                    })
            },
            deleteGoods(id){
                //先删除id
                deleteData(id)
                //根据id找出该id所在数组中的索引值
                let index = this.goodslist.findIndex((item)=>{
                    return item.id == id
                })
                //从本地localstorage中删除该项
                this.goodslist.splice(index,1)
                this.values.splice(index,1)

                // 3 tab栏中的badge中的数据要改
                // 触发自定义事件，告知app.vue要更新badge
                vueObj.$emit('update')
            },
            
            numberChanged(obj){
                //点击sum组件的时候
                //1.更新本地存储 商品的id +1 或者-1
                let num = obj.type === 'plus' ? 1 : -1
                update({id : obj.id,num : num})
                //2.通知app.vue 要更新badge
                vueObj.$emit('update')

                //3.更新goodslist 中的数据
                let data = getData()
                data.sort(function(item1,item2){
                    return item1.id > item2.id
                })
                this.goodslist.sort(function(item1,item2){
                    return item1.id > item2.id
                })
                data.forEach((item,index)=>{
                    this.goodslist[index].count = item.count
                })
                let count = 0
                let totalPrice = 0
                
                this.values.forEach((item,index)=>{
                    if(item){
                        count += this.goodslist[index].count
                        totalPrice += this.goodslist[index].count*this.goodslist[index].sell_price
                    }
                })
                // 总价钱
                this.totalPrice = totalPrice
                // 总个数
                this.total = count
            }
        },
        watch: {
            'values':function(){
                let count = 0
                let totalPrice = 0
                this.values.forEach((item,index)=>{
                    if(item){
                        count += this.goodslist[index].count
                        totalPrice += this.goodslist[index].count*this.goodslist[index].sell_price
                    }
                })
                this.totalPrice = totalPrice
                this.total = count
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

