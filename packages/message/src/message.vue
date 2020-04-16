<template>
  <transition name="lt-message-fade">
    <div
      :class="[
        'lt-message',
        center ? 'is-center' : '',
        customClass,
        theme
      ]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      @click="handleClick"
      role="alert"
    >
      <lt-icon
        v-if="type"
        class="lt-message__icon"
        :type="ICON_TYPE[type] && ICON_TYPE[type].type"
        :color="ICON_TYPE[type] && ICON_TYPE[type].color"
      />
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="lt-message__content">{{ message }}</p>
        <p v-else v-html="message" class="lt-message__content"></p>
      </slot>
      <span class="lt-message__appent-text" @click.stop="handleClickAppendText" v-if="appendText">{{appendText}}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
import ICON_TYPE from './icon-type.js';
export default {
  name: 'Message',
  data () {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: '',
      theme: 'dark',
      customClass: '',
      onClick: null,
      onClose: null,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false,
      appendText: '',
      onClickAppendText: null,
      ICON_TYPE
    }
  },

  props: {},

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
