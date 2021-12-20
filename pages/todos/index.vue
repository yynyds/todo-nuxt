<template>
  <section>
    <h1>Todos page</h1>
    <hr>
    <ol>
      <li v-for="todo of todos" :key="todo.id">
        <div class="form-check">
          <input
            :id="todo.id"
            class="form-check-input"
            type="checkbox"
            value=""
            :checked="todo.completed"
            @change="updateTask(todo.id)"
          >
          <label class="form-check-label" :for="todo.id">
            <a href="#" :class="{isCompleted: todo.completed}" @click.prevent="moreInfoAboutTodo(todo)">{{todo.title}}</a>
          </label>
        </div>
      </li>
    </ol>
    <hr>
    <h3>Create new todo</h3>
<!--    <form>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="row">
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </form>-->
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </section>
</template>

<script>
export default {
  // middleware: ['auth'],
  async fetch({store}) {
    if (store.getters['todos/todos'].length === 0) {
      await store.dispatch('todos/loadTodos')
    }
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/loadUsers')
    }
  },
  data: () => ({
    selected: null,
    options: [
      { value: null, text: 'Please select an option' },
      { value: 'a', text: 'This is First option' },
      { value: 'b', text: 'Selected Option' },
      { value: { C: '3PO' }, text: 'This is an option with object value' },
      { value: 'd', text: 'This one is disabled', disabled: true }
    ]
  }),
  computed: {
    todos() {
      return this.$store.getters['todos/todos']
    },
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    moreInfoAboutTodo(todo) {
      this.$router.push(`/todos/${todo.userId}`)
    },
    updateTask(id) {
      const index = this.todos.findIndex(elem => {
        return +elem.id === +id
      })
      if (index || index === 0) {
        this.$store.dispatch('todos/updateTask', index)
      }
    }
  }
}
</script>

<style scoped>
ol {
  max-height: 400px;
  overflow-y: auto;
}
.isCompleted {
  text-decoration: line-through;
}
</style>
