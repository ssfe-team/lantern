<template>
  <div class="lt-step" :class="statusClass">
    <div class="lt-step__content">
      <div
        class="lt-step__icon"
        :class="{'base': !iconinner}"
      >
        <span v-if="iconinner" class="lt-step__icon-inner">{{ iconinner }}</span>
        <slot></slot>
      </div>

      <div class="lt-step__main">
        <span class="lt-step__title">{{ title }}</span>
        <p
          class="lt-step__description"
          v-if="description"
        >{{ description }}</p>
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
    iconinner: {
      type: String
    },
    description: {
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
