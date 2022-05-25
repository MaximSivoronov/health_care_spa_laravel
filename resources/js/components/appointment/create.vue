<template>
    <div class="card m-auto appointment-card">
        <div class="card-header text-center pt-3">
            <h2>Create new appointment</h2>
        </div>
        <div class="card-body p-3">
            <form>

                <!-- Doctor_id -->

                <div v-if="this.user.role === 'admin'" class="form-group mb-3">
                    <label for="doctor_id">Enter doctor_id</label>
                    <input v-model="doctor_id" type="text" class="form-control" id="doctor_id"
                           placeholder="doctor_id">
                </div>

                <!-- Specialization -->

                <div class="form-group mb-3">
                    <label for="specialization">Enter your specialization</label>
                    <input v-model="specialization" type="text" class="form-control" id="specialization"
                           placeholder="Specialisation">
                </div>

                <!-- Beginning time -->

                <div class="form-group mb-3">
                    <label for="beginningTime">Beginning time</label>
                    <input v-model="beginning_time" type="datetime-local" class="form-control" id="beginningTime">
                </div>

                <!-- Ending time -->

                <div class="form-group mb-3">
                    <label for="ending_time">Ending time</label>
                    <input v-model="ending_time" type="datetime-local" class="form-control" id="ending_time">
                </div>

                <!-- Submit button -->

                <div class="m-auto text-center">
                    <button :disabled="!isDisabled" @click.prevent="createAppointment" type="submit"
                            class="btn btn-primary appointment-button">
                        Add appointment
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "create",

    data() {
        return {
            specialization: '',
            beginning_time: null,
            ending_time: null,
            user: {},
            doctor_id: null,
        }
    },

    mounted() {
        this.getUser();
    },

    methods: {
        createAppointment() {
            axios.post('/api/appointments', {
                doctor_id: this.doctor_id ? this.doctor_id : this.user.id,
                specialization: this.specialization,
                beginning_time: this.beginning_time,
                ending_time: this.ending_time,
            }).then(r => {
                this.redirectToPersonal();
            });
        },

        getUser() {
            axios.get('/api/user')
                .then(r => {
                    this.user = r.data;
                });
        },

        redirectToPersonal() {
            this.$router.push({name: 'user.personal'});
        },
    },

    computed: {
        isDisabled() {
            if (this.user.role === 'doctor') {
                return this.specialization && this.beginning_time && this.ending_time;
            }
            else {
                return this.specialization && this.beginning_time && this.ending_time && this.doctor_id;
            }
        }
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
