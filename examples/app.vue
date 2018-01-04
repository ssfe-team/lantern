<template>
  <div id="app">
    <lt-water-fall>
      <div></div>
    </lt-water-fall>
  </div>
</template>

<script>
import { waterFallRandomList } from './common/common.js';
export default {
  name: 'app',
  data () {
    return {
      waterFallData: waterFallRandomList(10)
    }
  }
}
</script>

<style lang="less">
  @import '../src/index.less';
</style>

