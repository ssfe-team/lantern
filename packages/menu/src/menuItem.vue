<template>
  <li v-if="isOut && href" class="lt-menu-item">
    <a :href="href">
      <div>
        <slot></slot>
      </div>
    </a>
  </li>
  <router-link class="lt-menu-item" :to="href" tag="li" v-else-if="href">
    <a :href="href">
      <div @click="itemClick">
        <slot></slot>
      </div>
    </a>
  </router-link>
  <li v-else class="lt-menu-item">
    <a>
      <div @click="itemClick">
        <slot></slot>
      </div>
    </a>
  </li>
</template>
<script>
import Emitter from '../../../src/mixins/emitter.js';
export default {
  name: 'MenuItem',
  mixins: [ Emitter ],
  props: {
    href: {
      type: String
    },
    selectOpendChangeDrag: {
      type: String
    }
  },
  computed: {
    isOut() {
      if(/\/\//.test(this.href)) {
        return true;
      }
      return false;
    }
  },
  methods: {
    itemClick(eve) {
      this.dispatch('Menu', 'updateActiveName', this.$parent._uid);
      this.$emit('itemClick', eve);
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