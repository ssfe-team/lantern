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
    defaultValue: {
      type: [Object, String]
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
    }
  },
  computed: {
    optionStyle () {
      return {
        ...this.optionSize
      }
    },
    getValue () {
      return this.value === 'object' ? this.value.label : this.value
    }
  },
  watch: {
    defaultValue (v) {
      if (v) {
        let value = ''
        value = typeof v === 'object' ? v.label : v
        this.$emit('select-value', value)
        this.dispatch('Selector', 'on-selected', value)
      }
    }
  },
  mounted() {
    if (this.defaultValue) {
      let value = ''
      value = typeof this.defaultValue === 'object' ? this.defaultValue.label : this.defaultValue
      this.$emit('select-value', value)
      this.dispatch('Selector', 'on-selected', value)
    }
  },
  methods: {
    selectValueHandle (item) {
      if (item.disabled) return
      let value = ''
      value = typeof this.value === 'object' ? item.label : item
      this.$emit('select-value', value)

      this.dispatch('Selector', 'on-selected', value)
    }
  }
}
</script>
