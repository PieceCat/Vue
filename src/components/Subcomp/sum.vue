<template>
  <div class="mui-content-padded">
    <div class="mui-numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button" v-on:click="plus">+</button>
      <input class="mui-input-numbox" type="number" v-model="number" @keyup="inpNum"/>
      <button class="mui-btn mui-btn-numbox-minus" type="button" v-on:click="minus">-</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        number:1,
      }
    },
    props:['storageNum'],
    methods:{
      plus(){
        if(this.number < this.storageNum){
         
          this.number ++
        }else{
          this.$toast('请输入正确的数量')
          this.number=1
        }
      },
      minus(){
        if(this.number > 1){
          this.number--
        }
        this.$toast('请输入正确的数量')
        this.number=1
      },
      inpNum(){
        if(this.number > this.storageNum || this.number < 1){
          this.$toast('请输入正确的数量')
          this.number = 1
        }
      }
    }
  }
</script>
<style scoped>
  .mui-numbox{
    height: 25px;
    line-height: 25px;
  }
</style>

