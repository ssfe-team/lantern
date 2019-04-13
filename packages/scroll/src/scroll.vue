<template>
  <div class="lt-scroll__container">
    <div
      class="lt-scroll__content"
      ref="scrollContent"
      @scroll="handleScroll"
    >
      <slot @scrollReload="scrollReload" />
    </div>
    <div
      class="lt-scroll__track lt-scroll__track--right"
      v-if="hasRight"
      ref="scrollTrackRight"
      @mouseenter.stop="onMouseenterRight"
      @mouseleave.stop="onMouseleaveRight"
      :style="rightTrackStyles"
      :class="{'lt-scroll__track_active': showScrollRight, 'lt-scroll__track_hover': scrollRightHover}"
    >
      <div
        class="lt-scroll__bar lt-scroll__bar--right"
        :style="{'height': scrollRightHeight + 'px', 'top': scrollRightTop + 'px'}"
        @mousedown="moveInit"
      />
    </div>
    <div
      class="lt-scroll__track lt-scroll__track--bottom"
      v-if="hasBottom"
      ref="scrollTrackBottom"
      :class="{'lt-scroll__track_active': showScrollBottom}"
    >
      <div
        class="lt-scroll__bar lt-scroll__bar--bottom"
        :style="{'width': scrollBottomWidth + 'px', 'left': scrollBottomLeft + 'px'}"
      />
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'

export default {
  name: 'Scroll',
  data () {
    return {
      showScrollRight: false,
      scrollRightHeight: 0,
      scrollRightTop: 0,
      showScrollBottom: false,
      scrollBottomWidth: 0,
      scrollBottomLeft: 0,
      // wheel事件节流
      handleWheel: () => {},
      rightTimer: null,
      bottomTimer: null,
      // 判断是横向滚动还是纵向滚动
      scrollLeft: 0,
      scrollTop: 0,
      // 滚动条增加active状态
      scrollRightHover: false,
      scrollBottomHover: false,
      moveStart: {}
    }
  },
  props: {
    // 默认有右侧滚动条
    hasRight: {
      default: true,
      type: Boolean
    },
    // 默认无下方滚动条
    hasBottom: {
      default: false,
      type: Boolean
    },
    zIndex: {
      type: [Number, String],
      default: 10
    }
  },
  created () {
    this.handleScroll = throttle(this.onScroll, 16)
  },
  watch: {},
  computed: {
    rightTrackStyles () {
      return {
        zIndex: this.zIndex
      }
    }
  },
  methods: {
    hideRightScroll () {
      this.rightTimer = setTimeout(() => {
        this.showScrollRight = false
      }, 1000)
    },
    getContentPosition () {
      // 多出来的20是为了隐藏原来的滚动条
      let $content = this.$refs.scrollContent

      return {
        'contentWidth': $content.offsetWidth - 20,
        'contentHeight': $content.offsetHeight - 20,
        'childWidth': $content.scrollWidth - 20 + $content.offsetWidth - $content.clientWidth,
        'childHeight': $content.scrollHeight - 20 + $content.offsetHeight - $content.clientHeight,
        'scrollLeft': $content.scrollLeft,
        'scrollTop': $content.scrollTop
      }
    },
    onScroll (eve) {
      let { contentWidth, contentHeight, childWidth, childHeight, scrollTop } = this.getContentPosition()

      if (this.scrollTop !== scrollTop) {
        this.scrollTop = scrollTop
        this.showScrollRight = true
        // 隐藏bottom滚动条
        this.showScrollBottom = false
        // 滚动条相关属性
        this.scrollRightHeight = contentHeight / childHeight * contentHeight
        this.scrollRightTop = (this.scrollTop / childHeight) * contentHeight
        // 设置隐藏
        clearTimeout(this.rightTimer)
        this.hideRightScroll()
        // 设置回调
        this.$emit('on-scroll', {
          'fromTop': scrollTop,
          'fromBottom': childHeight - contentHeight - scrollTop,
        })
      }
    },
    onMouseenterRight (eve) {
      this.showScrollRight = true
      this.scrollRightHover = true
      clearTimeout(this.rightTimer)
    },
    onMouseleaveRight (eve) {
      if (this.scrollRightHover) {
        this.scrollRightHover = false
        this.hideRightScroll()
      }
    },
    moveInit (eve) {
      let mousemoveFun = throttle(this.onMouseMove, 16)
      document.addEventListener('mousemove', mousemoveFun)
      
      this.moveStart = {
        x: eve.clientX,
        y: eve.clientY
      }

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mousemoveFun)
      })
    },
    onMouseMove(eve) {
      let $content = this.$refs.scrollContent
      let current_x = eve.clientX,
        current_y = eve.clientY

      let { contentWidth, contentHeight, childWidth, childHeight } = this.getContentPosition()
      
      let move_y = current_y - this.moveStart.y
      this.moveStart.y = current_y

      let scrollTop = (this.scrollRightTop + move_y) / contentHeight * childHeight

      $content.scrollTop = scrollTop

      // 清空onScroll中设置的定时器
      clearTimeout(this.rightTimer)
    }
  },
  mounted () {
    // 初始化滚动条位置
    let { contentHeight, childHeight } = this.getContentPosition()

    this.scrollTop = this.$refs.scrollContent.scrollTop
    this.scrollLeft = this.$refs.scrollContent.scrollLeft

    this.scrollRightHeight = contentHeight / childHeight * contentHeight
    this.scrollRightTop = (this.scrollTop / childHeight) * contentHeight
  }
}
</script>
