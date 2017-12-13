<template>
<<<<<<< HEAD
  <div class="number">
    <div @click="add" class="left">+</div><div class="middle">{{ count }}</div><div class="right" @click="sub">-</div>
=======
  <div class="mui-content-padded">
    <div class="mui-numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button" v-on:click="plus">+</button>
      <input class="mui-input-numbox" type="number" v-model="count" @keyup="inpNum"/>
      <button class="mui-btn mui-btn-numbox-minus" type="button" v-on:click="sub">-</button>
    </div>
>>>>>>> dev
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
<<<<<<< HEAD
      add(){
        if(this.count >= this.storageNum){
          return
        }
        this.count++
      },
      sub(){
        if(this.count === 1){
          return
        }
        this.count--
      },
      inpNum(){
        if(this.count > this.storageNum || this.count < 1){
          this.count = 1
=======
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
<<<<<<< HEAD
        if(this.number > this.storageNum || this.number < 1){
          this.number = 1
>>>>>>> dev
        }
      },
      notify(){
        this.$emit('numberchange',this.count)
=======
        if(this.count > this.storageNum || this.count < 1){
          this.count = 1
        }
      },
      notify(){
        this.$emit('numberChange',this.count)
>>>>>>> dev
      }
    }
  }
</script>
<style scoped>
  .number {
    display: inline-block;
    text-align: center;
  }

  .number .left,
  .number .middle,
  .number .right {
    display: inline-block;
    width: 30px;
    height: 25px;
<<<<<<< HEAD
    border: 1px solid rgba(92, 92, 92, 0.5);
  }

  .number .middle {
    width: 40px;
    border-right: 0px;
    border-left: 0px;
=======
    line-height: 25px;
    display: inline-block;
<<<<<<< HEAD
>>>>>>> dev
=======
    width: 110px;
>>>>>>> dev
  }
</style>

