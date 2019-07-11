<template>
  <div class="lt-steps" :class="stepsClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Steps',
  data () {
    return {
    }
  },
  props: {
    current: {
      type: Number,
      default: 0
    },
    isVertical: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    stepsClass () {
      return {
        'lt-steps--vertical': this.isVertical,
        'simple': this.simple
      }
    }
  },
  watch: {
    current(v) {
      this.setActiveIndex(v)
    }
  },
  mounted () {
    this.setActiveIndex(this.current)
    this.$on('append', this.updateChildProps())
    this.$on('remove', this.updateChildProps())
  },
  methods: {
    setActiveIndex (index) {
      this.$children.forEach((item, i) => {
        if (i < index) {
          item.status = -1
        } else if (i === index) {
          item.status = 0
        } else {
          item.status = 1
        }
      })
    },
    updateChildProps () {
      const total = this.$children.length
      this.$children.forEach((child, index) => {
        if (!this.isVertical) {
          child.total = total
        }
      })
    }
  }
}
</script>
