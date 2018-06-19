<template> 
  <div class="lt-modal" v-if="show">
    <transition name="lt-modal__mask--fade">
      <div class="lt-modal__mask" v-if="show" @click.self="close"></div>
    </transition>
    <transition name="lt-modal__content--fade">
      <div class="lt-modal__content" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
    return {
    }
  },

  model: {
    prop: 'show',
    event: 'toggleShow'
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close() {
      this.$emit('toggleShow', !this.show)
    }
  }
}
</script>
