<!--Created by suti(https://github.com/suti), modified by Chuanfeng(https://github.com/ChuanfengZhang)-->
<template>
    <div ref="dropdown"
         class="lt-select"
         :class="{poped: currentVisible, above: isAbove}"
         @click="handleClick"
         @mouseleave="handleMouseleave"
    >
        <div class="lt-select__link"
             :style="itemStyle"
             @mouseenter="handleMouseenter"
        >
            <span class="lt-select__selected-text" :title="da.sel">{{da.sel}}</span>
            <lt-icon type="ios-arrow-down" class="lt-select__icon-dropdown"></lt-icon>
        </div>
        <lt-collapse-transition>
            <div class="lt-select__list"
                 v-show="currentVisible"
                 :style="{maxHeight: height + 'px', top: dropDownTop}"
            >
                <div
                        class="lt-select__list-option"
                        v-for="(item, index) in da.opt"
                        :key="index"
                        :class="{disabled:item.dis, selected:item.sel}"
                        :style="itemStyle"
                        @click.stop="handleItemClick(item, index)"
                >
                    <span class="lt-select__option-title" :title="item.des">{{item.des}}</span>
                    <lt-icon v-if="item.sel" type="tickcross" class="lt-select__icon-dropdown"></lt-icon>
                </div>
            </div>
        </lt-collapse-transition>
    </div>
</template>
<script>
import LtCollapseTransition from 'lantern/src/transitions/collapse-transition'

export default {
  name: 'Select',
  data() {
    return {
      da: {
        // 处理后的数据
        sel: '请选择',
        opt: []
      },
      currentVisible: false, // 是否显示列表
      isAbove: false // 是否显示在下拉框的上方
    }
  },
  props: {
    dData: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    trigger: {
      // 显示列表的触发方式
      type: String,
      default: 'hover'
    },
    size: {
      // 下拉框高度
      type: Number,
      default: 28
    },
    height: {
      // 自定义下拉列表高度，超出显示滚动条
      type: Number,
      default: 250
    }
  },
  computed: {
    dropDownTop() {
      let height = this.dData.length * this.size
      height = height < this.height ? height : this.height
      let top = this.isAbove ? -(height + 2) : this.size + 2
      return top + 'px'
    },
    itemStyle() {
      return {
        height: this.size + 'px',
        'line-height': this.size + 'px',
        'font-size': this.fontSize + 'px'
      }
    },
    fontSize() {
      return this.size / (28 / 12)
    }
  },
  created() {
    this.dealData()
  },
  watch: {
    dData() {
      this.dealData()
    },
    currentVisible(v) {
      if (v) {
        let bottom = this.$refs.dropdown.getBoundingClientRect().bottom
        this.isAbove = document.body.clientHeight - bottom < this.height
      }
    }
  },
  methods: {
    // 处理传入数据
    dealData() {
      Object.assign(this.da.opt, this.dData)
      for (let i = 0, len = this.da.opt.length; i < len; i++) {
        this.da.opt[i].des = this.da.opt[i].des ? this.da.opt[i].des : '未命名'

        if (this.da.opt[i].sel) {
          this.da.sel = this.da.opt[i].des
        }
      }
    },
    handleClick() {
      if (this.trigger !== 'click') {
        return false
      }
      this.currentVisible = !this.currentVisible
    },
    handleMouseenter() {
      if (this.trigger !== 'hover') {
        return false
      }
      this.currentVisible = true
    },
    handleMouseleave() {
      if (this.trigger !== 'hover') {
        return false
      }
      this.currentVisible = false
    },
    // 处理列表项点击
    handleItemClick(item, index) {
      if (item.dis) return
      let arr = []
      for (let i = 0; i < this.da.opt.length; i++) {
        arr[i] = this.da.opt[i]
        arr[i].sel = i === index
      }
      this.currentVisible = false
      this.$emit('select', this.da.opt[index])
      this.$set(this.da, 'opt', arr)
      this.$set(this.da, 'sel', arr[index].des)
    }
  },
  components: {
    LtCollapseTransition
  }
}
</script>
