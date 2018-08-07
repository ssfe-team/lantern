<template>
  <!-- selector：list-->
  <div class="selector" v-click-outside="handleClose">
    <div class="selector__input">
      <input type="text" class="input__ipt" v-model="val" @click="selectShow = !selectShow" />
      <span class="input__icon" :class="inputIcon" @click="selectShow = !selectShow"></span>
    </div>
    <!-- option：list -->
    <select-option class="selector__option" v-show="selectShow" :list="list" @value="selectValueHandle"></select-option>
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
      val: '请选择'
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectValueHandle (value) {
      this.val = value
    },
    handleClose () {
      if(this.selectShow){
        this.selectShow = false
      }
    }
  },
  computed: {
    inputIcon () {
      return {
        'input__triangle--down': this.selectShow == false,
        'input__triangle--up': this.selectShow == true
      }
    }
  }
}
</script>

