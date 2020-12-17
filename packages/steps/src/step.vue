<template>
  <div class="lt-step" :class="statusClass" :style="stepStyle">
    <!-- 步骤线 -->
    <div class="lt-step__line">
      <i></i>
    </div>
    <!-- 图标 -->
    <div class="lt-step__head">
      <div class="lt-step__icon">
        <slot>
          <span v-if="stepNum" class="lt-step__icon-inner">{{ stepNum }}</span>
        </slot>
      </div>
    </div>
    <!-- 内容 -->
    <div class="lt-step__main">
      <span class="lt-step__title">{{ title }}</span>
      <slot name="content">
        <div v-if="content" class="lt-step__content">{{ content }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Emitter from '../../../src/mixins/emitter'
export default {
  name: 'Step',
  mixins: [ Emitter ],
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    stepNum: {
      type: String
    }
  },
  data () {
    return {
      status: 1,
      total: 1
    }
  },
  computed: {
    statusClass () {
      return {
        pre: this.status === -1,
        active: this.status === 0
      }
    },
    stepStyle () {
      return {
        width: `${(1 / this.total) * 100}%`
      }
    }
  },
  mounted() {
    this.dispatch('LtSteps', 'append')
  },
  beforeDestroy() {
    this.dispatch('LtSteps', 'remove')
  }
}
</script>
