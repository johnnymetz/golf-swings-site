<template>
  <div v-show="loggedIn">
    <div v-if="single_golfer">
      <Breadcrumbs :name="single_golfer.name" :slug="golferId" />
      <GolferSilentbox :media="golferMedia" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Breadcrumbs from '@/components/Breadcrumbs'
import GolferSilentbox from '@/components/GolferSilentbox.vue'

export default {
  name: 'ProfileName',
  data() {
    return {
      loggedIn: false,
      golferId: this.$route.params.profile_id,
      single_golfer: null
    }
  },
  components: {
    Breadcrumbs,
    GolferSilentbox
  },
  computed: {
    golferMedia() {
      const media = []
      // get thumbnail for each media item
      for (let i = 0; i < this.single_golfer.media_set.edges.length; i++) {
        const mediaNode = this.single_golfer.media_set.edges[i].node
        let thumbnail
        if (
          mediaNode.source.includes('youtube.com') ||
          mediaNode.source.includes('youtu.be')
        ) {
          const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
          const match = mediaNode.source.match(regExp)
          const videoId =
            match !== undefined && match[7] !== undefined ? match[7] : false
          thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        } else {
          thumbnail = mediaNode.source
        }
        mediaNode.thumbnail = thumbnail
        media.push(mediaNode)
      }
      return media
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
  },
  apollo: {
    single_golfer: {
      query: gql`
        query GetGolfer($id: ID!) {
          single_golfer(id: $id) {
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
      `,
      variables() {
        return {
          id: this.golferId
        }
      },
      result({ data }) {
        if (!data.single_golfer) {
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
