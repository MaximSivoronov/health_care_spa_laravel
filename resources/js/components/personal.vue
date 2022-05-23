<template>
    <div class="mb-5">

        <!-- Personal page for client user -->

        <div v-if="this.user.role === 'client'">
            <div>
                <div class="name-title">
                    <h1>Hello, {{ this.user.name }}!</h1>
                    <h2>Glad to see you.</h2>
                </div>
                <h3 class="mb-3">Your personal client id: {{ this.user.id }}</h3>

                <!-- Current scheduled appointments -->

                <div class="card m-auto appointments">
                    <div class="card-header">
                        <h3 class="card-title">Your appointments:</h3>
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
                            <tr v-for="appointment in user_appointments">
                                <td>{{ appointment.specialization }}</td>
                                <td>{{ appointment.doctor_name }}</td>
                                <td>{{ appointment.beginning_time_formatted }}</td>
                                <td>{{ appointment.ending_time_formatted }}</td>
                                <td>
                                    <button class="btn btn-danger">Cancel</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Available appointments for client -->

            <div class="card m-auto appointments mt-5">
                <div class="card-header">
                    <h3 class="card-title">Available appointments:</h3>
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
        </div>

        <!-- Personal page for doctor user -->

        <div v-if="this.user.role === 'doctor'">
            <div>
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
                            <button class="btn btn-primary" @click.prevent="redirectToCreateAppointment">Create new
                                appointment
                            </button>
                        </div>
                        <table class="table appointments-table mt-3">
                            <thead>
                            <tr>
                                <th scope="col">Specialization</th>
                                <th scope="col">Client</th>
                                <th scope="col">Beginning time</th>
                                <th scope="col">Ending time</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="appointment in user_appointments">
                                <td>{{ appointment.specialization }}</td>
                                <td v-if="appointment.client_name">{{ appointment.client_name }}</td>
                                <td v-else>No one scheduled yet</td>
                                <td>{{ appointment.beginning_time_formatted }}</td>
                                <td>{{ appointment.ending_time_formatted }}</td>
                                <td>
                                    <button v-if="appointment.client_name" class="btn btn-success">Chat</button>
                                    <button class="btn btn-danger">Cancel</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!--Personal page for admin user-->

        <div v-if="this.user.role === 'admin'">
            <div>
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
                                <button class="btn btn-primary" @click.prevent="redirectToCreateAppointment">Create new
                                    appointment
                                </button>
                            </div>
                            <table class="table appointments-table mt-3">
                                <thead>
                                <tr>
                                    <th scope="col">Doctor_id</th>
                                    <th scope="col">Doctor name</th>
                                    <th scope="col">Client_id</th>
                                    <th scope="col">Client name</th>
                                    <th scope="col">Beginning time</th>
                                    <th scope="col">Ending time</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="appointment in user_appointments">
                                    <td>{{ appointment.doctor_id }}</td>
                                    <td>{{ appointment.doctor_name }}</td>
                                    <td v-if="appointment.client_id">{{ appointment.client_id }}</td>
                                    <td v-else>-</td>
                                    <td v-if="appointment.client_name">{{ appointment.client_name }}</td>
                                    <td v-else>No one scheduled yet</td>
                                    <td>{{ appointment.beginning_time_formatted }}</td>
                                    <td>{{ appointment.ending_time_formatted }}</td>
                                    <td>
                                        <div>
                                            <button class="btn btn-warning">Edit</button>
                                        </div>
                                        <div>
                                            <button class="btn btn-danger">Delete</button>
                                        </div>
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
        setTimeout(() => {
            this.getUser();
            this.getClientAppointments();
            this.getDoctorAppointments();
            this.getAdminAppointments();
        }, 300);
    },

    methods: {
        getUser() {
            axios.get('/api/user')
                .then(r => {
                    this.user = r.data;
                });
        },
        getClientAppointments() {
            setTimeout(() => {
                if (this.user.role === 'client') {
                    axios.get('/api/appointments/client/available')
                        .then(r => {
                            this.available_appointments = r.data;
                        });
                    axios.get('/api/appointments/client/scheduled')
                        .then(r => {
                            this.user_appointments = r.data;
                        });
                }
            }, 300);
        },
        getDoctorAppointments() {
            setTimeout(() => {
                if (this.user.role === 'doctor') {
                    axios.get('/api/appointments/doctor')
                        .then(r => {
                            this.user_appointments = r.data;
                        })
                }
            }, 300);
        },
        getAdminAppointments() {
            setTimeout(() => {
                if (this.user.role === 'admin') {
                    axios.get('/api/appointments/admin')
                        .then(r => {
                            this.user_appointments = r.data;
                        })
                }
            }, 300);
        },
        redirectToCreateAppointment() {
            this.$router.push({name: 'appointment.create'});
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
