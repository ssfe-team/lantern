<template>
  <li
    class="option-item"
    :class="{'disabled': value.disabled, 'click': isClick}"
    :style="optionStyle"
    @click="selectValueHandle(value)"
  >{{getValue}}</li>
</template>
<script>
export default {
  name: 'Option',
  data () {
    return {
      isClick: false
    }
  },
  props: {
    value: {
      type: [Object, String],
      required: true
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
      this.isClick = true
      let value
      value = typeof this.value === 'object' ? item.label : item
      this.$emit('select-value', value)
    }
  }
}
</script>
