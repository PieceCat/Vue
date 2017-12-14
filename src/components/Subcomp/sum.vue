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
        type:''
      }
    },
    props:['storageNum','num','id'],
    created(){
      this.count = this.num ? this.num : 1
    },
    methods:{
      plus(){
        if(this.count >= this.storageNum){
          return
        }
        this.count++
        this.type = 'plus'
        this.notify()
      },
      sub(){
        if(this.count === 1){
          return
        }
        this.count--
        this.type = 'sub'
        this.notify()
      },
      inpNum(){
        if(this.count > this.storageNum || this.count < 1){
          this.count = 1
        }
      },
      notify(){
        this.$emit('numberChange',{count:this.count,id:this.id,type:this.type})
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

