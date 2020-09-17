<template>
  <div>
    <div class="current_color_input_con">
      <input class="current_color_input main_color" type="text" v-model="inputColor" @blur="update">
      <div class="current_color_compose rgbCon" v-if="type == 'rgb'">
        <input class="current_color_input" type="text" v-model.number="rgbColor.r" @blur="computeHex">
        <input class="current_color_input" type="text" v-model.number="rgbColor.g" @blur="computeHex">
        <input class="current_color_input" type="text" v-model.number="rgbColor.b" @blur="computeHex">
      </div>
      <div class="current_color_compose cmkyCon" v-else>
        <input class="current_color_input" type="text" v-model="cmykColor.c" @blur="computeHex">
        <input class="current_color_input" type="text" v-model="cmykColor.m" @blur="computeHex">
        <input class="current_color_input" type="text" v-model="cmykColor.y" @blur="computeHex">
        <input class="current_color_input" type="text" v-model="cmykColor.k" @blur="computeHex">
      </div>
    </div>
    <div class="current_color_type">
      <div class="current_color_type_title">HEX</div>
      <div style="position: relative">
        <div class="current_color_type_con">
          <div class="current_color_type_con_left" @click.stop="showColorTypeDown = !showColorTypeDown"></div>
          <div class="current_color_type_con_right">
            <template v-if="type == 'rgb'">
              <span class="rgb_item">R</span>
              <span class="rgb_item">G</span>
              <span class="rgb_item">B</span>
            </template>
            <template v-else>
              <span class="cmky_item">C</span>
              <span class="cmky_item">M</span>
              <span class="cmky_item">Y</span>
              <span class="cmky_item">K</span>
            </template>
          </div>
        </div>
        <div v-if="showColorTypeDown" v-click-outside="closeDown" class="current_color_type_con_down">
          <div @click="toggleColorType('rgb')" :class="{active: type == 'rgb'}">RGB</div>
          <div @click="toggleColorType('cmyk')" :class="{active: type == 'cmyk'}">CMYK</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {directive as clickOutside} from 'v-click-outside-x';
