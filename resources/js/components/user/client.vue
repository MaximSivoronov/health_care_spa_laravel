<template>
    <div>
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
                                <button class="btn btn-danger" @click.prevent="$parent.unsubscribeClient(appointment.id)">
                                    Cancel
                                </button>
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
                            <button class="btn btn-success" @click.prevent="$parent.subscribeClient(appointment.id)">
                                Register
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "client",

    props: {
        user: {},
        user_appointments: [],
        available_appointments: [],
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
