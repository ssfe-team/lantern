<template>
  <div :class="classes" :style="styles" v-show="show" @click="clickTag">
    <slot></slot>
    <lt-icon
      v-if="closable"
      type="close"
      color="#494F5F"
      :size="iconSize"
      :style="{cursor: 'pointer'}"
      @click="closeTag"
    />
  </div>
</template>
<script>
  import {colorType, sizetype} from './enum.js';
  export default {
    name: 'Tag',
    data() {
      return {
        show: this.visible === undefined ? true : this.visible,
      }
    },
    model: {
      prop: 'visible',
      event: 'close'
    },
    props: {
      visible: {
        type: [Boolean, undefined],
        default: undefined
      },
      closable: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'gray'
      },
      bgcColor: {
        type: String,
      },
      size: {
        default: 'normal',
        validator: (value) => (sizetype.indexOf(value) !== -1 || typeof value === 'number')
      },
    },
    watch: {
      visible(value) {
        this.show = value
      }
    },
    computed: {
      classes() {
        const prefixCls = 'lt-tag';
        let typeClass = {}
        if (colorType.indexOf(this.color) > -1) {
          typeClass = {...typeClass, [`${prefixCls}-${this.color}`]: true}
        }
        if (sizetype.indexOf(this.size) > -1) {
          typeClass = {...typeClass, [`${prefixCls}-${this.size}`]: true}
        }
        return [
          `${prefixCls}`,
          typeClass
        ]
      },
      iconSize() {
        if (sizetype.indexOf(this.size) === -1 && typeof this.size === 'number') {
          return this.size - 2
        }
        return 12
      },
      styles() {
        let typeStyle = {}
        if (colorType.indexOf(this.color) === -1) {
          typeStyle = {...typeStyle, color: this.color, backgroundColor: this.bgcColor, border: `1px solid ${this.bgcColor}`}
        }
        if (sizetype.indexOf(this.size) === -1 && typeof this.size === 'number') {
          typeStyle = {...typeStyle, fontSize: `${this.size}px`, padding: '7px 9px'}
        }
        return typeStyle
      }
    },
    methods: {
      closeTag() {
        if (!this.visible) {
          this.show = false
        }
        this.$emit('close', false)
      },
      clickTag() {
        this.$emit('click')
      }
    },
  }
</script>
