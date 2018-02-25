<template>
  <li class="lt-menu-item-select" :class="{'lt-menu-item-select-opend': opend}" @click="opend = !opend">
    <div class="lt-menu-item-select-title" @click="titleClick">
      <slot name="title"></slot>
      <lt-icon-font class="icon-dropdown"></lt-icon-font>
    </div>
    <lt-collapse-transition>
      <ul class="lt-menu-item-select-content" v-show="opend" ref="childContent" @click.stop>
        <slot></slot>
      </ul>
    </lt-collapse-transition>
  </li>
</template>
<script>
import LtCollapseTransition from 'lantern/src/transitions/collapse-transition';

export default {
  name: 'MenuItemSelect',
  components: { LtCollapseTransition },
  data() {
    return {
      opend: false
    }
  },
  methods: {
    titleClick() {
      this.$emit('titleClick');
    }
  }
}
</script>