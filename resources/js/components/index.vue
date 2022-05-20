<template>
    <div>
        <router-link :to="{ name: 'debug/get' }">Debug get</router-link>
        <router-link v-if="!token" :to="{ name: 'user.login' }">Login</router-link>
        <router-link v-if="!token" :to="{ name: 'user.register' }">Sign up</router-link>
        <router-link v-if="userRole" :to="{ name: 'user.personal' }">Personal</router-link>
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
            userRole: this.$store.getters.userRole,
        }
    },

    mounted() {
        this.getToken();
        this.getUserRole();
    },

    updated() {
        this.getToken();
        this.getUserRole();
    },

    methods: {
        logout() {
            axios.post('/logout')
                .then(r => {
                    // Delete token.
                    localStorage.removeItem('x-xsrf-token');

                    // Reset user role in vuex.
                    this.$store.dispatch('setUserRole', '');

                    // Redirect to login page.
                    this.$router.push({name: 'user.login'});
                });
        },

        getToken() {
            this.token = localStorage.getItem('x-xsrf-token');
        },

        getUserRole() {
            setTimeout(() => {
                this.userRole = this.$store.getters.userRole;
            }, 300);
        }
    },
}
</script>

<style scoped>

</style>
