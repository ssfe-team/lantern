<template>
  <div class="lt-color-alpha-slider" :class="{ 'is-vertical': vertical }">
    <div class="lt-color-alpha-slider__bar"
         @click="handleClick"
         ref="bar"
         :style="{
           background: background
         }">
    </div>
    <div class="lt-color-alpha-slider__thumb"
         ref="thumb"
         :style="{
           left: thumbLeft + 'px',
         }">
    </div>
  </div>
</template>

<script>
  import draggable from '../draggable';

  export default {
    name: 'lt-color-alpha-slider',

    props: {
      color: {
        required: true
      },
      vertical: Boolean
    },

    watch: {
      'color._alpha'() {
        this.update();
      },

      'color.value'() {
        this.update();
      }
    },

    methods: {
      handleClick(event) {
        const thumb = this.$refs.thumb;
        const target = event.target;

        if (target !== thumb) {
          this.handleDrag(event);
        }
      },

      handleDrag(event) {
        const rect = this.$el.getBoundingClientRect();
        const { thumb } = this.$refs;

        if (!this.vertical) {
          let left = event.clientX - rect.left;
          left = Math.max(thumb.offsetWidth / 2, left);
          left = Math.min(left, rect.width - thumb.offsetWidth / 2);
          this.color.set('alpha', Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100));
        } else {
          let top = event.clientY - rect.top;
          top = Math.max(thumb.offsetHeight / 2, top);
          top = Math.min(top, rect.height - thumb.offsetHeight / 2);
          this.color.set('alpha', Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 100));
        }
      },

      getThumbLeft() {
        if (this.vertical) return 0;
        const el = this.$el;
        const alpha = this.color._alpha;

        if (!el) return 0;
        const thumb = this.$refs.thumb;
        return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
      },

      getThumbTop() {
        if (!this.vertical) return 0;
        const el = this.$el;
        const alpha = this.color._alpha;

        if (!el) return 0;
        const thumb = this.$refs.thumb;
        return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
      },

      getBackground() {
        if (this.color && this.color.value) {
          const { r, g, b } = this.color.toRgb();
          return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
        }
        return null;
      },

      update() {
        this.thumbLeft = this.getThumbLeft();
        this.thumbTop = this.getThumbTop();
        this.background = this.getBackground();
      }
    },

    data() {
      return {
        thumbLeft: 0,
        thumbTop: '-3px',
        background: null
      };
    },

    mounted() {
      const { bar, thumb } = this.$refs;

      const dragConfig = {
        drag: (event) => {
          this.handleDrag(event);
        },
        end: (event) => {
          this.handleDrag(event);
        }
      };

      draggable(bar, dragConfig);
      draggable(thumb, dragConfig);
      this.update();
    }
  };
</script>
<style lang="less" scoped>
.lt-color-alpha-slider{
  position: relative;
  border-radius: 4px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==');
  .lt-color-alpha-slider__bar{
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);
  }
  .lt-color-alpha-slider__thumb{
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.20);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.40);
    background: #fff;
    position: absolute;
    border-radius: 50%;
    top: -3px;
    transform: translateX(-50%);
    cursor: pointer;
    &::after{
      content: '';
      width: 4px;
      height: 4px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background: #6c6c6c;
      
    }
  }
}
</style>