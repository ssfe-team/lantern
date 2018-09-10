## Switch 开关

### 概述

在两种状态间切换时用到的开关选择器。

### 代码示例

#### 基本

基本用法，状态切换时会触发事件。

::: demo demo
```html
   <lt-switch v-model="switch1" @on-change="change"></lt-switch>
```
:::

#### 尺寸

设置`size`为 `large` 或 `small` 使用大号和小号的开关。

::: demo demo
```html
   <lt-switch size="large"></lt-switch>
   <lt-switch></lt-switch>
   <lt-switch size="small"></lt-switch>
```
:::

#### 文字和图标

自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。

::: demo demo
```html
   <lt-switch>
       <span slot="open">开</span>
       <span slot="close">关</span>
   </lt-switch>
   <lt-switch>
       <lt-icon type="ios-checkmark-empty" slot="open"></lt-icon>
       <lt-icon type="ios-close-empty" slot="close"></lt-icon>
   </lt-switch>
   <br><br>
   <lt-switch size="large">
       <span slot="open">开启</span>
       <span slot="close">关闭</span>
   </lt-switch>
   <lt-switch size="large">
       <span slot="open">ON</span>
       <span slot="close">OFF</span>
   </lt-switch>
```
:::

#### 不可用

禁用开关。

::: demo demo
```html
   <lt-switch :disabled="disabled"></lt-switch>
   <lt-button type="primary" @click="disabled = !disabled">Toggle Disabled</lt-button>
```
:::

### API

#### Switch props

属性|说明|类型|默认值
---|---|---|---
value|指定当前是否选中，可以使用 v-model 双向绑定数据|Boolean|false
size|开关的尺寸，可选值为`large`、`small`、`default`或者不写。建议开关如果使用了2个汉字的文字，使用 large。|String|-
disabled|禁用开关|Boolean|false
true-value|选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用|String, Number, Boolean|true
false-value|没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用|String, Number, Boolean|false

#### Switch events

事件名|说明|返回值
---|---|---
on-change|开关变化时触发，返回当前的状态|true\|false

#### Switch slot

名称|说明
---|---
open|自定义显示打开时的内容
close|自定义显示关闭时的内容


::::vuecode::::
<script>
export default {
    data () {
        return {
            switch1: false,
            disabled: true
        }  
    },
    methods: {
        change (status) {
            this.$message.info('开关状态：' + status);
        }
    }
}
</script>
