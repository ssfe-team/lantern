<template>
  <li class="lt-menu-item-group">
    <div class="lt-menu-item-group-title">{{title}}</div>
    <ul class="lt-menu-item-group-content"><slot></slot></ul>
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