import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./store";

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
        {
            path: '/user/personal', component: () => import('./components/personal'),
            name: 'user.personal',
        },
        {
            path: '/user/:id/edit', component: () => import('./components/user/edit'),
            name: 'user.edit',
        },
        {
            path: '/appointment/create', component: () => import('./components/appointment/create'),
            name: 'appointment.create',
        },
        {
            path: '/appointment/:id/edit', component: () => import('./components/appointment/edit'),
            name: 'appointment.edit',
        },
    ],
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-xsrf-token');
    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next();
        }

        return next({name: 'user.login'});

    }
    else {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next({name: 'user.personal'});
        }
    }
    axios.get('/api/user')
        .then(r => {
            const userRole = r.data.role;

            if (userRole === 'admin' && to.name === 'user.edit') {
                return next();
            }
            else if ((userRole === 'admin' || userRole === 'doctor') &&
                (to.name === 'appointment.create' || to.name === 'appointment.edit')) {
                return next();
            }
            else {
                return next({name: 'user.personal'});
            }
        })

    return next();
});

export default router;
