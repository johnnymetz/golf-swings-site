<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <div v-else>
      <h1>An error occurred</h1>
      <p>{{ error }}</p>
    </div>
    <nuxt-link to="/" class="btn btn-primary flex-shrink-1 mt-2">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
