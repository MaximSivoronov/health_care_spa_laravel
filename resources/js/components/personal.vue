<template>
    <div>

        <!-- Personal page for client user -->

        <div v-if="this.user.role === 'client'">
            <div class="name-title">
                <h1>Hello, {{ this.user.name }}!</h1>
                <h2>Glad to see you.</h2>
            </div>
            <h3>Your personal id: {{ this.user.id }}</h3>
            <div class="appointments">
                <h3>Yor appointments:</h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Specialist</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Beginning time</th>
                        <th scope="col">Ending time</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Surgeon</th>
                        <td>Mark Otto</td>
                        <td>10:30</td>
                        <td>12:00</td>
                        <td>
                            <button class="btn btn-success">Chat</button>
                            <button class="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Personal page for doctor user -->

        <div v-if="this.user.role === 'doctor'">
            <div class="name-title">
                <h1>Hello, {{ this.user.name }}!</h1>
                <h2>Glad to see you.</h2>
            </div>
            <h3 class="mb-3">Your personal worker id: {{ this.user.id }}</h3>
            <div class="card m-auto appointments">
                <div class="card-body">
                    <h3 class="card-title">Your appointments:</h3>
                    <div class="m-auto text-center">
                        <button class="btn btn-primary">Create new appointment</button>
                    </div>
                    <table class="table appointments-table mt-3">
                        <thead>
                        <tr>
                            <th scope="col">Client</th>
                            <th scope="col">Beginning time</th>
                            <th scope="col">Ending time</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Mark Otto</td>
                            <td>10:30</td>
                            <td>12:00</td>
                            <td>
                                <button class="btn btn-success">Chat</button>
                                <button class="btn btn-danger">Cancel</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!--Personal page for admin user-->

        <div v-if="this.user.role === 'admin'">
            <div class="name-title">
                <h1>Hello, {{ this.user.name }}!</h1>
                <h2>Glad to see you.</h2>
            </div>

            <h3 class="mb-3">Your personal admin id: {{ this.user.id }}</h3>

            <!-- All appointments table -->

            <div>
                <h2 class="text-center">Appointments</h2>
                <div class="card m-auto appointments">
                    <div class="card-body">
                        <h3 class="card-title">All appointments:</h3>
                        <div class="m-auto text-center">
                            <button class="btn btn-primary">Create new appointment</button>
                        </div>
                        <table class="table appointments-table mt-3">
                            <thead>
                            <tr>
                                <th scope="col">Client</th>
                                <th scope="col">Beginning time</th>
                                <th scope="col">Ending time</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Mark Otto</td>
                                <td>10:30</td>
                                <td>12:00</td>
                                <td>
                                    <button class="btn btn-success">Chat</button>
                                    <button class="btn btn-danger">Cancel</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <!--Users table-->

            <div class="mt-5">
                <h2 class="text-center">Users</h2>
                <div class="card m-auto appointments">
                    <div class="card-body">
                        <h3 class="card-title">All users:</h3>
                        <table class="table appointments-table mt-3">
                            <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">role</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark Otto</td>
                                <td>example@mail.ru</td>
                                <td>client</td>
                                <td>
                                    <button class="btn btn-success">Change role</button>
                                    <button class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "personal",

    data() {
        return {
            user: '',
        }
    },

    mounted() {
        this.getUser();
    },

    methods: {
        getUser() {
            this.user = this.$store.getters.user;
        },
    },
}
</script>

<style lang="scss" scoped>
.name-title {
    text-align: center;
}

.appointments {
    display: flex;
    width: 75%;
}

.appointments-table {
    width: 750px;
    margin: auto;
}
</style>
