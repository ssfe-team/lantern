<template>
  <router-link class="lt-menu-item" :to="href" tag="li">
    <a :href="href">
      <slot></slot>
    </a>
  </router-link>
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