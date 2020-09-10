<template>
  <div :class="classes" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'lt-col'

export default {
  components: 'Col',
  props: {
    span: {
      type: Number
    },
    xs: {
      type: Number | Object,
    },
    sm: {
      type: Number | Object,
    },
    md: {
      type: Number | Object,
    },
    lg: {
      type: Number | Object,
    },
    xl: {
      type: Number | Object,
    },
    xxl: {
      type: Number | Object,
    },
  },
  computed: {
    classes() {
      const sizeType = ['span', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
      let typeClass = { [prefix]: true}
      sizeType.forEach(type => {
        let size = this[type], classObj = {}
        // 如果span类型存在值，拼接对应的类名
        if(typeof size === 'number'){
          classObj = {
            [`${prefix}-${type}-${size}`]: true 
          }
        }
        // 合并类名
        typeClass = Object.assign(typeClass, classObj)
      })
      return typeClass
    },
    colStyle() {
      let parent = this.$parent
      if (parent && parent.$options._componentTag !== 'lt-row') {
        parent = parent.$parent
      }
      const props = parent ? parent.gutter : 0
      const gutter = Array.isArray(props) ? props : [props, props]
      
      return {
        ...(gutter[0] > 0
          ? {
              paddingLeft: `${gutter[0] / 2}px`,
              paddingRight: `${gutter[0] / 2}px` ,
            }
          : {}
        ),
        ...(gutter[1] > 0
          ? {
              paddingTop: `${gutter[1] / 2}px`,
              paddingBottom: `${gutter[1] / 2}px`,
            }
          : {}
        ),
      }
    }
  }
}
</script>