<template>
  <router-link class="lt-menu-item" :to="href" tag="li" @mouseenter="itemEnter" @mouseleave="itemLeave">
    <div>
      <a :href="href">
        <slot name="title"></slot>
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
  },
  methods: {
    itemEnter() {
      //this.isFocus = true;
    },
    itemLeave() {
      //this.isFocus = false;
    }
  }
}
</script>