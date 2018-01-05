<template>
  <header class="lt-header" :style="{ height }">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>