<template>
  <div class="p-2 text-center">
    <div class="footer-item">Life is better when you’re golfing.</div>
    <div class="footer-item">&copy; {{ new Date().getFullYear() }}</div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer-item {
  background-color: #ccc;
}
</style>
