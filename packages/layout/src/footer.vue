<template>
  <footer class="lt-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>