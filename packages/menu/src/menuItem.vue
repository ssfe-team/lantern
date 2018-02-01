<template>
  <router-link class="lt-menu-item" :to="href" tag="li">
    <div>
      <a :href="href">
        <slot name="text"></slot>
      </a>
    </div>
    <slot name="childItem" v-if="isFocus"></slot>
  </router-link>
</template>
<script>
export default {
  name: 'MenuItem',
  data() {
    return {
      isFocus: false
    }
  },
  props: {
    href: {
      type: String,
      default: '/',
      required: true
    }
  }
}
</script>