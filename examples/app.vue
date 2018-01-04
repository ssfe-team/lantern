<template>
  <div id="app">
    <lt-layout class="ltdemo-wrap" :width="layoutWidth">
      <lt-header class="ltdemo-header" height="60px">
        <div class="header-nav"></div>
      </lt-header>
      <lt-main class="ltdemo-main" height="100%"></lt-main>
    </lt-layout>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      layoutWidth: '100%'
    }
  }
}
</script>
<style lang="less">
  @import '../src/index.less';
  @import './styles/index.less';
</style>

