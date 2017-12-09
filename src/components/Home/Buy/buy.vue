<template>
  <div class="mui-content">
      <div class="buy">
        <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../../../../statics/images/cbd.jpg">
		                <div class="mui-media-body">幸福就是可以一起睡觉</div>
                </a>
            </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../../../../statics/images/cbd.jpg">
		                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
                </a>
            </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#"><img class="mui-media-object" src="../../../../statics/images/cbd.jpg">
		                <div class="mui-media-body">Color of SIP CBD</div>
                </a>
            </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../../../../statics/images/cbd.jpg">
		                <div class="mui-media-body">
                      <h5>静静看这世界</h5>
                      <div class="price">
                        <h6>￥2195<span>￥2195</span></h6>
                        <span>热卖总</span><span>剩70件</span>
                      </div>
                    </div>
                </a>
            </li>
		    </ul>    
      </div>
  </div>
</template>
<script>
export default {
    data(){
      return{

      }
    }
}
</script>
<style scoped>
  /* .mui-table-view.mui-grid-view .mui-table-view-cell{
    padding: 5px;
    margin: 4px;
    margin-right: -4px;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
    width: 100%
  } */
  .mui-plus.mui-android header.mui-bar{
    display: none;
  }
  .mui-plus.mui-android .mui-bar-nav~.mui-content{
    padding: 0;
  }
  .mui-media-body{
    height: auto;
  }
  .mui-media-body h5{
    font-size: 12px;
    margin: 5px 0;
  }
  .price{
    background-color: rgba(92,92,92,0.1);
    padding: 5px;
  }
</style>