import Color from '../color';
export default {
  data() {
    const inputColor = this.color.value
    const rgbColor =  this.hexToRgb(inputColor)
    const cmykColor =  this.hexToCMYK(inputColor)
    return {
      inputColor,
      rgbColor,
      cmykColor,
      type: 'rgb',
      showColorTypeDown: false
    }
  },
  props: {
    color: { required: true }
  },
  directives: { clickOutside },
  watch: {
    'color.value'(v) {
      this.inputColor = v
      this.rgbColor = this.hexToRgb(v)
      this.cmykColor = this.hexToCMYK(v)
    },
  },
  methods: {
    hexToRgb(hex) {
      hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16)
      return { r: hex >> 16, g: (hex & 0x00ff00) >> 8, b: hex & 0x0000ff }
    },
    rgbToHex({r, g, b}) {
      let hex = [r.toString(16), g.toString(16), b.toString(16)]
      Array.prototype.map.call(hex, function(val, nr) {
        if (val.length == 1) {
          hex[nr] = '0' + val
        }
      })
      return '#' + hex.join('').toUpperCase()
    },
    hexToCMYK (hex) {
      var computedC = 0;
      var computedM = 0;
      var computedY = 0;
      var computedK = 0;

      hex = (hex.charAt(0)=="#") ? hex.substring(1,7) : hex;

      // if (hex.length != 6) {
      //   alert ('Invalid length of the input hex value!');   
      //   return; 
      // }
      // if (/[0-9a-f]{6}/i.test(hex) != true) {
      //   alert ('Invalid digits in the input hex value!');
      //   return; 
      // }

      var r = parseInt(hex.substring(0,2),16); 
      var g = parseInt(hex.substring(2,4),16); 
      var b = parseInt(hex.substring(4,6),16); 

      // BLACK
      if (r==0 && g==0 && b==0) {
        computedK = 1;
        return {
          c: 0,
          m: 0,
          y: 0,
          k: 1,
        };
      }

      computedC = 1 - (r/255);
      computedM = 1 - (g/255);
      computedY = 1 - (b/255);

      var minCMY = Math.min(computedC,Math.min(computedM,computedY));

      computedC = (computedC - minCMY) / (1 - minCMY) ;
      computedM = (computedM - minCMY) / (1 - minCMY) ;
      computedY = (computedY - minCMY) / (1 - minCMY) ;
      computedK = minCMY;

      return {
        c: computedC,
        m: computedM,
        y: computedY,
        k: computedK,
      }
    },
    cmykToHex({c, m, k, y}) {
      const r = 255 * (1 - c) * (1 - k);
      const g = 255 * (1 - m) * (1 - k);
      const b = 255 * (1 - y) * (1 - k);
      return this.rgbToHex({r, g, b})
    },
    computeOther() {
      this.rgbColor = this.hexToRgb(this.inputColor)
      this.color.fromString(this.inputColor);
    },
    computeHex() {
      if (this.type === 'rgb') {
        this.inputColor = this.rgbToHex(this.rgbColor)
      } else {
        this.inputColor = this.cmykToHex(this.cmykColor)
      }
      this.color.fromString(this.inputColor.toUpperCase()) 
    },
    update() {
      this.color.fromString(this.inputColor.toUpperCase()) 
    },
    toggleColorType(v) {
      this.type = v
      this.showColorTypeDown = false
    },
    closeDown() {
      this.showColorTypeDown = false
    }
  }
}
</script>
<style lang="less" scoped>
.current_color_input_con{
  display: flex;
  .current_color_input{
    outline: none;
    background: #FFFFFF;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    line-height: 24px;
    box-sizing: border-box;
    &:focus, &:hover{
      box-shadow: 0 4px 10px 0 rgba(12,21,35,0.10);
      border: 1px solid #0773FC;
    }
    &.main_color{
      width: 72px;
      font-size: 12px;
      color: #1B2337;
      text-align: center;
    }
  }
  .current_color_compose{
    flex-grow: 1;
    margin-left: 12px;
    display: flex;
    justify-content: space-between;
    .current_color_input{
      text-align: center;
    }
    &.rgbCon{
      .current_color_input{
        width: 48px;
        text-align: center;
      }
    }
    &.cmkyCon{
      .current_color_input{
        width: 34px;
        text-align: center;
      }
    }
    
  }
}
.current_color_type{
  margin-top: 8px;
  display: flex;
  .current_color_type_title{
    flex-grow: 1;
    font-size: 12px;
    line-height: 20px;
    color: #1B2337;
    margin-right: 10px;
    text-align: right;
  }
  .current_color_type_con{
    position: relative;
    width: 186px;
    display: flex;
    align-items: center;
    align-items: center;
    background: #F3F4F9;
    border-radius: 2px;
    overflow: hidden;
    .current_color_type_con_left{
      border-right: 1px solid rgba(27,35,55,0.10);
      height: 20px;
      width: 24px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAABOUlEQVQoFWNkAAJ1dWve3zycTCA2seDumd2fGBkZ/zPKqJiv/v+fIYRYjTB1jAyMl8UF9IyZgJr1YIKk0P8ZGTQ/f77Fz8TIzFAI1PifFM0gtUz/GRpu3TrwhunJrZPbGBgZ+0gzgHFvcqxHO0gPI4gwNk5jffnx0pH///+bgfj4AeMrVg4O/QdXD7wAqQMbAGLIq9sp/v3z8zzQL/wgPg7wH+hnj8d3ju2CycOj7uHNQ/f/MzKlwiSw0YyMTJ3ImkFqmJEVfn735BqfkKwEUMwEWRzMZmQ8pirDEffgwYN/yHJwF8AEWWU5CkFxDOODaCD/PTs7S+SBAwf+IItD5NBFgHwFNUuN3//+nQFGLjdImomBKfDx3eMbsChF9QJMwYe3T94ICMvdB/ItmRgYOx/fPTEbJodOAwBtM1z23lzgfwAAAABJRU5ErkJggg==') no-repeat center center;
      background-size: 12px;
      cursor: pointer;
    }
    .current_color_type_con_right{
      display: flex;
      flex-grow: 1;
      justify-content: space-around;
      span{
        display: block;
        text-align: center;
        &.rgb_item{
          width: 33.333333%;
        }
        &.cmky_item{
          width: 25%;
        }
      }
    }
  }
  .current_color_type_con_down{
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 4px 10px 0 rgba(12,21,35,0.10);
    border-radius: 2px;
    overflow: hidden;
    font-size: 12px;
    line-height: 24px;
    padding: 5px 0;
    &>div{
      padding-left: 23px;
      cursor: pointer;
      &.active{
        color: #0773FC;
      }
    }
  }
}
</style>