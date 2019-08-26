<template>
  <div id="page-content">
    <div id="content-wrap">
      <!-- <no-ssr> -->
      <Header />
      <b-container>
        <nuxt />
      </b-container>
      <!-- </no-ssr> -->
    </div>
    <!-- <Footer id="footer" /> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style scoped>
.container {
  padding-top: 20px;
}
</style>
