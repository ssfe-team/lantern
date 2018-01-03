<template>
  <div id="app">
    {{msg}}
    <lt-message></lt-message>
    <lt-water-fall>
      <div></div>
    </lt-water-fall>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Lantern'
    }
  }
}
</script>

<style lang="less">
  @import '../src/index.less';
</style>

