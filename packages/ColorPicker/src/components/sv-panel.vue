<template>
  <div class="lt-color-svpanel"
      :style="{
        backgroundColor: background
      }">
    <div class="lt-color-svpanel__white"></div>
    <div class="lt-color-svpanel__black"></div>
    <div class="lt-color-svpanel__cursor"
      :style="{
        top: cursorTop + 'px',
        left: cursorLeft + 'px'
      }">
      <div></div>
    </div>
  </div>
</template>

<script>
  import draggable from '../draggable';

  export default {
    name: 'lt-sl-panel',

    props: {
      color: {
        required: true
      }
    },

    computed: {
      colorValue() {
        const hue = this.color.get('hue');
        const value = this.color.get('value');
        return { hue, value };
      }
    },

    watch: {
      colorValue() {
        this.update();
      }
    },

    methods: {
      update() {
        const saturation = this.color.get('saturation');
        const value = this.color.get('value');

        const el = this.$el;
        let { clientWidth: width, clientHeight: height } = el;

        this.cursorLeft = saturation * width / 100;
        this.cursorTop = (100 - value) * height / 100;

        this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)';
      },

      handleDrag(event) {
        const el = this.$el;
        const rect = el.getBoundingClientRect();

        let left = event.clientX - rect.left;
        let top = event.clientY - rect.top;
        left = Math.max(0, left);
        left = Math.min(left, rect.width);

        top = Math.max(0, top);
        top = Math.min(top, rect.height);

        this.cursorLeft = left;
        this.cursorTop = top;
        this.color.set({
          saturation: left / rect.width * 100,
          value: 100 - top / rect.height * 100
        });
      }
    },

    mounted() {
      draggable(this.$el, {
        drag: (event) => {
          this.handleDrag(event);
        },
        end: (event) => {
          this.handleDrag(event);
        }
      });

      // this.color.set({
      //   saturation: 100,
      // });
      this.update();
    },

    data() {
      return {
        cursorTop: 0,
        cursorLeft: 0,
        background: 'hsl(0, 100%, 50%)'
      };
    }
  };
</script>
<style lang="less" scoped>
.lt-color-svpanel{
  position: relative;
  height: 160px;
  border: 1px solid rgba(0,0,0,0.20);
  border-radius: 2px;
  margin-bottom: 14px;
  box-sizing: border-box;
  overflow: hidden;
  .lt-color-svpanel__white{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
  }
  .lt-color-svpanel__black{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg,#000,transparent);
  }
  .lt-color-svpanel__cursor{
    width: 14px;
    height: 14px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.40);
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
}
</style>
