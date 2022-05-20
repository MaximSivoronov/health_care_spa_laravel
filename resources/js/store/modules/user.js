const state = {
    user: '',
}

const getters = {
    user: () => state.user,
}

const mutations = {
    setUserRole(state, user) {
        state.user = user;
    }
}

const actions = {
    getUser({state, commit, dispatch}) {
        axios.get('/api/user')
            .then(r => {
                commit('setUserRole', r.data);
            });
    },

    setUser({state, commit, dispatch}, userRole) {
        commit('setUserRole', userRole);
    },
}

export default {
    state, getters, mutations, actions,
}
