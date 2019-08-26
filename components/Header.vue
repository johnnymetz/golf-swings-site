<template>
  <div class="header">
    <b-navbar toggleable="sm" type="dark">
      <b-container>
        <b-navbar-brand to="/">
          <!-- <b-img src="@/assets/logo.svg" id="logo-img"></b-img> -->
          <Logo id="logo-icon" />Golf Swings
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>

            <b-nav-item v-show="loggedIn" @click="logoutUser">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import Logo from '@/static/logo.svg'

export default {
  name: 'Header',
  data() {
    return {
      loggedIn: false
    }
  },
  components: {
    Logo
  },
  created() {
    let loggedIn = false

    const authUser = localStorage.getItem('authUser')
    if (authUser == process.env.authUser) {
      loggedIn = true
    }

    if (loggedIn) {
      this.loggedIn = true
    }
  },
  methods: {
    logoutUser() {
      localStorage.removeItem('authUser')
      this.loggedIn = false
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar {
  /* #0a8116, #165b13, #2f781f */
  background-color: #165b13;
}

#logo-icon {
  height: 20px;
  width: 20px;
  margin-right: 16px;
  fill: white;
  /* vertical-align: bottom; */
}
</style>
