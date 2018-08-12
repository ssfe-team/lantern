<template>
  <!-- selector：list、trigger、clearable、size-->
  <div class="lt-selector" v-click-outside="handleClose">
    <div class="lt-selector__input" @mouseover="showClearable" @mouseout="closeClearable">
      <input v-if="trigger === 'click'" type="text" class="lt-selector__input-ipt" v-model="val" :style="SelectorStyle" 
             @click="selectShow = !selectShow"/>
      <input v-if="trigger === 'hover'" type="text" class="lt-selector__input-ipt" v-model="val" @mouseover="hoverShow" 
             :style="SelectorStyle"/>   
      <span v-if="trigger === 'click' && (!clearable || !hover || val == '请选择')" class="lt-selector__input-icon" :class="inputIcon" 
            @click="selectShow = !selectShow">
      </span>
      <span v-if="trigger === 'hover' && (!clearable || !hover || val == '请选择')" class="lt-selector__input-icon" :class="inputIcon"></span>      
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
      this.val = '请选择'
    },
    handleClose () {
      if(this.selectShow){
        this.selectShow = false
      }
    },
    hoverShow () {
      this.selectShow = true
      this.hover = true
    },
    showClearable () {
      this.hover = true
    },
    closeClearable () {
      this.hover = false
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