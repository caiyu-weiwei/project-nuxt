<template>
  <div>
    <h2>About Index Page</h2>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">Home</nuxt-link></li>
    </ul>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

</style>