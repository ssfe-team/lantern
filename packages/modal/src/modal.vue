<template>
  <div class="lt-modal" v-if="show">
    <div class="lt-modal__mask" @click.self="close"></div>
    <div class="lt-modal__content">
      <slot></slot>
      <lt-icon class="lt-modal__close" type="close" size="22" @click="close"></lt-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data () {
    return {}
  },

  model: {
    prop: 'show',
    event: 'toggle-show'
  },

  props: {
    show: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close () {
      if (!this.disabled) {
        this.$emit('toggle-show', !this.show)
      }
    }
  }
}
</script>
