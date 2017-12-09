import Vue from 'vue'

//引用axios
import axios from 'axios'
axios.defaults.baseURL = 'http://vue.studyit.io/api/'


Vue.prototype.$http = axios
Vue.prototype.axios = axios

//全局引用VuePreview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 全局引用mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
// 引用样式
import 'mint-ui/lib/style.css';
// 引用mui的css
import '../../statics/css/mui.css'