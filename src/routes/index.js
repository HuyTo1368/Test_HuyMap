import Vue from 'vue';
// import VueRouter from 'vue-router';
import Router from 'vue-router';

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/view/Page/content.vue'),
        children: [
            {
                path: '',
                name: 'List',
                component: () => import('@/view/Page/dashboard/index.vue'),
            },
            {
                path: 'create',
                name: 'Form Create',
                component: () => import('@/view/Page/dashboard/formCreate.vue'),
            }
        ]
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('@/view/Page/users/index.vue'), 
    },
];

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes,
});

export default router;
