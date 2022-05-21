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
                axios.get('/api/appointments')
                    .then(r => {
                        console.log(r.data[0].beginning_time);
                    })
            });
        },
    },
}
</script>

<style scoped>

</style>
