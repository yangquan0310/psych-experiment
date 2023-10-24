import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("@/views/home/index.vue"),
    },
    {
        path: '/scale',
        name: 'scale',
        component: () => import("@/views/scale/index.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: '/end',
        name: 'end',
        component: () => import("@/views/end/index.vue"),
    },
    // Add more routes here
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
