<template>
  <transition name="lt-message-fade">
    <div
      v-show="visible"
      :class="['lt-message', customClass, theme]"
      role="alert"
      @click="handleClick"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <Icon
        v-if="type !== 'none'"
        :class="[
          'lt-message__icon',
          type === 'loading' ? 'is-loaing' : '',
        ]"
        :type="ICON_TYPE[type] && ICON_TYPE[type].type"
        :color="ICON_TYPE[type] && ICON_TYPE[type].color"
      />
      <!-- 文字消息 -->
      <p v-if="!dangerouslyUseHTMLString" class="lt-message__content">{{ message }}</p>
      <!-- HTML 片段 -->
      <p v-else v-html="message" class="lt-message__content"></p>
      <!-- 自定义操作 -->
      <span
        v-if="appendText"
        class="lt-message__appent-text"
        @click.stop="handleClickAppendText"
      >{{ appendText }}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
import ICON_TYPE from './icon-type.js';
import Icon from '../../icon';
export default {
  name: 'Message',
  components: { Icon },
  data () {
    return {
      visible: false,
      closed: false,
      message: '',  // 消息体
      ICON_TYPE, // 消息icon
      duration: 3000,  // 消息停留时间
      type: 'default', // 消息类型(成功、警告、错误)
      theme: 'light',  // 主题颜色(亮色/暗色)
      customClass: '',  // 自定义类名
      timer: null,  // 消息消失定时器
      dangerouslyUseHTMLString: false,  // html片段
      appendText: '',  // 自定义操作文字
      onClickAppendText: null,  // 自定义操作方法
      onClick: null,  // 点击消息时的回调函数
      onClose: null,  // 消息关闭时的回调函数
    }
  },
  watch: {
    closed(v) {
      if (v) {
        this.visible = false
        this.onClose && this.onClose(this)
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  },
  methods: {
    // 点击消息体
    handleClick() {
      this.onClick && this.onClick()
    },
    // 消息延时关闭
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    // hover消息时清除定时器以停留消息
    clearTimer() {
      clearTimeout(this.timer)
    },
    // 自定义操作方法
    handleClickAppendText() {
      this.onClickAppendText && this.onClickAppendText()
    },
    // ESC手动关闭消息
    keydown(e) {
      if (e.keyCode === 27 && !this.closed) {
        this.close()
      }
    },
    // 关闭消息
    close() {
      this.closed = true
    },
    // 销毁消息组件
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
  }
}
</script>
