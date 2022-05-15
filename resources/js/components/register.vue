<template>
    <div class="card m-auto register-card">
        <div class="card-header text-center pt-3">
            <h2>Sign up</h2>
        </div>
        <div class="card-body p-3">
            <form>

                <!-- Name -->

                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Name</label>
                    <input v-model="name" type="text" class="form-control" id="exampleInputEmail1"
                           placeholder="Enter your name">
                </div>

                <!-- Email -->

                <div class="form-group mb-3">
                    <label for="exampleInputEmail2">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail2"
                           aria-describedby="emailHelp"
                           placeholder="Enter email">
                </div>

                <!-- Password -->

                <div class="form-group mb-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                           placeholder="Password">
                </div>

                <!-- Password confirmation -->

                <div class="form-group mb-3">
                    <label for="exampleInputPassword2">Confirm password</label>
                    <input v-model="password_confirmation" type="password" class="form-control"
                           id="exampleInputPassword2" placeholder="Repeat your password">
                </div>

                <!-- Submit button -->

                <div class="m-auto text-center">
                    <button @click.prevent="register" type="submit" class="btn btn-primary register-button">Sign up
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "register",

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },

    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then(r => {
                    console.log(r);
                });
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.register-card {
    max-width: 500px;
    min-width: 500px;
}

.register-button {
    width: 30%
}
</style>
