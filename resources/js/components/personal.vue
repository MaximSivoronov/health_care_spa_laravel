<template>
    <div>

        <!-- Personal page for client user -->

        <div v-if="this.user.role === 'client'">
            <div class="name-title">
                <h1>Hello, {{ this.user.name }}!</h1>
                <h2>Glad to see you.</h2>
            </div>
            <h3 class="mb-3">Your personal client id: {{ this.user.id }}</h3>

            <!-- Available appointments for client -->

            <div class="card m-auto appointments">
                <div class="card-header">
                    <h3 class="card-title pt-3">Available appointments:</h3>
                </div>
                <div class="card-body">
                    <table class="table appointments-table mt-3">
                        <thead>
                        <tr>
                            <th scope="col">Specialist</th>
                            <th scope="col">Name</th>
                            <th scope="col">Beginning time</th>
                            <th scope="col">Ending time</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="appointment in available_appointments">
                            <td>{{ appointment.specialization }}</td>
                            <td>{{ appointment.doctor_name }}</td>
                            <td>{{ appointment.beginning_time_formatted }}</td>
                            <td>{{ appointment.ending_time_formatted }}</td>
                            <td>
                                <button class="btn btn-success">Register</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Current scheduled appointments -->

            <div class="card m-auto appointments mt-5">
                <div class="card-header">
                    <h3 class="card-title pt-3">Your appointments:</h3>
                </div>
                <div class="card-body">
                    <table class="table appointments-table mt-3">
                        <thead>
                        <tr>
                            <th scope="col">Specialist</th>
                            <th scope="col">Name</th>
                            <th scope="col">Beginning time</th>
                            <th scope="col">Ending time</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>
                                <button class="btn btn-success">Register</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
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
                <div class="card-header">
                    <h3 class="card-title pt-3">Your appointments:</h3>
                </div>
                <div class="card-body">
                    <div class="m-auto text-center">
                        <button class="btn btn-primary" @click.prevent="redirectToCreateAppointment">Create new appointment</button>
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
                <div class="card m-auto appointments">
                    <div class="card-header">
                        <h2 class="text-center">Appointments</h2>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title pt-3">All appointments:</h3>
                        <div class="m-auto text-center">
                            <button class="btn btn-primary" @click.prevent="redirectToCreateAppointment">Create new appointment</button>
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
                <div class="card m-auto appointments">
                    <div class="card-header">
                        <h2 class="text-center">Users</h2>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title pt-3">All users:</h3>
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
            user_appointments: [],
            available_appointments: [],
        }
    },

    mounted() {
        this.getUser();
        this.getAppointments();
    },

    methods: {
        getUser() {
            axios.get('/api/user')
                .then(r => {
                    console.log(r.data);
                    this.user = r.data;
                });
        },
        getAppointments() {
            axios.get('/api/appointments/client/available')
                .then(r => {
                    console.log(r.data);
                    this.available_appointments = r.data;
                })
        },
        redirectToCreateAppointment() {
            this.$router.push({ name: 'appointment.create' });
        }
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
th, tr {
    text-align: center;
}
</style>
