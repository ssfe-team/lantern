<template>
<!--   <div  @scroll.native=""
        class="scroll-wrap"
        ref="wrap"
        :style="{
          'padding-right': style.barWidth + 'px',
          'padding-bottom': style.barHeight + 'px'
        }"
  > -->
    <div  class="scroll-container"
          ref="wrap"
          @scroll.stop=""
          :style="{
            'width': style.wrapWidth,
            'height': style.wrapHeight,
            'padding-right': style.barWidth + 'px',
            'padding-bottom': style.barHeight + 'px'
          }"
    >
      <div class="scroll-content" ref="inner"
          @scroll.stop="setScrollLeftTop"
      >
        <slot
          @scrollReload="scrollReload"
        ></slot>
      </div>
      <div  class="scroll-track scroll-right"
            v-if="rightBarShow"
            :style="{
              'background-color': style.trackColor,
              'width': style.barWidth + 'px',
              'bottom': 0 + 'px',
              'zIndex': style.zIndex,
              'border-radius': style.barWidth / 2 + 'px'
            }"
            :class="{'auto-hide': style.autoHide && !barMousedown}"
            @mousedown.stop="rightMousedown"
      >
        <div  class="scroll-bar"
              :class="{'right-bar-active': rightActive}"
              :style="{
              'background-color': style.barColor,
              'width': style.barWidth + 'px',
              'opacity': style.barOpacityInactive,
              'height': rightBarHeight + 'px',
              'top': barTop + 'px'
              }"
        ></div>
      </div>
      <div  class="scroll-track scroll-bottom"
            v-if="bottomBarShow"
            :style="{
              'background-color': style.trackColor,
              'height': style.barHeight + 'px',
              'right': 0 + 'px',
              'zIndex': style.zIndex,
              'border-radius': style.barHeight / 2 + 'px'
            }"
            :class="{'auto-hide': style.autoHide && !barMousedown}"
            @mousedown.stop="bottomMousedown"
      >
        <div  class="scroll-bar"
              :class="{'bottom-bar-active': bottomActive}"
              :style="{
                'background-color': style.barColor,
                'width': bottomBarWidth + 'px',
                'opacity': style.barOpacityInactive,
                'height': style.barHeight + 'px',
                'left': barLeft + 'px'
              }"
        ></div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: 'Scroll',
  data () {
    return {
      // 滚动条默认样式
      style: {
        barColor: '#959595',
        barWidth: 8,
        barHeight: 8,
        barOpacityInactive: 0.3,
        trackColor: '#eee',
        zIndex: 'auto',
        wrapWidth: '100%',
        wrapHeight: '100%',
        autoHide: true
      },
      // 是否显示右侧滚动条
      rightBarShow: false,
      // 是否显示下侧滚动条
      bottomBarShow: false,
      // 滚动条上触发mousedown事件
      barMousedown: false,
      // 右侧滚动条激活状态
      rightActive: false,
      // 下侧滚动条激活状态
      bottomActive: false,
      activeClock: null,
      activeClockDelay: 800,

      wrapSize: {},

      // 容器的宽高
      wrapHeight: 0,
      wrapWidth: 0,
      // 内容的宽高
      innerHeight: 0,
      innerWidth: 0,
      // 滚动条的宽高
      rightBarHeight: 0,
      bottomBarWidth: 0,

      // 内容的滚动距离
      scrollTop: 0,
      scrollLeft: 0
    }
  },
  props: {
    barStyle: {
      required: false,
      type: Object
    }
  },
  mounted() {
    console.log(this.barStyle)
    Object.assign(this.style, this.barStyle);
    this.$nextTick(() => {
      this.scrollReload();
    });
  },
  watch: {

  },
  computed: {
    barTop() {
      let percent = this.scrollTop / (this.innerHeight - this.wrapHeight);
      return (this.wrapHeight - this.rightBarHeight) * percent;
    },
    barLeft() {
      let percent = this.scrollLeft / (this.innerWidth - this.wrapWidth);
      return (this.wrapWidth - this.bottomBarWidth) * percent;
    }
  },
  methods: {
    scrollReload() {
      this.getPercent();
    },
    getPercent() {
      const wrapNode = this.$refs.wrap;
      const slotnode = this.$refs.inner;
      if(this.barStyle.wrapWidth.includes('px')) {
        this.wrapWidth = parseInt(this.barStyle.wrapWidth) - this.style.barWidth;
      } else {
        this.wrapWidth = wrapNode.clientHeight - this.style.barWidth;
      }
      if(this.barStyle.wrapHeight.includes('px')) {
        this.wrapHeight = parseInt(this.barStyle.wrapHeight) - this.style.barHeight;
      } else {
        this.wrapHeight = wrapNode.clientHeight - this.style.barHeight;
      }
      // this.wrapHeight = wrapNode.clientHeight - this.style.barHeight;
      // this.wrapWidth = wrapNode.clientWidth - this.style.barWidth;
      this.innerHeight = slotnode.scrollHeight;
      this.innerWidth = slotnode.scrollWidth;
      if(this.wrapHeight < this.innerHeight) {
        this.rightBarHeight = this.wrapHeight / this.innerHeight * this.wrapHeight;
        this.rightBarShow = true;
      }
      if(this.wrapWidth < this.innerWidth) {
        this.bottomBarWidth = this.wrapWidth / this.innerWidth * this.wrapWidth;
        this.bottomBarShow = true;
      }
    },
    setScrollLeftTop(eve) {
      let node = eve ? eve.target : this.$refs.inner;
      if(this.scrollTop != node.scrollTop) {
        this.rightActive = true;
      }
      if(this.scrollLeft != node.scrollLeft) {
        this.bottomActive = true;
      }
      this.scrollLeft = node.scrollLeft;
      this.scrollTop = node.scrollTop;
      if(!this.barMousedown) {
        clearTimeout(this.activeClock);
        this.activeClock = setTimeout(() => {
          this.rightActive = false;
          this.bottomActive = false;
        }, this.activeClockDelay);
      }
    },
    rightMousedown(eve) {
      eve.preventDefault();
      let startY = eve.clientY,
          nowY,
          move,
          newTop,
          percent,
          scrollTop,
          oldTop = this.barTop;
      let nodeMousemove = (eve) => {
        nowY = eve.clientY;
        move = nowY - startY;
        newTop = oldTop + move;
        newTop = newTop < 0 ? 0 : newTop;
        newTop = newTop > this.wrapHeight - this.rightBarHeight ? this.wrapHeight - this.rightBarHeight : newTop;
        percent = newTop / (this.wrapHeight - this.rightBarHeight);
        scrollTop = (this.innerHeight - this.wrapHeight) * percent;
        this.$refs.inner.scrollTop = scrollTop;
        this.scrollTop = scrollTop;
      }

      this.barMousedown = true;
      clearTimeout(this.activeClock);
      this.rightBarShow = true;

      let nodeMouseup = () => {
        window.removeEventListener('mousemove', nodeMousemove);
        window.removeEventListener('mouseup', nodeMouseup);
        this.barMousedown = false;
        this.activeClock = setTimeout(() => {
          this.rightActive = false;
        }, this.activeClockDelay);
      }

      window.addEventListener('mousemove', nodeMousemove);
      window.addEventListener('mouseup', nodeMouseup);
    },
    bottomMousedown(eve) {
      eve.preventDefault();
      let startX = eve.clientX,
          nowX,
          move,
          newLeft,
          percent,
          scrollLeft,
          oldLeft = this.barLeft;
      let nodeMousemove = (eve) => {
        nowX = eve.clientX;
        move = nowX - startX;
        newLeft = oldLeft + move;
        newLeft = newLeft < 0 ? 0 : newLeft;
        newLeft = newLeft > this.wrapWidth - this.bottomBarWidth ? this.wrapWidth - this.bottomBarWidth : newLeft;
        percent = newLeft / (this.wrapWidth - this.bottomBarWidth);
        scrollLeft = (this.innerWidth - this.wrapWidth) * percent;
        this.$refs.inner.scrollLeft = scrollLeft;
        this.scrollLeft = scrollLeft;
      }

      this.barMousedown = true;
      clearTimeout(this.activeClock);
      this.bottomActive = true;

      let nodeMouseup = () => {
        window.removeEventListener('mousemove', nodeMousemove);
        window.removeEventListener('mouseup', nodeMouseup);
        this.barMousedown = false;
        this.activeClock = setTimeout(() => {
          this.bottomActive = false;
        }, this.activeClockDelay);
      }

      window.addEventListener('mousemove', nodeMousemove);
      window.addEventListener('mouseup', nodeMouseup);
    }
  }
}
</script>

