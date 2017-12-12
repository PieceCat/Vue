import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from '../components/Home/home.vue'
import member from '../components/Member/member.vue'
import search from '../components/Search/search.vue'
import shopcar from '../components/Shopcar/shopcar.vue'
import news from '../components/Home/News/news.vue'
import share from '../components/Home/Share/share.vue'
import buy from '../components/Home/Buy/buy.vue'
import contact from '../components/Home/Contact/contact.vue'
import feedback from '../components/Home/Feedback/feedback.vue'
import video from '../components/Home/Video/video.vue'
import newsdetail from '../components/Home/News/detail.vue'
import sharedetail from '../components/Home/Share/shareInfo.vue'
import buy from '../components/Home/Buy/buy.vue'
import goodsdetail from '../components/Home/Buy/buyInfo.vue'
import buycomment from '../components/Home/Buy/buyComments.vue'
import buydesc from '../components/Home/Buy/buyDesc.vue'


let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
<<<<<<< HEAD
        { path: '/', redirect: '/home' },
        { path: '/home', meta: { title: '首页' }, component: home },
        { path: '/member', meta: { title: '会员中心' }, component: member },
        { path: '/search', meta: { title: '搜索' }, component: search },
        { path: '/shopcar', meta: { title: '购物车' }, component: shopcar },
        { path: '/news', meta: { title: '新闻' }, component: news },
        { path: '/share', meta: { title: '分享' }, component: share },
        { path: '/contact', meta: { title: '联系我们' }, component: contact },
        { path: '/feedback', meta: { title: '反馈' }, component: feedback },
        { path: '/buy', meta: { title: '购买' }, component: buy },
        { path: '/video', meta: { title: '视频' }, component: video },
=======
        { path: '/', meta: { title: '首页' }, redirect: '/home' },
        { path: '/home', meta: { title: '首页' }, component: home },
        { path: '/member', meta: { title: '会员' }, component: member },
        { path: '/search', meta: { title: '搜索' }, component: search },
        { path: '/shopcar', meta: { title: '购物车' }, component: shopcar },
        { path: '/news', component: news },
        { path: '/share', component: share },
        { path: '/contact', component: contact },
        { path: '/feedback', component: feedback },
        { path: '/buy', component: buy },
        { path: '/video', component: video },
>>>>>>> dev
        { name: 'newsDetail', path: '/detail/:id', component: newsdetail, props: true },
        { name: 'shareDetail', path: '/shareInfo/:id', component: sharedetail, props: true },
        { name: 'goodsDetail', path: '/buy/:id', component: goodsdetail, props: true },
        { name: 'goodsComment', path: '/buy/comment/:id', component: buycomment, props: true },
        { name: 'goodsDesc', path: '/buy/desc/:id', component: buydesc, props: true }
    ]
})
router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '默认值'
    }
})


//路由跳转之后执行
router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '默认值'
    }
})

export default router