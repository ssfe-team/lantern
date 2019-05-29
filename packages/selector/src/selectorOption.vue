<template>
  <li
    class="option-item"
    :class="{'disabled': value.disabled, 'active': isActive}"
    :style="optionStyle"
    @click="selectValueHandle(value)"
  >{{getValue}}</li>
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
          width: '190px',
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
      return typeof this.value === 'object' ? this.value.label : this.value
    }
  },
  methods: {
    selectValueHandle (item) {
      if (item.disabled) return
      let value
      value = typeof this.value === 'object' ? item.label : item
      this.$emit('select-value', value)

      this.dispatch('Selector', 'on-selected', value)
    }
  }
}
</script>
