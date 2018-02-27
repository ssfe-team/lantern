<template>
  <li class="lt-menu-item-group">
    <div class="lt-menu-group__title">{{title}}</div>
    <ul class="lt-menu-group__content"><slot></slot></ul>
  </li>
</template>
<script>
export default {
  name: 'MenuItemGroup',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>