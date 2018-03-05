<template>
    <transition name="lt-message-fade">
        <div
          :class="[
            'lt-message',
            type && !iconClass ? `lt-message--${ type }` : '',
            center ? 'is-center' : '',
            customClass]"
          v-show="visible"
          @mouseenter="clearTimer"
          @mouseleave="startTimer"
          role="alert"
        >
            <lt-icon-font :class="iconClass" v-if="iconClass"></lt-icon-font>
            <lt-icon-font :class="typeClass" v-else></lt-icon-font>
            <slot>
                <p v-if="!dangerouslyUseHTMLString" class="lt-message__content">{{ message }}</p>
                <p v-else v-html="message" class="lt-message__content"></p>
            </slot>
        </div>
    </transition>
</template>

<script type="text/babel">
const typeMap = {
  success: 'confirm',
  info: 'details',
  warning: 'details',
  error: 'cancel'
}

export default {
  name: 'Message',
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    }
  },

  props: {},

  computed: {
    typeClass() {
      return this.type && !this.iconClass
        ? `lt-message__icon icon-${typeMap[this.type]}`
        : ''
    }
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },

  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>