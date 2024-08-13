import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path :'/',
        component :()=>import("../views/login/index.vue"),
    },
    {
        path :'/menu',
        component :()=>import("../views/menu/index.vue"),
        children:[
            {
                path :'/home',
                component :()=>import("../views/home/index.vue"),
            }
        ]
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router