const state = {
    userRole: '',
}

const getters = {
    userRole: () => state.userRole,
}

const mutations = {
    setUserRole(state, role) {
        state.userRole = role;
    }
}

const actions = {
    getUserRole({state, commit, dispatch}) {
        axios.get('/api/user')
            .then(r => {
                commit('setUserRole', r.data.role);
            });
    },

    setUserRole({state, commit, dispatch}, userRole) {
        commit('setUserRole', userRole);
    },
}

export default {
    state, getters, mutations, actions,
}
