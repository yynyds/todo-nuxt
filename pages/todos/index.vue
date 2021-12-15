<template>
  <section>
    <h1>Todos page</h1>
    <hr>
    <ol>
      <li v-for="todo of todos" :key="todo.id">
        <div class="form-check">
          <input :id="todo.id" class="form-check-input" type="checkbox" value="" :checked="todo.completed">
          <label class="form-check-label" :for="todo.id">
            <a href="#" @click.prevent="moreInfoAboutTodo(todo)">{{todo.title}}</a>
          </label>
        </div>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  async fetch({store}) {
    if (store.getters['todos/todos'].length === 0) {
      await store.dispatch('todos/loadTodos')
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/todos']
    }
  },
  methods: {
    moreInfoAboutTodo(todo) {
      this.$router.push(`/todos/${todo.userId}`)
    }
  }
}
</script>

<style scoped>
ol {
  max-height: 400px;
  overflow-y: auto;
}
</style>
