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
      scrollBottomHover: false
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
  mounted () {
    this.scrollTop = this.$refs.scrollContent.scrollTop
    this.scrollLeft = this.$refs.scrollContent.scrollLeft
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
    onScroll (eve) {
      let $content = this.$refs.scrollContent
      // 多出来的20是为了隐藏原来的滚动条
      let contentHeight = $content.offsetHeight - 20
      let contentWidth = $content.offsetWidth - 20
      let childHeight = $content.scrollHeight - 3
      // console.log($content.scrollHeight, $content.offsetHeight, $content.clientHeight)
      let childWidth = $content.scrollWidth - 20

      if (this.scrollTop !== $content.scrollTop) {
        this.scrollTop = $content.scrollTop
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
          'formBottom': childHeight - contentHeight - $content.scrollTop
        })
      }

      if (this.scrollLeft !== $content.scrollLeft) {
        this.scrollLeft = $content.scrollLeft
        this.showScrollBottom = true
        // 隐藏right滚动条
        this.showScrollRight = false
        // 滚动条相关属性
        this.scrollBottomWidth = contentWidth / childWidth * contentWidth
        this.scrollBottomLeft = this.scrollLeft / childWidth * contentWidth
        // 设置隐藏
        clearTimeout(this.bottomTimer)
        this.bottomTimer = setTimeout(() => {
          this.showScrollBottom = false
        }, 1000)
      }
    },
    onMouseenterRight (eve) {
      if (this.showScrollRight) {
        this.scrollRightHover = true
        clearTimeout(this.rightTimer)
      }
    },
    onMouseleaveRight (eve) {
      if (this.scrollRightHover) {
        this.scrollRightHover = false
        this.hideRightScroll()
      }
    }
  }
}
</script>
