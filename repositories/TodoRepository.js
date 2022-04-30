const resource = '/todo'
export default ($axios) => ({
    findPending() {
        return $axios.get(`${resource}`)
    },

    create(payload) {
        return $axios.post(`${resource}`, payload)
    },

    update(id) {
        return $axios.patch(`${resource}/${id}`)
    },      

    findDone() {
        return $axios.get(`${resource}/done`)
    },

    remove(id) {
        return $axios.delete(`${resource}/${id}`)
    }
})