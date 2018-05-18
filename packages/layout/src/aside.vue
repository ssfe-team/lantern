<template>
  <aside class="lt-aside" :style="styles">
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
  },
  computed: {
    styles() {
      return {
        'width': this.width,
        'min-width': this.width
      }
    }
  }
}
</script>