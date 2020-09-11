<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'lt-btn-group'

  export default {
    name: 'ButtonGroup',
    props: {
      circle: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        const props = ['circle', 'vertical']
        let typeClass = { [prefixCls]: true }
        props.forEach(prop => {
          const classObj = {
            [`${prefixCls}-${prop}`]: this[prop]
          }
          typeClass = Object.assign(typeClass, classObj)
        })
        return typeClass
      }
    }
  }
</script>
