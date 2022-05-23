<template>
    <div>
        <router-link :to="{ name: 'debug/get' }">Debug get</router-link>
        <router-link v-if="!token" :to="{ name: 'user.login' }">Login</router-link>
        <router-link v-if="!token" :to="{ name: 'user.register' }">Sign up</router-link>
        <router-link v-if="token" :to="{ name: 'user.personal' }">Personal</router-link>
        <a v-if="token" @click.prevent="logout" href="#">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "index",

    data() {
        return {
            token: '',
            user: '',
        }
    },

    mounted() {
        setTimeout(() => {
            this.setupUser();
        }, 300);
    },

    updated() {
        this.getToken();
    },

    methods: {
        logout() {
            axios.post('/logout')
                .then(r => {
                    // Delete token and user.
                    localStorage.removeItem('x-xsrf-token');
                    this.user = null;
                    this.token = null;

                    // Reset user in vuex.
                    this.$store.dispatch('setUser', '');

                    // Redirect to login page.
                    this.$router.push({name: 'user.login'});
                });
        },

        getToken() {
            this.token = localStorage.getItem('x-xsrf-token');
        },

        setupUser() {
            this.getToken();
            setTimeout(() => {
                if (localStorage.getItem('x-xsrf-token')) {
                    setTimeout(() => {
                        axios.get('/api/user')
                            .then(r => {
                                this.user = r.data;
                            });
                    }, 300);
                }
            }, 300);
        },
    },
}
</script>

<style scoped>

</style>
