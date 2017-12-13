<template>
  <div class="mui-content-padded">
    <div class="mui-numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button" v-on:click="plus">+</button>
      <input class="mui-input-numbox" type="number" v-model="count" @keyup="inpNum"/>
      <button class="mui-btn mui-btn-numbox-minus" type="button" v-on:click="sub">-</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        count:1,
      }
    },
    props:['storageNum'],
    methods:{
      plus(){
        if(this.count >= this.storageNum){
          return
        }
        this.count++
        this.notify()
      },
      sub(){
        if(this.count === 1){
          return
        }
        this.count--
        this.notify()
      },
      inpNum(){
        if(this.count > this.storageNum || this.count < 1){
          this.count = 1
        }
      },
      notify(){
        this.$emit('numberChange',this.count)
      }
    }
  }
</script>
<style scoped>
  .mui-numbox{
    height: 25px;
    line-height: 25px;
    display: inline-block;
    width: 110px;
  }
</style>

