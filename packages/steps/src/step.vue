<template>
  <div class="lt-step" :class="statusClass">
    <div class="lt-step__content">
      <div class="lt-step__icon">
        <span v-if="stepNum" class="lt-step__icon-inner">{{ stepNum }}</span>
        <slot></slot>
      </div>

      <div class="lt-step__main">
        <span class="lt-step__title">{{ title }}</span>
      </div>
    </div>

    <div class="lt-step__line"></div>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    title: {
      type: String
    },
    stepNum: {
      type: String
    }
  },
  data () {
    return {
      status: 1
    }
  },
  computed: {
    statusClass () {
      return {
        pre: this.status === -1,
        active: this.status === 0
      }
    }
  }
}
</script>
