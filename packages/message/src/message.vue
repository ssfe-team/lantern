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
          @click="handleClick"
          role="alert"
        >
            <lt-icon :type="iconClass" v-if="iconClass"></lt-icon>
            <lt-icon class="lt-message__icon" :type="typeClass" :color="iconColor" v-else></lt-icon>
            <slot>
                <p v-if="!dangerouslyUseHTMLString" class="lt-message__content">{{ message }}</p>
                <p v-else v-html="message" class="lt-message__content"></p>
            </slot>
            <span class="lt-message__appent-text" @click.stop="handleClickAppendText">{{appendText}}</span>
        </div>
    </transition>
</template>

<script type="text/babel">

const typeMap = {
  success: 'checkmark-circled',
  info: 'information-circled',
  warning: 'information-circled',
  error: 'close-circled'
}

export default {
  name: 'Message',
  data () {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClick: null,
      onClose: null,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false,
      appendText: '',
      onClickAppendText: null
    }
  },

  props: {},

  computed: {
    typeClass () {
      return this.type && !this.iconClass
        ? `${typeMap[this.type]}`
        : ''
    },
    iconColor () {
      let color = null
      switch (this.type) {
        case 'success':
        case 'info':
          color = '#07AEFC'
          break
        case 'warning':
          color = '#F6A623'
          break
        case 'error':
          color = '#FF3D67'
          break
      }
      return color
    }
  },

  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },

  methods: {
    handleClick () {
      this.onClick && this.onClick()
    },
    handleClickAppendText () {
      this.onClickAppendText && this.onClickAppendText()
    },
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    clearTimer () {
      clearTimeout(this.timer)
    },

    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    keydown (e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>
