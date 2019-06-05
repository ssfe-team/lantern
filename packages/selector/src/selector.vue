<template>
  <div
    class="lt-selector"
    v-click-outside="clickClose"
  >
    <div
      class="selector-input"
      @mouseover="clearableShow"
      @mouseout="clearableHidden"
    >
      <input
        type="text"
        class="input-ipt"
        :placeholder="placeholder"
        v-model="selectedValue"
        :style="selectorStyle"
        @mouseover="hoverShow"
        @click="clickShow"
        readonly
      />
      <!-- 下拉图标 -->
      <lt-icon
        v-if="!clearIconShow"
        type="arrow-dropdown"
        color="rgba(0,0,0,0.56)"
        class="input-icon drop"
        @click="clickShow"
      ></lt-icon>
      <!-- 清除所选项图标 -->
      <lt-icon
        v-else
        type="ios-close"
        class="input-icon clear"
        color="rgba(0,0,0,0.56)"
        @click="clearValue"
      ></lt-icon>
    </div>
    <!-- 下拉列表 -->
    <ul
      v-show="optionShow"
      class="lt-option"
      :style="listStyle"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { directive as clickOutside } from 'v-click-outside-x'
export default {
  name: 'Selector',
  directives: { clickOutside },
  data () {
    return {
      selectedValue: '',
      optionShow: false,
      isHover: false //  select框正在被hover
    }
  },
  props: {
    defaultValue: {
      type: [Object, String]
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    selectorSize: {
      type: Object,
      default () {
        return {
          width: '190px',
          height: '40px'
        }
      }
    },
    // 交互方式
    trigger: {
      type: String,
      default: 'click'
    },
    // 是否可清除选项
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectorStyle () {
      return {
        ...this.selectorSize
      }
    },
    listStyle () {
      return {
        'width': this.selectorSize.width
      }
    },
    clearIconShow () {
      return this.clearable &&
        this.isHover &&
        this.selectedValue !== this.placeholder &&
        this.selectedValue !== ''
    }
  },
  watch: {
    defaultValue (v) {
      console.log(this.defaultValue, 22222)
      let value = ''
      value = typeof v === 'object' ? (v.label || v[this.suffix]) : v
      this.selectedValue = value
    }
  },
  beforeCreate () {
    this.$on('on-selected', (val) => {
      this.selectedValue = val
      this.optionShow = false
    })
  },
  mounted() {
    console.log(this.defaultValue, 11111)
    if (this.defaultValue) {
      let value = ''
      value = typeof this.defaultValue === 'object' ? (this.defaultValue.label || this.defaultValue[this.suffix]) : this.defaultValue
      this.selectedValue = value
    }
  },
  methods: {
    // 显示清除选项图标
    clearableShow () {
      this.isHover = true
    },
    // 隐藏清除选项图标
    clearableHidden () {
      this.isHover = false
    },
    // 清除所选项
    clearValue() {
      this.selectedValue = ''
      this.$emit('clear-value')
    },
    // 点击方式展开下拉列表
    clickShow () {
      if (this.trigger !== 'click') return
      this.optionShow = !this.optionShow
    },
    // 点击空白处关闭下拉列表
    clickClose () {
      if (this.optionShow) {
        this.optionShow = false
      }
    },
    // hover方式展开下拉列表
    hoverShow () {
      if (this.trigger !== 'hover') return
      this.optionShow = true
      this.isHover = true
    },

    // 暂时没想到解决办法  todo
    hoverClose () {
      if (this.trigger !== 'hover') return
      this.optionShow = false
    }
  }
}
</script>
