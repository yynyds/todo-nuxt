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
    <create-todo v-model="newTodo"></create-todo>
  </section>
</template>

<script>
import createTodo from '../../components/createForm'
export default {
  // middleware: ['auth'],
  components: {
    createTodo
  },
  async fetch({store}) {
    if (store.getters['todos/todos'].length === 0) {
      await store.dispatch('todos/loadTodos')
    }
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/loadUsers')
    }
  },
  data: () => ({
    newTodo: ''
  }),
  computed: {
    todos() {
      return this.$store.getters['todos/todos']
    },
    users() {
      return this.$store.getters['users/users']
    },
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
    },
  },
  watch: {
    newTodo(val) {
      if (val) {
        console.log(val)
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
