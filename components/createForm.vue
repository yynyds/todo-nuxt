<template>
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
        <b-button type="submit" variant="primary" :disabled="!simpleValidation">Create</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  name: 'createForm',
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
    },
    simpleValidation() {
      return this.user.name && this.user.username && this.user.email && this.user.website && this.user.companyName && this.newTodo
    }
  },
  methods: {
    createNewTodo() {
      if (this.simpleValidation) {
        this.$emit('input', {todo: this.newTodo, user: this.user})
        this.resetForm()
      }
    },
    resetForm() {
      this.user = {}
      this.newTodo = null
    },
  }
}
</script>

<style scoped>

</style>
