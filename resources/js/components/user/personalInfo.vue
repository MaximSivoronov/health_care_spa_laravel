<template>
    <div>
        <div class="name-title">
            <h1>Hello, {{ this.user.name }}!</h1>
            <h2>Glad to see you.</h2>
        </div>
        <div class="card personal-info mb-5">
            <div class="card-header">
                <h3 class="card-title text-center">Personal information.</h3>
            </div>
            <div class="card-body">
                <h3 class="mb-3 text-center">Your personal id: {{ this.user.id }}</h3>
                <h3 class="mb-3 text-center">Your email: {{ this.user.email }}</h3>
                <h3 class="mb-3 text-center">Your privilege level: {{ this.user.role.toUpperCase() }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "personalInfo",

    props: {
        user: {},
    }
}
</script>

<style scoped>
.name-title {
    text-align: center;
}
.personal-info {
    width: 750px;
    margin: auto;
}
</style>
