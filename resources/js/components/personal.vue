<template>
    <div class="mb-5">

        <!-- Personal page for client user -->

        <client v-if="this.user.role === 'client'"
                :user="this.user"
                :user_appointments="this.user_appointments"
                :available_appointments="this.available_appointments"
        />

        <!-- Personal page for doctor user -->

        <doctor v-if="this.user.role === 'doctor'"
                :user="this.user"
                :user_appointments="this.user_appointments"
        />

        <!--Personal page for admin user-->

        <admin v-if="this.user.role === 'admin'"
               :user="this.user"
               :user_appointments="this.user_appointments"
               :all_users_for_admin="this.all_users_for_admin"
        />

    </div>
</template>

<script>
import Client from "./user/client";
import Doctor from "./user/doctor";
import Admin from "./user/admin";

export default {
    name: "personal",
    components: {Admin, Doctor, Client},
    data() {
        return {
            user: '',
            user_appointments: [],
            available_appointments: [],
            all_users_for_admin: [],
        }
    },

    mounted() {
        setTimeout(() => {
            this.getUser();
            this.getClientAppointments();
            this.getDoctorAppointments();
            this.getAdminAppointments();
            this.getAllUsers();
        }, 300);
    },

    updated() {
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
        getAllUsers() {
            setTimeout(() => {
                if (this.user.role === 'admin') {
                    axios.get('/api/users')
                        .then(r => {
                            this.all_users_for_admin = r.data;
                        });
                }
            }, 300);
        },
        subscribeClient(id) {
            axios.patch(`/api/appointments/${id}/subscribe`, {client_id: this.user.id})
                .then(r => {
                    this.getClientAppointments();
                });
        },
        unsubscribeClient(id) {
            axios.patch(`/api/appointments/${id}/unsubscribe`)
                .then(r => {
                    this.getClientAppointments();
                });
        },
        deleteAppointment(id) {
            axios.delete(`/api/appointments/${id}`)
                .then(r => {
                    if (this.user.role === 'admin') {
                        this.getAdminAppointments();
                    }
                    if (this.user.role === 'doctor') {
                        this.getDoctorAppointments();
                    }
                });
        },
        redirectToEditAppointment(id) {
            this.$router.push({name: 'appointment.edit', params: {id: id}});
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