<style lang="less" scoped>
// .scroll-wrap {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   position: relative;
  .scroll-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
    .scroll-content {
      // border-right: 20px solid transparent;
      // border-bottom: 20px solid transparent;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      padding: 0px;
      // padding-top: 1px;
      // padding-bottom: 1px;
      &::-webkit-scrollbar {
        display: none;
      }
      &::-moz-scrollbar {
        display: none;
      }
      &::-o-scrollbar {
        display: none;
      }
    }
    .scroll-track {
      background-color: #eee;
      opacity: 1;
      position: absolute;
      transition: opacity .34s ease-out;
      -webkit-transition: opacity .34s ease-out;
      &[class~="auto-hide"] {
        opacity: 0;
      }
      .scroll-bar {
        opacity: 0.3;
        position: relative;
        display: block;
        cursor: pointer;
        border-radius: inherit;
        background-color: #959595;
        transition: opacity .34s ease-out;
        -webkit-transition: opacity .34s ease-out;
        -moz-transition: opacity .34s ease-out;
        -o-transition: opacity .34s ease-out;
      }
    }
    &:hover {
      .scroll-track {
        opacity: 1;
      }
    }
    .scroll-right {
      width: 6px;
      top: 0;
      bottom: 0;
      right: 0;
      .scroll-bar {
        width: 6px;
        transform: translateY(0%);
        &:hover {
          opacity: 0.8 !important;
        }
        &[class~="right-bar-active"] {
          opacity: 0.8 !important;
        }
      }
    }
    .scroll-bottom {
      height: 6px;
      left: 0;
      right: 0;
      bottom: 0;
      .scroll-bar {
        height: 6px;
        transform: translateX(0%);
        &:hover {
          opacity: 0.8 !important;
        }
        &[class~="bottom-bar-active"] {
          opacity: 0.8 !important;
        }
      }
    }
  }
// }
</style>