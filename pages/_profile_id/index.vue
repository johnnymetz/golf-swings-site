<template>
  <div></div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'ProfileId',
  data() {
    return {
      golferId: this.$route.params.profile_id,
      single_golfer: null
    }
  },
  apollo: {
    single_golfer: {
      query: gql`
        query GetGolfer($id: ID!) {
          single_golfer(id: $id) {
            id
            name
          }
        }
      `,
      variables() {
        return {
          id: this.golferId
        }
      },
      result({ data }) {
        if (this.single_golfer) {
          const url = `${this.golferId}/${this.single_golfer.name
            .replace(' ', '-')
            .toLowerCase()}`
          this.$router.push(url)
        } else {
          this.$nuxt.error({ statusCode: 404 })
        }
      },
      error(err) {
        this.error = err.message
      }
    }
  }
}
</script>

<style>
</style>
