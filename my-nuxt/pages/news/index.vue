<template>
  <div>
    <h2>News Index Page</h2>
    <p>{{$route.params.newsId}}</p>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">Home</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news-newsId.vue', params: {newsId: '123456', title: 'newsId-1'}}">newsId-1</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news-newsId.vue', params: {newsId: 7890, title: 'newsId-2'}}">newsId -2</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    asyncData({}) {}
  }
</script>

<style lang="scss" scoped>

</style>