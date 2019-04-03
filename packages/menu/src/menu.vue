<template>
  <menu class="lt-menu" :class="{'lt-menu--horizontal': mode === 'horizontal'}">
    <slot />
  </menu>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  },
  props: {
    // 手风琴模式，即每次只能打开一个子菜单
    accordion: {
      default: false,
      type: Boolean
    },
    // menu显示方式（纵向或者横向）
    mode: {
      default: 'vertical',
      type: String
    }
  },
  created () {
    this.$on('updateActiveName', (_uid) => {
      this.$children.forEach(item => {
        if (this.accordion && item.$options.name === 'MenuItemSelect' && item._uid !== _uid) {
          item.opened = false
        }
        if (item.$options.name === 'MenuItemSelect' && item._uid === _uid && !item.opened) {
          item.opened = true
        }
      })
    })
  }
}
</script>
