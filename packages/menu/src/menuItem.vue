<template>
  <li class="lt-menu-item">
    <router-link :to="href" :href="href" tag="a">
      <slot></slot>
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    href: {
      type: String,
      default: '/',
      required: true
    }
  }
}
</script>