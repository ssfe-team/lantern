<template>
  <div class="lt-color-predefine">
    <div class="current_color_button">{{currentColor}}</div>
    <div class="lt-color-predefine__color-con">
      <div class="lt-color-predefine__color-selector"
        v-for="(item, index) in hexColors"
        :key="colors[index]"
        :style="{'background-color': item}"
        @click="handleSelect(item)">
      </div>
    </div>
  </div>
</template>

<script>
  import Color from '../color';

  export default {
    props: {
      colors: { type: Array, required: true },
      color: { required: true }
    },
    data() {
      const hexColors =  this.colors.slice(0, 5)
      return {
        hexColors,
        currentColor: this.color.value
      };
    },
    methods: {
      handleSelect(color) {
        this.color.fromString(color);
        this.currentColor = color
      },
    },
    watch: {
      'color.value'(v) {
        this.currentColor = v
      }
    }
  };
</script>
<style lang="less" scoped>
.lt-color-predefine{
  display: flex;
  .current_color_button{
    width: 70px;
    height: 31px;
    background: #FFFFFF;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #1B2337;
    margin-right: 4px;
  }
  .lt-color-predefine__color-con{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    .lt-color-predefine__color-selector{
      width: 31px;
      height: 31px;
      border: 1px solid rgba(0,0,0,0.10);
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  
}
</style>