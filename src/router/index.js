import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        redirect:'login'
    },
    {
        path :'/login',
        component :()=>import("../views/login/index.vue"),
    },
    {
        path :'/menu',
        component :()=>import("../views/menu/index.vue"),
        children:[
            {
                path :'/home',
                component :()=>import("../views/home/index.vue"),
            },
            {
                path: '/overview',
                component: ()=>import("../views/overview/index.vue")
            },
            {
                path: '/device',
                component: ()=>import("../views/device/index.vue")
            },
            {
                path: '/Systemlogs',
                component: ()=>import("../views/Systemlogs/index.vue")
            },
            {
                path: '/user',
                component: ()=>import("../views/user/index.vue")
            },
            {
                path: '/aftersales',
                component: ()=>import("../views/aftersales/index.vue")
            },
            {
                path: '/set',
                component: ()=>import("../views/set/index.vue")
            }
        ]
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router