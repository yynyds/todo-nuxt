export const state = () => ({
  todos: []
})

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async loadTodos({commit}) {
    const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
    commit('setTodos', todos)
  }
}

export const getters = {
  todos: state => state.todos
}
