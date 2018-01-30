<template>
    <transition name="lt-message-fade">
        <div
                :class="[
        'lt-message',
        type && !iconClass ? `lt-message--${ type }` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass]"
                v-show="visible"
                @mouseenter="clearTimer"
                @mouseleave="startTimer"
                role="alert"
        >
            <i :class="iconClass" v-if="iconClass"></i>
            <i :class="typeClass" v-else></i>
            <slot>
                <p v-if="!dangerouslyUseHTMLString" class="lt-message__content">{{ message }}</p>
                <p v-else v-html="message" class="lt-message__content"></p>
            </slot>
            <i v-if="showClose" class="lt-message__closeBtn lt-icon-close" @click="close"></i>
        </div>
    </transition>
</template>

<script type="text/babel">
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
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
        onClose: null,
        showClose: false,
        closed: false,
        timer: null,
        dangerouslyUseHTMLString: false,
        center: false
      }
    },

    props: {},

    computed: {
      iconWrapClass () {
        const classes = ['lt-message__icon']
        if (this.type && !this.iconClass) {
          classes.push(`lt-message__icon--${ this.type }`)
        }
        return classes
      },

      typeClass () {
        return this.type && !this.iconClass
          ? `lt-message__icon lt-icon-${ typeMap[this.type] }`
          : ''
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
        if (e.keyCode === 27) { // esc关闭消息
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

<style lang="less" scoped>
    .lt-message {
        position: fixed;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        display: inline-block;
        height: 40px;
        background-color: #fff;
        //border-radius: 4px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .08);
        z-index: 100010;

        .lt-message__icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin: 12px 16px 12px 24px;
            float: left;
            background-image: url(./img/message_icon.svg);
        }
        .lt-icon-info {
            background-position: 0px -16px; // TODO
        }
        .lt-icon-success {
            background-position: 0px -16px;
        }
        .lt-icon-error {
            background-position: -16px -16px;
        }
        .lt-icon-warning {
            background-position: -32px -16px;
        }

        .lt-message__content {
            display: inline-block;
            float: left;
            font-size: 14px;
            color: #4A4A4A;
            margin: 13px 24px 13px 0;
        }

    }

    .lt-message-fade-enter-active, .lt-message-fade-leave-active {
        transition: opacity .5s, transform .5s;
    }

    .lt-message-fade-enter, .lt-message-fade-leave-active {
        opacity: 0;
        transform: translate(-50%, -24px);
    }
</style>