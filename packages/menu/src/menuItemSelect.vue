<template>
  <li class="lt-menu-select" :class="{'lt-menu-select--opened': opened}" @click="opened = !opened">
    <div class="lt-menu-select__title" @click="titleClick">
      <slot name="title"></slot>
      <lt-icon type="chevron-down" class="icon"></lt-icon>
    </div>
    <lt-collapse-transition>
      <ul class="lt-menu-select__content" v-show="opened" ref="childContent" @click.stop>
        <slot></slot>
      </ul>
    </lt-collapse-transition>
  </li>
</template>
<script>
import LtCollapseTransition from '../../../src/transitions/collapse-transition';

export default {
  name: 'MenuItemSelect',
  components: { LtCollapseTransition },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    titleClick() {
      this.$emit('titleClick');
    }
  }
}
</script>
