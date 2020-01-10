import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[

        {
            path:'/inicio',
            name: 'inicio',
            component:()=> import('./components/Home.vue'),
        },
        {
            path:'/admin',
            name: 'admin',
            component:()=> import('./components/Admin.vue'),
        },
        {
            path:'/docente',
            name: 'admin',
            component:()=> import('./components/Teacher.vue'),
        }
    ]
})
export default router;