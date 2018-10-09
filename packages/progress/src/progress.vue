<template>
  <div :class="classes">
    <div :class="[prefixCls + '-outer']">
      <div :class="[prefixCls + '-inner']">
        <div :class="[prefixCls + '-bg']" :style="progressStyles"></div>
      </div>
    </div>
    <span v-if="!hideInfo" :class="[prefixCls + '-text']">{{percentNumber + '%'}}</span>
  </div>
</template>

<script>
  const prefixCls = 'lt-progress'

  export default {
    name: 'Progress',
    data () {
      return {
        prefixCls
      }
    },
    props: {
      percent: {
        type: [Number, String],
        default: 0
      },
      hideInfo: {
        type: Boolean,
        default: false
      },
      strokeWidth: {
        type: Number,
        default: 10
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          this.hideInfo ? '' : `${prefixCls}-show-info`
        ]
      },
      progressStyles () {
        return {
          width: this.percentNumber + '%',
          height: this.strokeWidth + 'px',
          borderRadius: this.strokeWidth / 2 + 'px'
        }
      },
      percentNumber() {
        return this.percent.toString().replace(/%/g, '')
      }
    }
  }
</script>
