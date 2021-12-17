export const state = () => ({
  users: [],
  localUser: null
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
  },
  setLocalUser(state, id) {
    state.localUser = state.users.find(item => +item.id === +id)
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
  },
  findUserById({commit}, id) {
    commit('setLocalUser', id)
  }
}

export const getters = {
  users: state => state.users,
  localUser: state => state.localUser
}
