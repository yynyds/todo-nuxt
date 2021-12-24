export const state = () => ({
  todos: []
})

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  },
  updateTask(state, index) {
    state.todos[index].completed = !state.todos[index].completed
  },
  setNewTodo(state, newTodo) {
    state.todos.push(newTodo)
  }
}

export const actions = {
  async loadTodos({commit}) {
    const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    commit('setTodos', todos)
  },
  updateTask({commit}, index) {
    commit('updateTask', index)
  },
  setNewTodo({commit}, newTodo) {
    commit('setNewTodo', newTodo)
  }
}

export const getters = {
  todos: state => state.todos
}
