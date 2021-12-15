<template>
  <section>
    <div v-if="$route.query.msg" class="alert alert-danger mb-3">
      Authorization required
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <hr>
      <div class="form-group">
        <input v-model="username" type="text" class="form-control">
      </div>

      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>

      <button class="btn btn-primary" type="submit" :disabled="!username">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    username: ''
  }),
  methods: {
    onSubmit() {
      if (this.username) {
        this.$store.dispatch('login', this.username)
      }
    }
  }
}
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>
