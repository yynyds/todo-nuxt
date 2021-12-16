<template>
  <section>
    <h1>Additional info about user</h1>
    <hr>
    <form v-if="localUser" class="row g-3">
      <div class="col-auto">
        <label for="inputName" class="visually-hidden">Name</label>
        <input id="inputName" v-model="localUser.name" class="form-control" type="text" placeholder="Name">
      </div>
      <div class="col-auto">
        <label for="inputUsername" class="visually-hidden">Username</label>
        <input id="inputUsername" v-model="localUser.username" class="form-control" type="text" placeholder="Username">
      </div>
      <div class="col-auto">
        <label for="inputEmail" class="visually-hidden">Email</label>
        <input id="inputEmail" v-model="localUser.email" class="form-control" type="email" placeholder="Email">
      </div>
      <div class="col-auto">
        <label for="inputWebsite" class="visually-hidden">Website</label>
        <input id="inputWebsite" v-model="localUser.website" class="form-control" type="text" placeholder="Website">
      </div>
      <div class="col-auto">
        <label for="inputCompanyName" class="visually-hidden">Company name</label>
        <input id="inputCompanyName" v-model="localUser.company.name" class="form-control" type="text" placeholder="Comp. name">
      </div>
      <div class="col-auto" style="align-self: end;">
        <button
          class="btn btn-primary"
          :disabled="isEditedObject"
          @click.prevent="updateUserData"
        >Update</button>
      </div>
    </form>
    <br>
    <button type="button" class="btn btn-primary" @click="$router.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  data: () => ({
    localUser: null,
    userFreezed: null
  }),
  computed: {
    users() {
      return this.$store.getters['users/users']
    },
    isEditedObject() {
      return this.deepEqual(this.localUser, this.userFreezed)
    }
  },
  beforeMount() {
    this.localUser = Object.assign({}, this.users.find(item => {
      return +item.id === +this.$route.params.id
    }))
    this.freezeObject()
  },
  methods: {
    deepEqual(x, y) {
      if (x === y) {
        return true;
      } else if ((typeof x === "object" && x != null) && (typeof y === "object" && y != null)) {
        if (Object.keys(x).length !== Object.keys(y).length)
          return false;

        for (const prop in x) {
          if (y[prop]) {
            if (!this.deepEqual(x[prop], y[prop]))
              return false;
          } else
            return false;
        }

        return true;
      } else
        return false;
    },
    async updateUserData() {
      try {
        const updatedUser = await this.$axios.$put(`https://jsonplaceholder.typicode.com/users/${this.localUser.id}`, this.localUser)
        this.$store.dispatch('users/updateUser', updatedUser)
        this.localUser = updatedUser
        this.freezeObject()
      } catch(err) {
        console.log(err)
      }
    },
    freezeObject() {
      this.userFreezed = Object.freeze(JSON.parse(JSON.stringify(this.localUser)))
    }
  }
}
</script>

<style scoped>

</style>
