<template>
  <div class="mui-content">
    <comment :newsid="id"></comment>
  </div>
</template>
<script>
import comments from '../../Subcomp/comments.vue'
export default {
  data(){
    return{

    }
  },
  props:['id'],
  components:{
    comment:comments
  }
}
</script>
<style scoped>

</style>


