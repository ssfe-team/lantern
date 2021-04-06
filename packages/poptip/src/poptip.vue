<template>
  <div
    v-click-outside="handleClose"
    :class="classes"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div
      :class="[prefixCls + '-rel']"
      ref="reference"
      @click="handleClick"
      @mousedown="handleFocus(false)"
      @mouseup="handleBlur(false)"
    >
      <slot></slot>
    </div>

    <transition name="fade">
      <div
        v-show="visible"
        v-transfer-dom
        :class="popperClasses"
        :style="customStyle"
        :data-transfer="transfer"
        ref="popper"
        @click="handleTransferClick"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        <div :class="[prefixCls + '-content']">
          <div :class="[prefixCls + '-arrow']" v-if="visibleArrow"></div>
          <div :class="[prefixCls + '-inner']" v-if="confirm">
            <div :class="[prefixCls + '-body']">
              <i class="lt-icon lt-icon-help-circled"></i>
              <div :class="[prefixCls + '-body-message']">
                <slot name="title">{{ title }}</slot>
              </div>
            </div>
            <div :class="[prefixCls + '-footer']">
              <lt-button type="text" size="small" @click.native="cancel">{{ localeCancelText }}</lt-button>
              <lt-button type="primary" size="small" @click.native="ok">{{ localeOkText }}</lt-button>
            </div>
          </div>
          <div :class="[prefixCls + '-inner']" v-if="!confirm">
            <div :class="[prefixCls + '-title']" v-if="showTitle" ref="title" :style="innerStyles">
              <slot name="title">
                <div :class="[prefixCls + '-title-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']" :style="innerStyles">
              <div :class="[prefixCls + '-body-content']">
                <slot name="content">
                  <div :class="[prefixCls + '-body-content-inner']">{{ content }}</div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Popper from '../../base/popper.js'
  import ltButton from '../../button/src/button.vue'
  import { directive as clickOutside } from 'v-click-outside-x';
  import TransferDom from '../../../src/directives/transfer-dom.js'
  import { oneOf } from '../../../src/utils/assist'

  const prefixCls = 'lt-poptip'

  export default {
    name: 'Poptip',
    mixins: [Popper],
    directives: { clickOutside, TransferDom },
    components: { ltButton },
    props: {
      trigger: {
        validator (value) {
          return oneOf(value, ['click', 'focus', 'hover'])
        },
        default: 'click'
      },
      placement: {
        validator (value) {
          return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
        },
        default: 'top'
      },
      title: {
        type: [String, Number]
      },
      content: {
        type: [String, Number],
        default: ''
      },
      customStyle: {
          type: Object
      },
      confirm: {
        type: Boolean,
        default: false
      },
      okText: {
        type: String
      },
      cancelText: {
        type: String
      },
      transfer: {
        type: Boolean,
        default: false
      },
      popperClass: {
        type: String
      },
      padding: {
        type: String
      },
      visibleArrow: {
        type: Boolean,
        default: true
      },
    },
    data () {
      return {
        prefixCls: prefixCls,
        showTitle: true,
        isInput: false,
        // transfer 模式下，点击 slot 也会触发关闭
        disableCloseUnderTransfer: false,
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-confirm`]: this.confirm
          }
        ]
      },
      popperClasses () {
        return [
          `${prefixCls}-popper`,
          {
            [`${prefixCls}-confirm`]: this.transfer && this.confirm,
            [`${this.popperClass}`]: !!this.popperClass
          }
        ]
      },
      innerStyles() {
        let style = {}
        if (this.padding) {
          style.padding = `${this.padding}px`
        }
        return style
      },
      localeOkText () {
        return this.okText === undefined ? '确定' : this.okText
      },
      localeCancelText () {
        return this.okText === undefined ? '取消' : this.cancelText
      }
    },
    mounted () {
      if (!this.confirm) {
        this.showTitle = (this.$slots.title !== undefined) || this.title
      }
      // if trigger and children is input or textarea,listen focus & blur event
      if (this.trigger === 'focus') {
        this.$nextTick(() => {
          const $children = this.getInputChildren()
          if ($children) {
            this.isInput = true
            $children.addEventListener('focus', this.handleFocus, false)
            $children.addEventListener('blur', this.handleBlur, false)
          }
        })
      }
    },
    beforeDestroy () {
      const $children = this.getInputChildren()
      if ($children) {
        $children.removeEventListener('focus', this.handleFocus, false)
        $children.removeEventListener('blur', this.handleBlur, false)
      }
    },
    methods: {
      handleClick () {
        if (this.confirm) {
          this.visible = !this.visible
          return true
        }
        if (this.trigger !== 'click') {
          return false
        }
        this.visible = !this.visible
      },
      handleTransferClick () {
        if (this.transfer) {
          this.disableCloseUnderTransfer = true
        }
      },
      handleClose () {
        if (this.disableCloseUnderTransfer) {
          this.disableCloseUnderTransfer = false
          return false
        }
        if (this.confirm) {
          this.visible = false
          return true
        }
        if (this.trigger !== 'click') {
          return false
        }
        this.visible = false
      },
      handleFocus (fromInput = true) {
        if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
          return false
        }
        this.visible = true
      },
      handleBlur (fromInput = true) {
        if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
          return false
        }
        this.visible = false
      },
      handleMouseenter () {
        if (this.trigger !== 'hover' || this.confirm) {
          return false
        }
        if (this.enterTimer) {
          clearTimeout(this.enterTimer)
        }
        this.enterTimer = setTimeout(() => {
          this.visible = true
        }, 100)
      },
      handleMouseleave () {
        if (this.trigger !== 'hover' || this.confirm) {
          return false
        }
        if (this.enterTimer) {
          clearTimeout(this.enterTimer)
          this.enterTimer = setTimeout(() => {
            this.visible = false
          }, 100)
        }
      },
      cancel () {
        this.visible = false
        this.$emit('on-cancel')
      },
      ok () {
        this.visible = false
        this.$emit('on-ok')
      },
      getInputChildren () {
        const $input = this.$refs.reference.querySelectorAll('input')
        const $textarea = this.$refs.reference.querySelectorAll('textarea')
        let $children = null

        if ($input.length) {
          $children = $input[0]
        } else if ($textarea.length) {
          $children = $textarea[0]
        }
        return $children
      }
    }
  }
</script>
