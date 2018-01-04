<template>
  <main class="lt-main" :style="{ height }">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'Main',
  props: {
    height: {
      type: String,
      default: '120px'
    }
  }
}
</script>