<template>
  <aside class="lt-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: 'Aside',
  props: {
    width: {
      type: String,
      default: '200px'
    }
  }
}
</script>