<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  middleware: ['auth'],
  components: {
    Navbar
  },
  // mounted() {
  //   this.$store.dispatch('prefatorySetToken', this.$cake.get('tokenAuth') ? this.$cake.get('tokenAuth') : null)
  // }
}
</script>

<style scoped>

</style>
