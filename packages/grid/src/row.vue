<template>
  <div :class="classes" :style="rowStyle">
    <slot :gutter="gutter"></slot>
  </div>
</template>

<script>
const prefix = 'lt-row'

export default {
  components: 'Row',
  props: {
    gutter: {
      type: Number | Array,
      default: 0
    },
    justify: {
      type: String,
    },
    align: {
      type: String,
    }
  },
  computed: {
    classes() {
      return [
        {
          [`${prefix}`]: true,
          [`${prefix}-${this.align}`]: !!this.align,
          [`${prefix}-${this.justify}`]: !!this.justify,
        }
      ]
    },
    rowStyle() {
      const gutter = Array.isArray(this.gutter) ? this.gutter : [this.gutter, this.gutter]
      return {
        ...(gutter[0] > 0
          ? {
              marginLeft: `${gutter[0] / -2}px`,
              marginRight: `${gutter[0] / -2}px` ,
            }
          : {}
        ),
        ...(gutter[1] > 0
          ? {
              marginTop: `${gutter[1] / -2}px`,
              marginBottom: `${gutter[1] / 2}px`,
            }
          : {}
        ),
      }
    }
  }
}
</script>