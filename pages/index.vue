<template>
  <b-row v-show="loggedIn">
    <b-col>
      <div v-if="error" class="text-center mt-3">{{ this.error }}</div>
      <GolfersList v-if="all_golfers && all_golfers.edges" :golfers="all_golfers.edges" />
    </b-col>
  </b-row>
</template>

<script>
import gql from 'graphql-tag'
import GolfersList from '@/components/GolfersList.vue'

export default {
  name: 'home',
  data() {
    return {
      loggedIn: false,
      all_golfers: [],
      error: null
    }
  },
  components: {
    GolfersList
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
  },
  apollo: {
    all_golfers: {
      query: gql`
        query {
          all_golfers {
            edges {
              node {
                id
                name
                headshot {
                  source
                }
                media_set {
                  edges {
                    node {
                      id
                      source
                      description
                    }
                  }
                }
              }
            }
          }
        }
      `,
      error(err) {
        this.error = err.message
      }
    }
  }
}
</script>

<style>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
