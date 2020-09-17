<template>
  <div class="lt-color-hue-slider">
    <div class="lt-color-hue-slider__bar" @click="handleClick" ref="bar"></div>
    <div class="lt-color-hue-slider__thumb"
      :style="{left: thumbLeft + 'px'}"
      ref="thumb"
    >
      <div class="lt-color-hue-slider__thumb__center" :style="{background: color.value}"></div>
    </div>
  </div>
</template>

<script>
  import draggable from '../draggable';

  export default {
    name: 'lt-color-hue-slider',

    props: {
      color: {
        required: true
      },
    },

    data() {
      return {
        thumbLeft: 0,
        thumbTop: 0,
        vertical: false,
        background: null
      };
    },

    computed: {
      hueValue() {
        const hue = this.color.get('hue');
        return hue;
      }
    },

    watch: {
      hueValue() {
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
        let hue;

        if (!this.vertical) {
          let left = event.clientX - rect.left;
          left = Math.min(left, rect.width - thumb.offsetWidth / 2);
          left = Math.max(thumb.offsetWidth / 2, left);

          hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
        } else {
          let top = event.clientY - rect.top;
          top = Math.min(top, rect.height - thumb.offsetHeight / 2);
          top = Math.max(thumb.offsetHeight / 2, top);

          hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
        }

        this.color.set('hue', hue);
        this.update()
      },

      getThumbLeft() {
        if (this.vertical) return 0;
        const el = this.$el;
        const hue = this.color.get('hue');

        if (!el) return 0;
        const thumb = this.$refs.thumb;
        return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
      },

      getThumbTop() {
        if (!this.vertical) return 0;
        const el = this.$el;
        const hue = this.color.get('hue');

        if (!el) return 0;
        const thumb = this.$refs.thumb;
        return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
      },

      update() {
        this.thumbLeft = this.getThumbLeft();
        this.thumbTop = this.getThumbTop();
      },
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
.lt-color-hue-slider{
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  .lt-color-hue-slider__bar{
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);
  }
  .lt-color-hue-slider__thumb{
    width: 14px;
    height: 14px;
    background: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.20);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.40);
    position: absolute;
    border-radius: 50%;
    top: -3px;
    transform: translateX(-50%);
    cursor: pointer;
    .lt-color-hue-slider__thumb__center{
      width: 4px;
      height: 4x;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
