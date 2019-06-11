<template>
  <div>
    <h2>News Detail Page</h2>
    <p>NewsId{{$route.params.newsId}}</p>

  </div>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.newsId)
      // return new Promisse(resolve => setTimeout(() => resolve()))
    }
  }
</script>

<style lang="scss" scoped>

</style>