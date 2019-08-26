<template>
  <div>
    <b-row class="mb-3">
      <b-col>
        <b-input type="text" v-model="search" placeholder="Search..."></b-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(golfer, i) in filteredList"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        xl="3"
        class="mb-3"
      >
        <b-card :title="golfer.node.name" title-tag="h5" class="h-100">
          <div>
            <b-img :src="golfer.node.headshot.source" fluid></b-img>
            <div class="mt-3">
              <nuxt-link
                :to="`${golfer.node.id}/${golfer.node.name.replace(' ', '-').toLowerCase()}`"
                class="btn btn-primary flex-shrink-1"
              >View</nuxt-link>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'GolfersList',
  data() {
    return {
      search: ''
    }
  },
  props: {
    golfers: {
      type: Array,
      required: true
    }
  },
  computed: {
    filteredList() {
      const filtered = this.golfers.filter(golfer =>
        golfer.node.name.toLowerCase().includes(this.search.toLowerCase())
      )
      return filtered
    }
  }
}
</script>

<style>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
