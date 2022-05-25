<template>
    <div class="card m-auto appointment-card">
        <div class="card-header text-center pt-3">
            <h2>Edit appointment</h2>
        </div>
        <div class="card-body p-3">
            <form>

                <!-- Doctor_id -->

                <div v-if="this.user.role === 'admin'" class="form-group mb-3">
                    <label for="doctor_id">Enter doctor_id</label>
                    <input v-model="appointment.doctor_id" type="text" class="form-control" id="doctor_id"
                           placeholder="doctor_id">
                </div>

                <!-- Specialization -->

                <div class="form-group mb-3">
                    <label for="specialization">Enter specialization</label>
                    <input v-model="appointment.specialization" type="text" class="form-control" id="specialization"
                           placeholder="Specialisation">
                </div>

                <!-- Beginning time -->

                <div class="form-group mb-3">
                    <label for="beginningTime">Beginning time</label>
                    <input v-model="appointment.beginning_time_formatted" type="datetime-local" class="form-control"
                           id="beginningTime">
                </div>

                <!-- Ending time -->

                <div class="form-group mb-3">
                    <label for="ending_time">Ending time</label>
                    <input v-model="appointment.ending_time_formatted" type="datetime-local" class="form-control"
                           id="ending_time">
                </div>

                <!-- Submit button -->

                <div class="m-auto text-center">
                    <button @click.prevent="updateAppointment" type="submit" class="btn btn-primary appointment-button">
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
            appointment: {},
        }
    },

    mounted() {
        this.getUser();
        this.getAppointment();
    },

    methods: {
        getUser() {
            axios.get('/api/user')
                .then(r => {
                    this.user = r.data;
                });
        },
        getAppointment() {
            setTimeout(() => {
                axios.get(`/api/appointments/${this.$route.params.id}/edit`)
                    .then(r => {
                        this.appointment = r.data;
                    });
            }, 300);
        },
        updateAppointment() {
            axios.patch(`/api/appointments/${this.appointment.id}`, {
                doctor_id: this.appointment.doctor_id,
                specialization: this.appointment.specialization,
                beginning_time: this.appointment.beginning_time_formatted,
                ending_time: this.appointment.ending_time_formatted,
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

<style lang="scss" scoped>
.appointment-card {
    max-width: 500px;
    min-width: 500px;
}

.appointment-button {
    width: 30%
}
</style>
