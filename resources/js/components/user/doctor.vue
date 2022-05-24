<template>
    <div>
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
                        <button class="btn btn-primary" @click.prevent="$parent.redirectToCreateAppointment">Create
                            new
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
                                <button @click.prevent="$parent.redirectToeditAppointment(appointment.id)"
                                        class="btn btn-warning">Edit
                                </button>
                                <button class="btn btn-danger"
                                        @click.prevent="$parent.deleteAppointment(appointment.id)">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "doctor",

    props: {
        user: {},
        user_appointments: [],
    },
}
</script>

<style scoped>
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
