<template>
    <div>
        <router-link :to="{ name: 'get' }">Get</router-link>
        <router-link :to="{ name: 'user.personal' }">Personal</router-link>
        <router-link :to="{ name: 'user.login' }">Login</router-link>
        <router-link :to="{ name: 'user.register' }">Sign up</router-link>
        <a @click.prevent="logout" href="#">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
// TODO: delete get router.
export default {
    name: "index",

    methods: {
        logout() {
            axios.post('/logout')
                .then(r => {
                    this.$router.push({ name: 'user.login' });
                });
        },
    },
}
</script>

<style scoped>

</style>
