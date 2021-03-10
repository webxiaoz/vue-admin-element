import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/*** @Description: 解决重复点击路由报错问题*/
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import Layout from '@/views/layout'

/*** @Description:
 * 所有权限通用路由表
 *如首页和登录页和一些不用权限的公用页面
 * */
export const constantRouterMap = [
    {
        path: '/login',
        name:'Login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard' },
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },
    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: 'Example', icon: 'el-icon-s-help' },
        children: [
            {
                path: '/example/table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: { title: 'Table', icon: 'table' }
            },
            {
                path: '/example/tree',
                name: 'Tree',
                component: () => import('@/views/table/tree'),
                meta: { title: 'Tree', icon: 'table' }
            },
        ]
    },
]

/*** @Description:
 * 异步挂载的路由
 *动态需要根据权限加载的路由表
 * */
export const asyncRouterMap = [
    // {path:'*',redirect:{path:'/404'}},
];

/*** @Description:
 * 实例化vue的时候只挂载constantRouter
 * */
export default new Router({
    mode: 'history',
    routes: constantRouterMap
});