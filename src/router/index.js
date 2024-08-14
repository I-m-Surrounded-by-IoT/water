import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        redirect:'menu'
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
                path: '/device',
                component: ()=>import("../views/device/index.vue")
            }
        ]
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router