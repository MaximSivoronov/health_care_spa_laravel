<template>
    <div>
        <router-link v-if="!token" :to="{ name: 'user.login' }">Login</router-link>
        <router-link v-if="!token" :to="{ name: 'user.register' }">Sign up</router-link>
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
        }
    },

    mounted() {
        this.getToken();
    },

    updated() {
        this.getToken();
    },

    methods: {
        logout() {
            axios.post('/logout')
                .then(r => {
                    localStorage.removeItem('x-xsrf-token');
                    this.$router.push({ name: 'user.login' });
                });
        },

        getToken() {
            this.token = localStorage.getItem('x-xsrf-token');
        },
    },
}
</script>

<style scoped>

</style>
