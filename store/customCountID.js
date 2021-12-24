export const state = () => ({
  id: 0
})

export const mutations = {
  addCountID(state) {
    state.id = state.id + 1
  }
}

export const actions = {
  addCountID({commit}) {
    commit('addCountID')
  }
}

export const getters = {
  id: state => state.id
}
