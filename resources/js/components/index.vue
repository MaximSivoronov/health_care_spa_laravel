<template>
    <div>
        <router-link :to="{ name: 'debug/get' }">Debug get</router-link>
        <router-link v-if="!token" :to="{ name: 'user.login' }">Login</router-link>
        <router-link v-if="!token" :to="{ name: 'user.register' }">Sign up</router-link>
        <router-link v-if="user" :to="{ name: 'user.personal' }">Personal</router-link>
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
        this.setupUser();
    },

    updated() {
        this.setupUser();
    },

    methods: {
        logout() {
            axios.post('/logout')
                .then(r => {
                    // Delete token and user.
                    localStorage.removeItem('x-xsrf-token');
                    this.user = null;

                    // Reset user in vuex.
                    this.$store.dispatch('setUser', '');

                    // Redirect to login page.
                    this.$router.push({name: 'user.login'});
                });
        },

        setupUser() {
            this.getToken();
            this.getUser();
        },

        getToken() {
            this.token = localStorage.getItem('x-xsrf-token');
        },

        getUser() {
            // if (localStorage.getItem('current_user')) {
            //     this.user = JSON.parse(localStorage.getItem('current_user'));
            // } else {
            //     setTimeout(() => {
            //         this.user = this.$store.getters.user;
            //     }, 300);
            // }
            if (localStorage.getItem('x-xsrf-token')) {
                setTimeout(() => {
                    axios.get('/api/user')
                        .then(r => {
                            console.log(r.data);
                            this.user = r.data;
                        });
                }, 300);
            }
        }
    },
}
</script>

<style scoped>

</style>
