<template>
  <button
    :type="htmlType"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <Icon class="lt-load-loop" type="load-c" :size="iconSize" v-if="loading"></Icon>
    <Icon :type="icon" :size="iconSize" v-if="icon && !loading"></Icon>
    <slot></slot>
  </button>
</template>
<script>
  import Icon from '../../icon'

  const prefixCls = 'lt-btn'

  export default {
    name: 'Button',
    components: { Icon },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'large'
      },
      htmlType: {
        type: String,
        default: 'button',
      },
      icon: String,
      iconSize: {
        type: String,
        default: '16'
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      long: {
        type: Boolean,
        default: false
      },
      shape: {
        type: Boolean,
        default: false
      },
      ghost: {
        type: Boolean,
        default: false
      },
      dashed: {
        type: Boolean,
        default: false
      },
      text: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      classes () {
        const props = ['long', 'ghost', 'dashed', 'text']
        let typeClass = {}
        props.forEach(prop => {
          const classObj = {
            [`${prefixCls}-${this.type}-${prop}`]: this[prop]
          }
          typeClass = Object.assign(typeClass, classObj)
        })
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-loading`]: this.loading,
            [`${prefixCls}-circle`]: this.circle,
            [`${prefixCls}-icon`]: this.$slots.default && !!this.icon,
            [`${prefixCls}-icon-only`]: !this.$slots.default && (!!this.icon || this.loading),
          },
          typeClass
        ]
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    },
  }
</script>
