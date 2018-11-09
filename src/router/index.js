import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import User from '@/pages/user'
import All from '@/pages/all'
import Law from '@/pages/law'
import Privacy from '@/pages/privacy'
import Agreement from '@/pages/agreement'
import Rule from '@/pages/rule'
import BusinessCode from '@/pages/businessCode'
import Winning from '@/pages/Winning'
import Activity from '@/pages/activity'
import NoActivity from '@/pages/noActivity'
import Dowm from '@/pages/dowm'
import Experience from '@/pages/experience'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'User',
            component: User
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/all',
            name: 'All',
            component: All
        },
        {
            path: '/law',
            name: 'law',
            component: Law
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement
        },
        {
            path: '/rule',
            name: 'rule',
            component: Rule
        },
        {
            path: '/businessCode',
            name: 'businessCode',
            component: BusinessCode
        },
        {
            path: '/Winning',
            name: 'Winning',
            component: Winning
        },
        {
            path: '/activity',
            name: 'activity',
            component: Activity
        },
        {
            path: '/noActivity',
            name: 'noActivity',
            component: NoActivity
        },
        {
            path: '/dowm',
            name: 'dowm',
            component: Dowm
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience
        }
    ]
})