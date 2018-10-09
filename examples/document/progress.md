## Progress 进度条

### 概述

展示操作或任务的当前进度，比如上传文件。

### 代码示例

#### 基本用法

::: demo demo
```html
   <lt-progress :percent="25"></lt-progress>
```
:::

#### 配合外部组件使用

::: demo demo
```html
   <lt-progress :percent="percent"></lt-progress>
   <lt-button-group>
     <lt-button icon="ios-plus-empty" @click="add"></lt-button>
     <lt-button icon="ios-minus-empty" @click="minus"></lt-button>
   </lt-button-group>
```
:::

### API

#### Props

属性|说明|类型|默认值
---|---|---|---
percent|百分比|Number, String|0
stroke-width|进度条的线宽，单位 px|Number|10
hide-info|隐藏数值|Boolean|false

::::vuecode::::
<script>
export default {
    data() {
      return {
        percent: 25
      }
    },
    methods: {
      add() {
        if (this.percent + 10 >= 100) {
          this.percent = 100
          return
        }
        this.percent += 10
      },
      minus() {
        if (this.percent - 10 <= 0) {
          this.percent = 0
          return
        }
        this.percent -= 10
      }
    }
}
</script>
