<template>
  <div class="lt-color-dropdown">
    <sv-panel ref="sl" :color="color"></sv-panel>
    <div class="action-bar-con">
      <div class="absorb" @click="showAbsorbModal = true" v-if="absorbImgUrl"></div>
      <div class="slide-con">
        <hue-slider ref="hue" :color="color" />
        <alpha-slider style="margin-top: 8px" v-if="isShowAlpha" ref="alpha" :color="color"/>
      </div>
    </div>
    <template v-if="isShowPredefine">
      <predefine style="margin-left: 4px" :colors="predefine" :color="color" />
    </template>
    <div v-if="!isShowPredefine && !edit" class="current_color_button">{{customInput}}</div>
    <editInput v-if="edit" :color="color" />
    <absorb v-if="absorbImgUrl && showAbsorbModal" v-model="showAbsorbModal" :imgUrl="absorbImgUrl" :color="color" />
  </div>
</template>

<script>
  import Color from './color';

  import SvPanel from './components/sv-panel';
  import HueSlider from './components/hue-slider';
  import AlphaSlider from './components/alpha-slider';
  import Predefine from './components/predefine';
  import EditInput from './components/edit-input';
  import absorb from './components/absorb';

  import LtInput from '../../input';
  import LtButton from '../../button';

  export default {
    name: 'colorPicker',

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      Predefine,
      EditInput,
      absorb,
      // LtInput,
      // LtButton,
    },

    props: {
      value: {
        default: '#fffff',
        type: String
      },
      absorbImgUrl: {
        default: '',
        type: String
      },
      predefine: {
        default: ()=>[],
        type: Array
      },
      edit: {
        default: false,
        type: Boolean
      },
      // 暂不开放
      showAlpha: {
        default: false,
        type: Boolean
      },
      // 暂不开放
      colorFormat: {
        default: 'hex',
        type: String
      },
    },
    data() {
      const color = new Color({
        format: this.colorFormat
      });
      return {
        customInput: '',
        color,
        inputColor: '',
        showAbsorbModal: false
      };
    },

    computed: {
      isShowAlpha() {
        return this.showAlpha && !this.isShowPredefine && !this.edit
      },
      isShowPredefine() {
        return this.predefine.length > 0
      },
      currentColor() {
        return this.color.value
      }
    },
    watch: {
      value(val) {
        if (val && val !== this.color.value) {
          this.color.fromString(val);
        }
      },
      'color.value'(v) {
        this.$emit('input', v)
      },
      currentColor: {
        immediate: true,
        handler(val) {
          this.customInput = val;
        }
      }
    },
    mounted() {
      const value = this.value;
      if (value) {
        this.color.fromString(value);
      }
      this.$nextTick(() => {
        const { sl, hue, alpha } = this.$refs;
        sl && sl.update();
        hue && hue.update();
        alpha && alpha.update();
      });
    },
  };
</script>
<style lang='less' scoped>
.lt-color-dropdown{
  width: 272px;
  padding: 14px;
  box-sizing: border-box;
  background-color: #fff;
  background: #FFFFFF;
  box-shadow: 0 4px 10px 0 rgba(12,21,35,0.10);
  border-radius: 4px;
  .action-bar-con{
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    .absorb{
      width: 24px;
      height: 24px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABy0lEQVR4AWIY9kBG1SII0G1dQ00NBAEAxt0d4sn8Z7ju5hR3yvTNNTj0uNTUaEdNhbu7u7tUuPvsO3fdvff+ee9cvtmZSbIKkA0y0E14i8q23VEIrI8Y3wPB3ZJF/mXd7kqu4HD+uEXOMzDfDRN7MGzY1M488Qv58bQkLLpQ6MrzVGG7eDz9BnRb1diqVataKUDmyUBOI/oKy3kdn98oF49XIFoVbo6e3B2xQ+Vjeft/znGc1lUlgPieGvF7ssuWqi6/apHRWPZ34vH0JEwSxCR+NgQfPHh8F8mix+N//KeBOH2qAp1Tuh30seIODKo7rrnDRjkzIQN5yAUvezCBfOaIpw+mPUky6e88Z7xb3HGAUF92Noyjv9ITUJrIcmE4e2SVSLYDyGV9/PgOwnD2OjkTQE5r3tBA4Xh6NGMcyI264uz6joNzUDweDwno0vgm4UUh3Brm78cFZ4F/eif2x/Z04TjbHuMf/8Xbn/Hjx7cRirP49+9fSwnoRwYY7oBbSM+zA5Ed8SvXad1Ddfae4vKPxcRux9+/wQ1nYQ4Oqoh8SLuAfEq7ml2O43yDTT+WeRcm8iOG0zcK0PWDBzvtWogMNoj64PEDRHn/AT7VtBb33FzXAAAAAElFTkSuQmCC) center center no-repeat;
      background-size: 18px;
      margin-right: 10px;
      cursor: pointer;
    }
    .slide-con{
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-grow: 1;
    }
  }
  .current_color_button{
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #1B2337;
  }
  
}
</style>
