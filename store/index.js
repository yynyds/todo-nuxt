export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    this.$router.push('/')
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  login({commit}, payload) {
    commit('setToken', payload)
  },
  logout({commit}) {
    commit('clearToken')
  },
}

export const getters = {
  hasToken: state => !!state.token
}
