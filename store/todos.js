export default {
    state: () => ({
        todos_pending: [],
        todos_done: []
    }),
    getters: {},
    mutations: {
        MUTATE_TODOS_PENDING(state, payload) {
            state.todos_pending = payload;
        },
        MUTATE_TODOS_DONE(state, payload) {
            state.todos_done = payload;
        }
    },
    actions: {
        async getTodos({ commit }) {
            const res = await this.$repositories.todo.findPending()
            if (res.status === 200) {
                commit('MUTATE_TODOS_PENDING', res.data.data)
            }

            return res;
        },

        async addTodo({ dispatch }, payload) {
            const res = await this.$repositories.todo.create(payload)
            if (res.status === 201) {
                dispatch('getTodos')
            }

            return res;
        },

        async setDone({ dispatch }, payload) {
            const res = await this.$repositories.todo.update(payload)
            if (res.status === 200) {
                dispatch('getTodos');
                dispatch('getTodosDone');
            }

            return res;
        },

        async getTodosDone({ commit }) {
            const res = await this.$repositories.todo.findDone()
            if (res.status === 200) {
                commit('MUTATE_TODOS_DONE', res.data.data)
            }

            return res;
        },

        async removeTodo({ dispatch }, payload) {
            const res = await this.$repositories.todo.remove(payload)
            if (res.status === 200) {
                dispatch('getTodos');
            }

            return res;
        }
    }
}