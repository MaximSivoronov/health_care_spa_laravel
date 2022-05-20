<template>
    <div>
        <div v-if="this.userRole === 'client'">
            <h2>Personal {{ this.userRole }} page.</h2>
            <h3>Client section</h3>
            <h3>Client section</h3>
            <h3>Client section</h3>
        </div>
        <div v-if="this.userRole === 'admin'">
            <h2>Personal {{ this.userRole }} page.</h2>
            <h3>Admin section</h3>
            <h3>Admin section</h3>
            <h3>Admin section</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "personal",

    data() {
        return {
            userRole: '',
        }
    },

    mounted() {
        this.getUserRole();
    },

    methods: {
        getUserRole() {
            this.userRole = this.$store.getters.user.role;
        },
    },
}
</script>

<style scoped>

</style>
