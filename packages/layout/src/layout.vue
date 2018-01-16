<template>
  <section class="lt-layout" :class="{ 'lt-layout-isrow': isRow }">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'Layout',
  props: {
    isRow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

