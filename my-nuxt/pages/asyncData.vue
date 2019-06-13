<template>
  <div>
    <p><span>姓名：</span>{{info.name}}</p>
    <p><span>年龄：</span>{{info.age}}</p>
    <p><span>兴趣：</span>{{info.interest}}</p>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">Home</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  import axios from '@/plugins/axios'
  export default {
    async asyncData() {
      let { data } = await axios.get('https://api.myjson.com/bins/192r81')
      console.log('data', data)
      return { info: data }
    }
  }
</script>

<style lang="scss" scoped>

</style>