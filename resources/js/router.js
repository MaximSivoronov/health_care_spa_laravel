import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/user/login', component: () => import('./components/login'),
            name: 'user.login',
        },
        {
            path: '/user/register', component: () => import('./components/register'),
            name: 'user.register',
        },
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-xsrf-token');

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next();
        }

        return next({ name: 'user.login' });
    }
    else {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next({ name: 'user.personal' });
        }

        return next();
    }
});

export default router;
