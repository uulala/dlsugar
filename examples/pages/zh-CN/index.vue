<style scoped>
</style>
<template>
  <div class="home">
    <router-link active-class="active" to="/zh-CN/component/alert" exact>组件</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lang: this.$route.meta.lang
    }
  }
}
</script>
