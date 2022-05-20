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
            user: this.$store.getters.user,
        }
    },

    mounted() {
        this.getToken();
        this.getUser();
    },

    updated() {
        this.getToken();
        this.getUser();
    },

    methods: {
        logout() {
            axios.post('/logout')
                .then(r => {
                    // Delete token.
                    localStorage.removeItem('x-xsrf-token');

                    // Reset user role in vuex.
                    this.$store.dispatch('setUser', '');

                    // Redirect to login page.
                    this.$router.push({name: 'user.login'});
                });
        },

        getToken() {
            this.token = localStorage.getItem('x-xsrf-token');
        },

        getUser() {
            setTimeout(() => {
                this.user = this.$store.getters.user;
            }, 300);
        }
    },
}
</script>

<style scoped>

</style>
