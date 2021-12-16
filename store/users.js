export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  updateUser(state, newUser) {
    state.users.find(item => {
      let upd = null
      if (+item.id === +newUser.id) {
        upd = item
      }
      return Object.assign(upd, newUser)
    })
  }
}

export const actions = {
  async loadUsers({commit}) {
    try {
      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=4')
      commit('setUsers', users)
    } catch(err) {
      console.log(err)
    }
  },
  updateUser({commit}, newUser) {
    commit('updateUser', newUser)
  }
}

export const getters = {
  users: state => state.users
}
