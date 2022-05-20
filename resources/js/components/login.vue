<template>
    <div class="card m-auto login-card">
        <div class="card-header text-center pt-3">
            <h2>Login</h2>
        </div>
        <div class="card-body p-3">
            <form>

                <!-- Email -->

                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="Enter email">
                </div>

                <!-- Password -->

                <div class="form-group mb-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                           placeholder="Password">
                </div>

                <!-- Submit button -->

                <div class="m-auto text-center">
                    <button @click.prevent="login" type="submit" class="btn btn-primary login-button">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {email: this.email, password: this.password})
                    .then(res => {
                        // Store user role into vuex.
                        this.$store.dispatch('getUserRole');

                        // Set token.
                        localStorage.setItem('x-xsrf-token', res.config.headers['X-XSRF-TOKEN']);

                        // Redirect to user personal page.
                        setTimeout(() => {
                            this.$router.push({name: 'user.personal'});
                        }, 300);
                    });
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.login-card {
    max-width: 500px;
    min-width: 500px;
}

.login-button {
    width: 30%
}
</style>
