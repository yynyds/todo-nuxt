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
    <b-form @submit.prevent="createNewTodo" @reset="resetForm">
      <div class="mb-3">
        <b-form-textarea
          v-model="newTodo"
          placeholder="Enter todo"
          rows="3"
        ></b-form-textarea>
      </div>
      <div class="row">
        <div class="col-auto mb-3">
          <b-form-group label-size="md" label="Name" label-for="user-name">
            <b-form-select id="user-name" v-model="user.name" :options="names"></b-form-select>
          </b-form-group>
        </div>
        <div class="col-auto mb-3">
          <b-form-group label-size="md" label="Username" label-for="user-username">
            <b-form-select id="user-username" v-model="user.username" :options="userNames"></b-form-select>
          </b-form-group>
        </div>
        <div class="col-auto mb-3">
          <b-form-group label-size="md" label="Email" label-for="user-email">
            <b-form-select id="user-email" v-model="user.email" :options="userEmails"></b-form-select>
          </b-form-group>
        </div>
        <div class="col-auto mb-3">
          <b-form-group label-size="md" label="Website" label-for="user-website">
            <b-form-select id="user-website" v-model="user.website" :options="userWebsites"></b-form-select>
          </b-form-group>
        </div>
        <div class="col-auto mb-3">
          <b-form-group label-size="md" label="Company name" label-for="user-company">
            <b-form-select id="user-company" v-model="user.companyName" :options="userCompanies"></b-form-select>
          </b-form-group>
        </div>
      </div>
      <div class="row">
        <div class="col-auto mb-3">
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </div>
    </b-form>
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
    user: {
      name: 'Select name',
      username: '',
      email: '',
      website: '',
      companyName: ''
    },
    newTodo: ''
  }),
  computed: {
    todos() {
      return this.$store.getters['todos/todos']
    },
    users() {
      return this.$store.getters['users/users']
    },
    names() {
      return this.users.map(item => {
        return {
          value: item.name,
          text: item.name
        }
      })
    },
    userNames() {
      return this.users.map(item => {
        return {
          value: item.username,
          text: item.username
        }
      })
    },
    userEmails() {
      return this.users.map(item => {
        return {
          value: item.email,
          text: item.email
        }
      })
    },
    userWebsites() {
      return this.users.map(item => {
        return {
          value: item.website,
          text: item.website
        }
      })
    },
    userCompanies() {
      return this.users.map(item => {
        return {
          value: item.company.name,
          text: item.company.name
        }
      })
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
    },
    createNewTodo() {
      console.log(this.user, this.newTodo)
      this.resetForm()
    },
    resetForm() {
      this.user = {}
      this.newTodo = null
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
