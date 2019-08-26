<template>
  <b-row v-show="!loggedIn">
    <b-col>
      <Login />
    </b-col>
  </b-row>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  components: {
    Login
  },
  data() {
    return {
      loggedIn: true
    }
  },
  created() {
    let loggedIn = false

    const authUser = localStorage.getItem('authUser')
    if (authUser == process.env.authUser) {
      loggedIn = true
    }

    if (loggedIn) {
      this.$router.push('/')
    } else {
      this.loggedIn = false
    }
  }
}
</script>

<style>
</style>
