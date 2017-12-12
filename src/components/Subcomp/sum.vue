<template>
  <div class="number">
    <div @click="add" class="left">+</div><div class="middle">{{ count }}</div><div class="right" @click="sub">-</div>
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
        if(this.number >= this.storageNum){
          return
        }
        this.number++
      },
      minus(){
        if(this.number === 1){
          return
        }
        this.number--;
      },
      inpNum(){
        if(this.number > this.storageNum || this.number < 1){
          this.number = 1
>>>>>>> dev
        }
      },
      notify(){
        this.$emit('numberchange',this.count)
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
>>>>>>> dev
  }
</style>

