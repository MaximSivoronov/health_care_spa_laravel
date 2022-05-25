<template>
    <div>
        <div>

            <!-- All appointments table -->

            <div>
                <div class="card m-auto appointments">
                    <div class="card-header">
                        <h2 class="text-center">Appointments</h2>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title pt-3">All appointments:</h3>
                        <div class="m-auto text-center">
                            <button class="btn btn-primary" @click.prevent="$parent.redirectToCreateAppointment">Create new
                                appointment
                            </button>
                        </div>
                        <table class="table appointments-table mt-3">
                            <thead>
                            <tr>
                                <th scope="col">Specialization</th>
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
                                <td>{{ appointment.specialization }}</td>
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
                                        <button @click.prevent="$parent.redirectToEditAppointment(appointment.id)"
                                                class="btn btn-warning">Edit
                                        </button>
                                    </div>
                                    <div>
                                        <button @click.prevent="$parent.deleteAppointment(appointment.id)"
                                                class="btn btn-danger">Delete
                                        </button>
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
                            <tr v-for="user in all_users_for_admin">
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.role }}</td>
                                <td>
                                    <button class="btn btn-warning" @click.prevent="$parent.redirectToEditUser(user.id)">Edit</button>
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
    name: "admin",

    props: {
        user: {},
        user_appointments: [],
        all_users_for_admin: [],
    }
}
</script>

<style scoped>

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
