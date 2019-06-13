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
    },
    data() {
      return {
        title: this.$route.params.title
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'news', content: '这是新闻详情页' }
        ]
      }
    },
    asyncData({params, error, payload}) {
      console.log('params', params)
      console.log('error', error)
      console.log('payload', payload)
    }
  }
</script>

<style lang="scss" scoped>

</style>