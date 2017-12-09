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

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/search', component: search },
        { path: '/shopcar', component: shopcar },
        { path: '/news', component: news },
        { path: '/share', component: share },
        { path: '/contact', component: contact },
        { path: '/feedback', component: feedback },
        { path: '/buy', component: buy },
        { path: '/video', component: video },
        { name: 'newsDetail', path: '/detail/:id', component: newsdetail, props: true },
        { name: 'shareDetail', path: '/shareInfo/:id', component: sharedetail, props: true }
    ]
})

export default router