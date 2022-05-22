const state = {
    user: '',
}

const getters = {
    user: () => state.user,
}

const mutations = {
    setUser(state, user) {
        state.user = user;
    }
}

const actions = {
    getUser({state, commit, dispatch}) {
        setTimeout(() => {
            axios.get('/api/user')
                .then(r => {
                    commit('setUser', r.data);
                });
        }, 300);
    },

    setUser({state, commit, dispatch}, user) {
        commit('setUser', user);
    },
}

export default {
    state, getters, mutations, actions,
}
