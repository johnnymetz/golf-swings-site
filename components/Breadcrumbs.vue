<template>
  <b-row>
    <b-col>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          text: 'Home',
          disabled: false,
          to: '/'
        },
        {
          text: this.name,
          disabled: true,
          to: '/' + this.slug
        }
      ]
    }
  }
}
</script>

<style>
</style>
