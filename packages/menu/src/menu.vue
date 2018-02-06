<template>
  <menu class="lt-menu">
    <slot></slot>
  </menu>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      // 改变select open状态的标记
      selectOpendChangeDrag: ''
    }
  },
  props: {
    // 手风琴模式
    accordion: {
      default: false,
      type: Boolean 
    }
  },
  mothods: {
    itemClickFun(name) {
      this.selectOpendChangeDrag = name;
    }
  },
  created() {
    this.$on('updateActiveName', (_uid) => {
      this.$children.forEach(item => {
        if(item.$options.name === 'MenuItemSelect' && item._uid !== _uid) {
          item.opend = false;
        }
      });
    })
  }
}
</script>