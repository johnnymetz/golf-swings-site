<template>
  <b-row class="justify-content-center">
    <b-col cols="10" md="8" lg="6">
      <b-card bg-variant="light">
        <h4 class="card-title text-center">Login</h4>
        <b-form @submit="onSubmit">
          <b-form-group label="Username:" label-for="username">
            <b-form-input id="username" v-model="username" required placeholder="Enter username"></b-form-input>
          </b-form-group>
          <b-form-group label="Password:" label-for="password">
            <b-form-input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <div v-if="invalidCreds" class="mt-3 text-danger">Invalid credentials. Please try again.</div>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      invalidCreds: false
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      if (this.username && this.password) {
        let loggedIn = false

        if (
          this.username === process.env.authUser &&
          this.password === process.env.authPassword
        ) {
          loggedIn = true
        }

        if (loggedIn) {
          localStorage.setItem('authUser', this.username)
          this.$router.push('/')
        } else {
          this.invalidCreds = true
        }
      }
    }
  }
}
</script>

<style>
</style>
