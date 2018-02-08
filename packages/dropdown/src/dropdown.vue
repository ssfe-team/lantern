<!--Created by suti(https://github.com/suti), modified by Chuanfeng(https://github.com/ChuanfengZhang)-->
<template>
    <div ref="dropdown"
         class="drop-down"
         :class="{poped: currentVisible, above: isAbove}"
         @click="handleClick"
         @mouseenter="handleMouseenter"
         @mouseleave="handleMouseleave"
    >
        <div class="drop-down-sel" :style="dropDownStyle">
            <span :title="da.sel">{{da.sel}}</span>
        </div>
        <transition name="dropdown-fade">
            <div class="drop-down-list"
                 v-show="currentVisible"
                 :style="{maxHeight: height + 'px', top: dropDownDropTop}"
            >
                <div
                        class="drop-down-list-option"
                        v-for="(item, index) in da.opt"
                        :key="index"
                        :class="{disabled:item.dis, selected:item.sel}"
                        @click.stop="handleItemClick(item, index)"
                >
                    <span class="option-title" :title="item.des">{{item.des}}</span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
  export default {
    name: 'Dropdown',
    data () {
      return {
        da: { // 处理后的数据
          sel: '',
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
      trigger: { // 显示列表的触发方式
        type: String,
        default: 'hover'
      },
      size: {
        type: [String, Number],
        default: 'small'
      },
      height: { // 自定义下拉列表高度，超出显示滚动条
        type: Number,
        default: 250
      }
    },
    computed: {
      dropDownDropTop() {
        let height =  this.isAbove ? -(this.height + 2) : 32
        return height + 'px'
      },
      dropDownStyle () {
        switch (this.size) {
          case 'small':
            return {}
          case 32:
          case '32':
            return {
              'height': 32 + 'px',
              'line-height': 32 + 'px',
              'font-size': 14 + 'px'
            }
        }
      }
    },
    created () {
      this.dealData()
    },
    watch: {
      dData () {
        this.dealData()
      },
      currentVisible(v) {
        if (v) {
          let bottom = this.$refs.dropdown.getBoundingClientRect().bottom
          this.isAbove = (document.body.clientHeight - bottom) < this.height

        }
      }
    },
    methods: {
      // 处理传入数据
      dealData () {
        Object.assign(this.da.opt, this.dData)
        for (let i = 0, len = this.dData.length; i < len; i++) {
          if (i === 0) {
            this.da.sel = this.da.opt[0].des
          }
          this.da.opt[i].des = this.da.opt[i].des ? this.da.opt[i].des : '未命名'
        }
      },
      handleClick () {
        if (this.trigger !== 'click') {
          return false
        }
        this.currentVisible = !this.currentVisible
      },
      handleMouseenter () {
        if (this.trigger !== 'hover') {
          return false
        }
        this.currentVisible = true
      },
      handleMouseleave () {
        if (this.trigger !== 'hover') {
          return false
        }
        this.currentVisible = false
      },
      // 处理列表项点击
      handleItemClick (item, index) {
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
    }
  }
</script>

<style lang="less" scoped>
    .dropdown-fade-enter-active, .dropdown-fade-leave-active {
        transition: opacity .5s;
    }

    .dropdown-fade-enter, .dropdown-fade-leave-active {
        opacity: 0;
    }
</style>
