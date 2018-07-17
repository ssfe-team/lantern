<template>
  <div class="waterfall" :style="{width: waterfallWidth + 'px', height:maxHeight + 'px'}">
    <div
        class="waterfall-item"
        v-for="(item, index) in showData"
        :key="index"
    >
      <slot
            :listData="item"
            :index="index"
      >
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showData: null, // 经处理后的数据
      colHeights: null, // 列高度
      maxHeight: 0
    }
  },
  props: {
    maxColNum: {
      type: Number,
      default: 3
    },
    propData: {
      // 未经处理的数据
      type: Array,
      required: true,
      // 示例
      default: () => {
        return []
      }
    },
    propRatio: {
      // 根据宽高比例决定默认占几列，大于arr[1]占满，小于arr[0]占一列
      type: Array,
      default() {
        return [2, 3]
      }
    },
    maxDiff: {
      // 每列允许的最大空白高度
      type: Number,
      default: 50
    },
    minHeight: {
      // 每个元素的最小高度
      type: Number,
      default: 18
    },
    // 元素边距
    boxRect: {
      type: Object,
      default() {
        return {
          bottom: 8,
          right: 8
        }
      }
    },
    // 瀑布流宽度
    waterfallWidth: {
      type: [Number, String],
      default: 600
    }
  },
  computed: {
    colWidth() {
      return (this.waterfallWidth - this.boxRect.right * (this.maxColNum - 1)) / this.maxColNum
    }
  },
  watch: {
    propData() {
      this.computeShow() // 计算元素显示尺寸、位置
    }
  },
  mounted() {
    this.computeShow() // 计算元素显示尺寸、位置
  },
  methods: {
    computeShow() {
      this.showData = [] // 实际显示的图片尺寸数组
      let arr = new Array(this.maxColNum)
      for (let i = 0; i < this.maxColNum; i++) {
        arr[i] = 0
      }
      this.colHeights = arr // 列高度
      let width,
        height, // 元素尺寸
        insertIndex, // 元素从该列数插入
        top,
        left, // 元素位置
        ratio, // 宽高比
        cols,
        minColHeight,
        midColHeight, // 占两列时，较高的一列
        maxColHeight,
        minColIndex
      for (let i = 0; i < this.propData.length; i++) {
        minColHeight = this.getMinColHeight()
        maxColHeight = this.getMaxColHeight()
        minColIndex = this.getMinColIndex(minColHeight)
        ratio = parseFloat(this.propData[i]['width']) / parseFloat(this.propData[i]['height']) // 宽高比
        cols = this.getItemCols(ratio)
        if (cols === 3) {
          // 初始该占三列
          if (maxColHeight - minColHeight > this.maxDiff) {
            // 计算该占两列的情况
            cols = 2
          } else {
            width = this.colWidth * 3 + this.boxRect.right * (cols - 1)
            insertIndex = 0
          }
        }
        if (cols === 2) {
          // 初始该占两列
          let beforeIndex = minColIndex - 1,
            afterIndex = minColIndex + 1,
            beforeHeight = this.colHeights[beforeIndex],
            afterHeight = this.colHeights[afterIndex]
          if (beforeHeight != undefined && beforeHeight - minColHeight < this.maxDiff) {
            width = this.colWidth * 2 + this.boxRect.right * (cols - 1)
            insertIndex = beforeIndex
            midColHeight = beforeHeight
          } else {
            cols = 1
          }
          if (cols == 1 && afterHeight != undefined && afterHeight - minColHeight < this.maxDiff) {
            cols = 2
            width = this.colWidth * 2 + this.boxRect.right * (cols - 1)
            insertIndex = minColIndex
            midColHeight = afterHeight
          }
        }
        if (cols === 1) {
          // 初始该占一列
          width = this.colWidth + this.boxRect.right * (cols - 1)
          insertIndex = minColIndex
        }
        height = width / ratio
        height = height < this.minHeight ? this.minHeight : height
        left = (this.colWidth + this.boxRect.right) * insertIndex
        switch (cols) {
          case 1:
            top = this.colHeights[insertIndex]
            this.colHeights[insertIndex] += height + this.boxRect.bottom
            break
          case 2:
            top = midColHeight
            this.colHeights[insertIndex] = midColHeight + height + this.boxRect.bottom
            this.colHeights[insertIndex + 1] = this.colHeights[insertIndex]
            break
          case 3:
            top = maxColHeight
            for (let i = 0; i < 3; i++) {
              this.colHeights[i] = maxColHeight + height + this.boxRect.bottom
            }
            break
        }
        // 存进显示数组
        let item = {
          width,
          height,
          top,
          left,
          sourceData: this.propData[i],
          index: i,
          boxStyle: { width: width + 'px', height: height + 'px', top: top + 'px', left: left + 'px' }
        }
        this.showData.push(item)
      }
      this.maxHeight = this.getMaxColHeight()
    },
    getItemCols(ratio) {
      // 元素初始该占列数
      let cols
      if (ratio >= this.propRatio[1]) {
        cols = 3
      } else if (ratio >= this.propRatio[0] && ratio < this.propRatio[1]) {
        cols = 2
      } else if (ratio < this.propRatio[0]) {
        cols = 1
      }
      if (cols > this.maxColNum) cols = this.maxColNum
      return cols
    },
    getMinColHeight() {
      // 获取当前最矮列高度
      return Math.min(...this.colHeights)
    },
    getMaxColHeight() {
      // 获取当前最高列高度
      return Math.max(...this.colHeights)
    },
    getMinColIndex(minHeight) {
      // 获取当前高度最小的列的 index
      for (let i = 0, len = this.colHeights.length; i < len; i++) {
        if (this.colHeights[i] === minHeight) {
          return i
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.waterfall {
  position: relative;
  height: 100%;
  margin: 0 auto;
}
</style>
