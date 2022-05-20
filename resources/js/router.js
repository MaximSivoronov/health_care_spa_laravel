import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/debug/get', component: () => import('./components/debug/get'),
            name: 'debug/get',
        },
        {
            path: '/user/login', component: () => import('./components/login'),
            name: 'user.login',
        },
        {
            path: '/user/register', component: () => import('./components/register'),
            name: 'user.register',
        },
        {
            path: '/user/personal', component: () => import('./components/personal'),
            name: 'user.personal',
        },
    ],
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-xsrf-token');
    let user = store.getters.user;

    // Debug logs.
    console.log(token);
    console.log(user);

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next();
        }

        return next({name: 'user.login'});
    } else {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next({name: 'user.personal'});
        }

        return next();
    }
});

export default router;
