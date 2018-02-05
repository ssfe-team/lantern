<template>
  <li class="lt-menu-item-select" :class="{'el-menu-item-select-opend': opend}" @click="opend = !opend">
    <div class="lt-menu-item-select-title" @click="titleClick">
      <slot name="title"></slot>
      <lt-icon-font class="icon-dropdown"></lt-icon-font>
    </div>
    <transition name="menu-item-select-animate">
      <ul class="lt-menu-item-select-content" v-show="opend" :style="{height: height}" ref="childContent" @click.stop>
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>
<script>
export default {
  name: 'MenuItemSelect',
  data() {
    return {
      opend: false,
      childHeight: '0px'
    }
  },
  props: {
    // 暂时先用传递height的方式解决展开元素高度问题
    height: {
      type: String,
      default: '0px',
      required: true
    }
  },
  methods: {
    titleClick() {
      this.$emit('titleClick');
    }
  }
}
</script>