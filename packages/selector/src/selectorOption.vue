<template>
  <li
    class="option-item"
    :class="{'disabled': value.disabled, 'active': isActive}"
    :style="optionStyle"
    @click="selectValueHandle(value)"
  >
    <img class="option-item_img" :src="picUrl"  :style="imgStyle" :alt="getValue" v-if="hasImg">
    {{getValue}}</li>
</template>

<script>
import Emitter from '../../../src/mixins/emitter';
export default {
  name: 'Option',
  mixins: [ Emitter ],
  props: {
    value: {
      type: [Object, String],
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    optionSize: {
      type: Object,
      default () {
        return {
          height: '32px'
        }
      }
    },
    suffix: {
      type: String
    },
    hasImg: {
      type: Boolean,
      default: false
    },
    picUrl: {
      type: String,
      default: "data:image/svg+xml,%3Csvg width='46' height='46' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23F3F4F7' cx='23' cy='23' r='23'/%3E%3Cg fill='%23AAA'%3E%3Cpath d='M14 31.545c0-4.016 3.171-7.272 7.083-7.272h2.834c3.912 0 7.083 3.256 7.083 7.272 0 .703-.57 1.273-1.273 1.273H15.273c-.703 0-1.273-.57-1.273-1.273zM28.167 18.273c0 2.917-2.453 5.272-5.49 5.272-3.037 0-5.49-2.355-5.49-5.272 0-2.918 2.453-5.273 5.49-5.273 3.037 0 5.49 2.355 5.49 5.273z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    },
    imgStyle: {
      type: Object,
      default () {
        return {
          width: '32px',
          height: '32px'
        }
      }
    }
  },
  computed: {
    optionStyle () {
      return {
        ...this.optionSize
      }
    },
    getValue () {
      return typeof this.value === 'object' ? (this.value.label || this.value[this.suffix]) : this.value
    }
  },
  // watch: {
  //   defaultValue (v) {
  //     console.log(v, 123)
  //     let value = ''
  //     value = typeof v === 'object' ? (v.label || v[this.suffix]) : v
  //     this.$emit('select-value', value)
  //     this.dispatch('Selector', 'on-selected', value)
  //   }
  // },
  // mounted() {
  //   if (this.defaultValue) {
  //     let value = ''
  //     value = typeof this.defaultValue === 'object' ? (this.defaultValue.label || this.defaultValue[this.suffix]) : this.defaultValue
  //     this.$emit('select-value', this.defaultValue)
  //     this.dispatch('Selector', 'on-selected', value)
  //   }
  // },
  methods: {
    selectValueHandle (item) {
      if (item.disabled) return
      let value = ''
      value = typeof this.value === 'object' ? (item.label || item[this.suffix]) : item
      this.$emit('select-value', item)

      this.dispatch('Selector', 'on-selected', value)
    }
  }
}
</script>
