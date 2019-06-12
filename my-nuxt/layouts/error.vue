<template>
  <div>
    <h2 v-if="error.statusCode === '404'">404页面</h2>
    <h2 v-else>应用发生错误异常</h2>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog'
  }
</script>

<style lang="scss" scoped>

</style>