export const state = () => ({
  todos: []
})

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  },
  updateTask(state, index) {
    state.todos[index].completed = !state.todos[index].completed
  }
}

export const actions = {
  async loadTodos({commit}) {
    const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    commit('setTodos', todos)
  },
  updateTask({commit}, index) {
    commit('updateTask', index)
  }
}

export const getters = {
  todos: state => state.todos
}
