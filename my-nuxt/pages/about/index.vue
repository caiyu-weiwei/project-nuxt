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
    transition: 'dynamic',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.dynamic-enter-active,
.dynamic-leave-active{
  transition: all 2s;
  font-size: 12px;
}
.dynamic-enter,
.dynamic-leave{
  opacity: 0;
  font-size: 40px;
}

</style>