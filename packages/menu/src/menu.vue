<template>
  <menu class="lt-menu" :class="{'lt-menu--horizontal': mode === 'horizontal'}">
    <slot></slot>
  </menu>
</template>
<script>
export default {
  name: 'Menu',
  data() {
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
  created() {
    this.$on('updateActiveName', (_uid) => {
      if(!this.accordion) {
        return;
      }
      this.$children.forEach(item => {
        if(item.$options.name === 'MenuItemSelect' && item._uid !== _uid) {
          item.opend = false;
        }
      });
    })
  }
}
</script>