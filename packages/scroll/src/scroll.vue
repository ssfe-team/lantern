<template>
  <div class="lt-scroll__container">
    <div
      class="lt-scroll__content"
      ref="scrollContent"
      @scroll="handleScroll"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
    >
      <slot @scrollReload="scrollReload" />
    </div>
    <div
      class="lt-scroll__track lt-scroll__track--right"
      v-if="hasRight"
      ref="scrollTrackRight"
      :style="rightTrackStyles"
      :class="{'lt-scroll__track_active': showScrollRight}"
    >
      <div
        class="lt-scroll__bar lt-scroll__bar--right"
        :style="{'height': scrollRightHeight + 'px', 'top': scrollRightTop + 'px'}"
        @mouseenter="barOnMouseenter('right')"
        @mouseleave="barOnMouseleave('right')"
        @mousedown="moveInitRight"
      />
    </div>
    <div
      class="lt-scroll__track lt-scroll__track--bottom"
      v-if="hasBottom"
      ref="scrollTrackBottom"
      :style="rightTrackStyles"
      :class="{'lt-scroll__track_active': showScrollBottom}"
    >
      <div
        class="lt-scroll__bar lt-scroll__bar--bottom"
        :style="{'width': scrollBottomWidth + 'px', 'left': scrollBottomLeft + 'px'}"
        @mouseenter="barOnMouseenter('bottom')"
        @mouseleave="barOnMouseleave('bottom')"
        @mousedown="moveInitBottom"
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
      moveStart: {},
      hideTime: 500
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
      }, this.hideTime)
    },
    hideBottomScroll () {
      this.bottomTimer = setTimeout(() => {
        this.showScrollBottom = false
      }, this.hideTime)
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
      let { contentWidth, contentHeight, childWidth, childHeight, scrollLeft, scrollTop } = this.getContentPosition()

      let scrollDrag = false

      if (this.scrollTop !== scrollTop) {
        scrollDrag = true
        this.scrollTop = scrollTop
        this.showScrollRight = true
        // 隐藏bottom滚动条
        this.showScrollBottom = false
        // 滚动条相关属性
        this.scrollRightHeight = contentHeight / childHeight * contentHeight
        this.scrollRightTop = (this.scrollTop / childHeight) * contentHeight
        // 设置隐藏
        clearTimeout(this.rightTimer)
      }

      if(this.scrollLeft !== scrollLeft) {
        scrollDrag = true
        this.scrollLeft = scrollLeft
        this.showScrollBottom = true
        // 隐藏bottom滚动条
        this.showScrollRight = false
        // 滚动条相关属性
        this.scrollBottomWidth = contentWidth / childWidth * contentWidth
        this.scrollBottomLeft = (this.scrollLeft / childWidth) * contentWidth
        // 设置隐藏
        clearTimeout(this.bottomTimer)
      }

      if(scrollDrag) {
        // 设置回调
        this.$emit('on-scroll', {
          'fromTop': scrollTop,
          'fromBottom': childHeight - contentHeight - scrollTop,
          'fromLeft': scrollLeft,
          'fromRight': childWidth - contentWidth - scrollLeft,
        })
      }
    },
    onMouseenter () {
      if(this.hasRight) {
        this.showScrollRight = true
        clearTimeout(this.rightTimer)
      }
      if(this.hasBottom) {
        this.showScrollBottom = true
        clearTimeout(this.bottomTimer)
      }
    },
    onMouseleave () {
      this.hideRightScroll()
      this.hideBottomScroll()
    },
    // 鼠标进入滚动条清空隐藏状态
    barOnMouseenter (kind) {
      if(kind === 'right') clearTimeout(this.rightTimer)
      else if(kind === 'bottom') clearTimeout(this.bottomTimer)
    },
    barOnMouseleave () {
    },
    moveInitRight (eve) {
      let mousemoveFun = throttle(this.onMouseMoveRight, 16)
      document.addEventListener('mousemove', mousemoveFun)
      
      this.moveStart = {
        x: eve.clientX,
        y: eve.clientY,
        scrollRightTop: this.scrollRightTop
      }

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mousemoveFun)
      })
    },
    onMouseMoveRight(eve) {
      let $content = this.$refs.scrollContent
      let current_x = eve.clientX,
        current_y = eve.clientY

      let { contentWidth, contentHeight, childWidth, childHeight } = this.getContentPosition()
      
      let move_y = current_y - this.moveStart.y

      let scrollTop = (this.moveStart.scrollRightTop + move_y) / contentHeight * childHeight

      $content.scrollTop = scrollTop

      // 清空onScroll中设置的定时器
      clearTimeout(this.rightTimer)
    },
    moveInitBottom (eve) {
      let mousemoveFun = throttle(this.onMouseMoveBottom, 16)
      document.addEventListener('mousemove', mousemoveFun)
      
      this.moveStart = {
        x: eve.clientX,
        y: eve.clientY,
        scrollBottomLeft: this.scrollBottomLeft
      }

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mousemoveFun)
      })
    },
    onMouseMoveBottom(eve) {
      let $content = this.$refs.scrollContent
      let current_x = eve.clientX,
        current_y = eve.clientY

      let { contentWidth, contentHeight, childWidth, childHeight } = this.getContentPosition()
      
      let move_x = current_x - this.moveStart.x

      let scrollLeft = (this.moveStart.scrollBottomLeft + move_x) / contentWidth * childWidth

      $content.scrollLeft = scrollLeft

      // 清空onScroll中设置的定时器
      clearTimeout(this.bottomTimer)
    }
  },
  mounted () {
    // 初始化滚动条位置
    let { contentHeight, childHeight, contentWidth, childWidth } = this.getContentPosition()

    this.scrollTop = this.$refs.scrollContent.scrollTop
    this.scrollLeft = this.$refs.scrollContent.scrollLeft

    // 纵向滚动条
    this.scrollRightHeight = contentHeight / childHeight * contentHeight
    this.scrollRightTop = (this.scrollTop / childHeight) * contentHeight

    // 横向滚动条
    this.scrollBottomWidth = contentWidth / childWidth * contentWidth
    this.scrollBottomLeft = (this.scrollLeft / childWidth) * contentWidth
  }
}
</script>
