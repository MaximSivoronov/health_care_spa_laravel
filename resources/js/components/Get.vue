<template>
    <div>
        Get
    </div>
</template>

<script>
// TODO: component for debug purposes, delete component.
export default {
    name: "Get",

    mounted() {
        this.get();
    },

    methods: {
        get() {
            axios.get('/api/get').then(r => {
                console.log(r)
            });
        },
    },
}
</script>

<style scoped>

</style>
