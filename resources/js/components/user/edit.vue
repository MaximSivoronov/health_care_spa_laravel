<template>
    <div class="card m-auto appointment-card">
        <div class="card-header text-center pt-3">
            <h2>Edit user</h2>
        </div>
        <div class="card-body p-3">
            <form>

                <!-- User name -->

                <div class="form-group mb-3">
                    <label for="username">User name</label>
                    <input v-model="user.name" type="text" class="form-control" id="username"
                           placeholder="user name">
                </div>

                <!-- Email -->

                <div class="form-group mb-3">
                    <label for="email">User email</label>
                    <input v-model="user.email" type="email" class="form-control" id="email"
                           placeholder="Email">
                </div>

                <!-- User role -->

                <div class="form-group mb-3">
                    <label for="role">User role</label>
                    <select id="role" v-model="user.role" class="form-control">
                        <option value="client">Client</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <!-- Submit button -->

                <div class="m-auto text-center">
                    <button @click.prevent="updateUser" type="submit" class="btn btn-primary appointment-button">
                        Edit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "edit",

    data() {
        return {
            user: {},
        }
    },

    mounted() {
        this.getUser();
    },

    methods: {
        getUser() {
            setTimeout(() => {
                axios.get(`/api/users/${this.$route.params.id}/edit`)
                    .then(r => {
                        console.log(r.data);
                        this.user = r.data;
                    })
            }, 300);
        },

        updateUser() {
            axios.patch(`/api/users/${this.user.id}`, {
                name: this.user.name,
                email: this.user.email,
                role: this.user.role,
            })
                .then(r => {
                    this.redirectToPersonal();
                });
        },
        redirectToPersonal() {
            this.$router.push({name: 'user.personal'});
        },
    },
}
</script>

<style scoped>
.appointment-card {
    max-width: 500px;
    min-width: 500px;
}

.appointment-button {
    width: 30%
}
</style>
