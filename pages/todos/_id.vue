<template>
  <section>
    <h1>Additional info about user</h1>
    <hr>
    <form class="row g-3">
      <div class="col-auto">
        <label for="inputName" class="visually-hidden">Name</label>
        <input id="inputName" class="form-control" type="text" placeholder="Name" v-model="user.name">
      </div>
      <div class="col-auto">
        <label for="inputUsername" class="visually-hidden">Username</label>
        <input id="inputUsername" class="form-control" type="text" placeholder="Username" v-model="user.username">
      </div>
      <div class="col-auto">
        <label for="inputEmail" class="visually-hidden">Email</label>
        <input id="inputEmail" class="form-control" type="email" placeholder="Email" v-model="user.email">
      </div>
      <div class="col-auto">
        <label for="inputWebsite" class="visually-hidden">Website</label>
        <input id="inputWebsite" class="form-control" type="text" placeholder="Website" v-model="user.website">
      </div>
      <div class="col-auto">
        <label for="inputCompanyName" class="visually-hidden">Company name</label>
        <input id="inputCompanyName" class="form-control" type="text" placeholder="Comp. name" v-model="user.company.name">
      </div>
      <div class="col-auto" style="align-self: end;">
        <button type="submit" class="btn btn-primary">Confirm identity</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    return {
      user
    }
  }
}
</script>

<style scoped>

</style>
