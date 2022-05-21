<template>
    <div>
        default debug page
    </div>
</template>

<script>
export default {
    name: "get",

    mounted() {
        this.getAppointments();
    },

    methods: {
        getAppointments() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.get('/api/appointment')
                    .then(r => {
                        console.log(r.data);
                    })
            });
        },
    },
}
</script>

<style scoped>

</style>
