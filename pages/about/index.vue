<template>
  <b-row v-show="loggedIn">
    <b-col>
      <h2>About Us</h2>
      <div>
        <i>Golf Swings</i> provides a simple interface for viewing the best swings in golf.
        Golfers of all skill levels can navigate the site seamlessly and see professional swings.
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      loggedIn: false
    }
  },
  created() {
    let loggedIn = false

    const authUser = localStorage.getItem('authUser')
    if (authUser == process.env.authUser) {
      loggedIn = true
    }

    if (loggedIn) {
      this.loggedIn = true
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
