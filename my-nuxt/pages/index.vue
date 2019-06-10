<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">Home</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news', params: {newsId: 345678}}">News</nuxt-link></li>
      <li><nuxt-link :to="{name: 'about', params: {id: 123}}">About</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>