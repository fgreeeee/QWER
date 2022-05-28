import { createRouter, createWebHistory } from 'vue-router'
import Glavnaya from "@/page/Glavnaya";
import LoginPanel from "@/page/LoginPanel";
import TablePanel from "@/page/TablePanel";


const routes = [
    {
        path: '/',
        name: 'glav',
        component: Glavnaya
    },
    {
        path: '/log',
        name: 'login',
        component: LoginPanel
    },
    {
        path: '/tab',
        name: 'table',
        component: TablePanel
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router