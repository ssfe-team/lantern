<template>
  <div v-transfer-dom :data-transfer="transfer">
    <transition :name="transitionNames[1]">
      <div
        :class="maskClasses"
        :style="wrapStyles"
        v-show="visible"
        @click="handleMask"
      ></div>
    </transition>
    <div :class="wrapClasses" :style="wrapStyles" @click="handleWrapClick">
      <transition :name="transitionNames[0]" @after-leave="animationFinish">
        <div :class="classes" :style="mainStyles" v-if="visible" @mousedown="handleMousedown">
          <div
            :class="contentClasses"
            ref="content"
          >
            <a :class="closeClasses" v-if="closable" @click="close">
              <slot name="close">
                <Icon :type="simple ? 'close-one' : 'window-close'" :size="simple ? '40' : '14'" :color="simple ? '' : '#000'"></Icon>
              </slot>
            </a>
            <div :class="[prefixCls + '-header']" v-if="showHead && !simple">
              <slot name="header">
                <div :class="[prefixCls + '-header-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']">
              <slot></slot>
            </div>
            <div :class="[prefixCls + '-footer']" v-if="!footerHide && !simple">
              <slot name="footer">
                <i-button
                  type="primary"
                  size="large"
                  :style="footerBtnStyles"
                  :loading="buttonLoading"
                  @click.native="ok"
                >{{ localeOkText }}</i-button>
                <i-button :style="footerBtnStyles" size="large" @click.native="cancel">{{ localeCancelText }}</i-button>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Icon from '../../icon'
import iButton from '../../button/src/button.vue'
import TransferDom from '../../../src/directives/transfer-dom'
import Emitter from '../../../src/mixins/emitter'
import ScrollbarMixins from './mixins-scrollbar';
import { findComponentsDownward } from '../../../src/utils/assist'

const prefixCls = 'lt-modal'

export default {
  name: 'Modal',
  mixins: [Emitter, ScrollbarMixins],
  components: { Icon, iButton },
  directives: { TransferDom },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 400
    },
    okText: {
      type: String
    },
    cancelText: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object
    },
    className: {
      type: String
    },
    // for instance
    footerHide: {
      type: Boolean,
      default: false
    },
    transitionNames: {
      type: Array,
      default() {
        return ['ease', 'fade']
      }
    },
    transfer: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      wrapShow: false,
      showHead: true,
      buttonLoading: false,
      visible: this.value,
      isMouseTriggerIn: false // #5800
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrap`,
        {
          [`${prefixCls}-wrap--simple`]: !!this.simple
        },
        {
          [`${prefixCls}-hidden`]: !this.wrapShow,
          [`${this.className}`]: !!this.className
        }
      ]
    },
    wrapStyles() {
      return {
        zIndex: this.zIndex
      }
    },
    maskClasses() {
      return `${prefixCls}-mask`
    },
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-fullscreen`]: this.fullscreen,
          [`${prefixCls}-fullscreen-no-header`]: this.fullscreen && !this.showHead,
          [`${prefixCls}-fullscreen-no-footer`]: this.fullscreen && this.footerHide
        }
      ]
    },
    contentClasses() {
      return [
        `${prefixCls}-content`
      ]
    },
    closeClasses() {
      return [
        prefixCls + '-close'
      ]
    },
    mainStyles() {
      let style = {}

      const width = parseInt(this.width)
      let styleWidth = {}

      if (!this.simple) {
        styleWidth = {
          width: width <= 100 ? `${width}%` : `${width}px`
        }
      }

      const customStyle = this.styles ? this.styles : {}

      Object.assign(style, styleWidth, customStyle)

      return style
    },
    footerBtnStyles() {
      let style = {
        height: '40px',
        padding: '10px 28px'
      }
      return style
    },
    localeOkText() {
      if (this.okText === undefined) {
        return '确定'
      } else {
        return this.okText
      }
    },
    localeCancelText() {
      if (this.cancelText === undefined) {
        return '取消'
      } else {
        return this.cancelText
      }
    }
  },
  methods: {
    close() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    handleMask() {
      if (this.maskClosable) {
        this.close()
      }
    },
    handleWrapClick(event) {
      if (this.isMouseTriggerIn) {
        this.isMouseTriggerIn = false
        return
      }
      // use indexOf,do not use === ,because lt-modal-wrap can have other custom className
      const className = event.target.getAttribute('class')
      if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.handleMask()
    },
    handleMousedown() {
      this.isMouseTriggerIn = true
    },
    cancel() {
      this.close()
    },
    ok() {
      if (this.loading) {
        this.buttonLoading = true
      } else {
        this.visible = false
        this.$emit('input', false)
      }
      this.$emit('on-ok')
    },
    EscClose(e) {
      if (this.visible && this.closable) {
        if (e.keyCode === 27) {
          const $Modals = findComponentsDownward(this.$root, 'Modal').filter(
            item => item.$data.visible && item.$props.closable
          )

          const $TopModal = $Modals.sort((a, b) => {
            return a.$data.modalIndex < b.$data.modalIndex ? 1 : -1
          })[0]

          setTimeout(() => {
            $TopModal.close()
          }, 0)
        }
      }
    },
    animationFinish() {
      this.$emit('on-hidden')
    }
  },
  mounted() {
    if (this.visible) {
      this.wrapShow = true
    }

    let showHead = true

    if (this.$slots.header === undefined && !this.title) {
      showHead = false
    }

    this.showHead = showHead

    // ESC close
    document.addEventListener('keydown', this.EscClose)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.EscClose)
    this.removeScrollEffect()
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      if (val === false) {
        this.buttonLoading = false
        this.timer = setTimeout(() => {
          this.wrapShow = false
          this.removeScrollEffect()
        }, 300)
      } else {
        if (this.timer) clearTimeout(this.timer)
        this.wrapShow = true
        if (!this.scrollable) {
          this.addScrollEffect()
        }
      }
      this.broadcast('Table', 'on-visible-change', val)
      this.broadcast('Slider', 'on-visible-change', val) // #2852
      this.$emit('on-visible-change', val)
    },
    loading(val) {
      if (!val) {
        this.buttonLoading = false
      }
    },
    scrollable (val) {
      if (!val) {
        this.addScrollEffect();
      } else {
        this.removeScrollEffect();
      }
    },
    title(val) {
      if (this.$slots.header === undefined) {
        this.showHead = !!val
      }
    }
  }
}
</script>
