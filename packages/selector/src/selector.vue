<template>
  <!-- selector：list、trigger、clearable、size-->
  <div class="lt-selector" v-click-outside="handleClose">
    <div class="lt-selector__input" @mouseover="showClearable" @mouseout="closeClearable">
      <input type="text" class="lt-selector__input-ipt" v-model="val" :style="SelectorStyle" @mouseover="hoverShow" @click="selectShowHandel"/>
      <span v-if="!clearable || !hover || val == '请选择'" class="lt-selector__input-icon" :class="inputIcon" @click="selectShowHandel"></span>
      <span  @click="clearValueHandle">
        <lt-icon type="ios-close" v-if="clearable && hover && val != '请选择'" class="lt-selector__clear" color="#9B9B9B"></lt-icon>
      </span> 
    </div>
    <!-- option：list、size -->
    <select-option class="lt-selector__option" v-show="selectShow" :list="list" @value="selectValueHandle" :style="optionStyle"></select-option>
  </div>
</template>

<script>
import selectOption from './option'
import {directive as clickOutside} from 'v-click-outside-x';
export default {
  name: 'Selector',
  components: { selectOption },
  directives: { clickOutside }, 
  data () {
    return {
      selectShow: false,
      hover: false,
      val: '请选择'
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    trigger:{
      type: String,
      default: 'click'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: Object,
      default () {
        return {
          width: '200px',
          height: '30px'
        }
      }
    }
  },
  methods: {
    selectValueHandle (value) {
      this.val = value
      this.selectShow = false
    },
    clearValueHandle () {
      this.list.forEach(element => {
        element.isClick = false
      });
      this.val = '请选择'
    },
    handleClose () {
      if(this.selectShow){
        this.selectShow = false
      }
    },
    hoverShow () {
      this.hover = true
      if(this.trigger == 'hover'){
        this.selectShow = true
      } else {
        return
      }
    },
    showClearable () {
      this.hover = true
    },
    closeClearable () {
      this.hover = false
    },
    selectShowHandel () {
      if(this.trigger == 'click'){
        this.selectShow = !this.selectShow
      } else {
        return
      }
    },
    selectHandle () {
      this.$emit('select-value', this.val)   
    }
  },
  computed: {
    inputIcon () {
      return {
        'lt-input__triangle--down': this.selectShow == false,
        'lt-input__triangle--up': this.selectShow == true
      }
    },
    SelectorStyle () {
      return {
        ...this.size
      }
    },
    optionStyle () {
      return {
        width: this.size.width,
        'margin-left': '15px'
      }
    }
  }
}
</script>
<style>
  .lt-option{
    position: absolute;
    z-index: 900;
    background: #fff;
  }
  .lt-option__li--click{
    color: #5EA2FF !important;
  }
</style>