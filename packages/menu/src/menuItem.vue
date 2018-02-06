<template>
  <router-link class="lt-menu-item" :to="href" tag="li">
    <a :href="href">
      <div @click="itemClick">
        <slot></slot>
      </div>
    </a>
  </router-link>
</template>
<script>
import Emitter from '../../../src/mixins/emitter.js';
export default {
  name: 'MenuItem',
  mixins: [ Emitter ],
  props: {
    href: {
      required: true,
      default: '/',
      type: String
    },
    selectOpendChangeDrag: {
      type: String
    }
  },
  methods: {
    itemClick() {
      this.dispatch('Menu', 'updateActiveName', this.$parent._uid);
    }
  },
  mounted() {
    /*
    let route = this.$route;
    if(/#/.test(this.href)) {
      if(route.hash === this.href) {
        this.itemClick();
      }
    }*/
  }
}
</script>