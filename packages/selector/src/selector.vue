<template>
  <div
    class="lt-selector"
    v-click-outside="clickCloseHandel"
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
        @mouseover="hoverShowHandel"
        @click="clickShowHandel"
      />
      <!-- 下拉图标 -->
      <lt-icon
        v-if="!clearIconShow"
        type="arrow-dropdown"
        color="rgba(0,0,0,0.7)"
        class="input-icon drop"
        @click="clickShowHandel"
      ></lt-icon>
      <!-- 清除所选项图标 -->
      <lt-icon
        v-else
        type="ios-close"
        class="input-icon clear"
        color="rgba(0,0,0,0.7)"
        @click="$emit('clear-value')"
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
import { directive as clickOutside } from 'v-click-outside-x';
export default {
  name: 'Selector',
  directives: { clickOutside },
  data () {
    return {
      optionShow: false,
      isHover: false //  select框正在被hover
    }
  },
  props: {
    selectedValue: {
      type: String
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
  watch: {
    selectedValue (v) {
      if (v) {
        this.optionShow = false
      }
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
        'width': this.selectorSize.widthw
      }
    },
    clearIconShow () {
      return this.clearable &&
        this.isHover &&
        this.selectedValue !== this.placeholder &&
        this.selectedValue !== ''
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
    // 点击方式展开下拉列表
    clickShowHandel () {
      if (this.trigger !== 'click') return
      this.optionShow = !this.optionShow
    },
    // 点击空白处关闭下拉列表
    clickCloseHandel () {
      if (this.optionShow) {
        this.optionShow = false
      }
    },
    // hover方式展开下拉列表
    hoverShowHandel () {
      if (this.trigger !== 'hover') return
      this.optionShow = true
      this.isHover = true
    },

    // 暂时没想到解决办法  todo
    hoverCloseHandel () {
      if (this.trigger !== 'hover') return
      this.optionShow = false
    }
  }
}
</script>
