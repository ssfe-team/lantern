<template> 
  <div class="lt-modal" v-if="show">
    <div class="lt-modal__mask" v-if="show" @click.self="close"></div>
    <div class="lt-modal__content" v-if="show">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
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
    }
  },

  methods: {
    close() {
      this.$emit('toggle-show', !this.show)
    }
  }
}
</script>
