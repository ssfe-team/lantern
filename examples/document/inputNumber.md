## InputNumber 数字输入框

使用鼠标或键盘输入一定范围的标准数值。

### 代码示例

#### 基础用法

可以通过输入、鼠标点击或键盘的上下键来改变数值大小。

::: demo demo
```html
   <lt-input-number v-model="value1"></lt-input-number>
```
:::

#### 小数

通过设置`step`属性控制每次改变的精度。

::: demo demo
```html
   <lt-input-number :max="10" :min="1" :step="1.2" v-model="value2"></lt-input-number>
```
:::

#### 格式化展示

通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。

::: demo demo
```html
   <lt-input-number
       :max="10000"
       v-model="value9"
       :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
       :parser="value => value.replace(/$s?|(,*)/g, '')"></lt-input-number>
   <lt-input-number
       :max="100"
       v-model="value10"
       :formatter="value => `${value}%`"
       :parser="value => value.replace('%', '')"></lt-input-number>
```
:::

#### 不可用

通过设置`disabled`属性禁用输入框，点击按钮切换状态。

::: demo demo
```html
   <lt-input-number v-model="value6" :disabled="disabled"></lt-input-number>
   <lt-button type="primary" @click="disabled = !disabled">Toggle Disabled</lt-button>
```
:::

#### 只读

通过设置`readonly`属性开启只读。

::: demo demo
```html
    <lt-input-number v-model="value7" readonly></lt-input-number>
```
:::

#### 不可编辑

通过设置`editable`属性控制是否能编辑。

::: demo demo
```html
     <lt-input-number v-model="value8" :editable="false"></lt-input-number>
```
:::

### API

#### InputNumber props

属性|说明|类型|默认值
---|---|---|---
max|最大值|Number|Infinity
min|最小值|Number|-Infinity
value|当前值，可以使用 v-model 双向绑定数据|Number|1
step|每次改变的步伐，可以是小数|Number|1
disabled|设置禁用状态|Boolean|false
placeholder|占位文本|String|-
formatter|指定输入框展示值的格式|Function|-
parser|指定从 formatter 里转换回数字的方式，和 formatter 搭配使用|Function|-
readonly|是否设置为只读|Boolean|false
editable|是否可编辑|Boolean|true
precision|数值精度|Number|-
element-id|给表单元素设置 `id`，详见 Form 用法。|String|-

#### InputNumber events

事件名|说明|返回值
---|---|---
on-change|数值改变时的回调，返回当前值|当前值
on-focus|聚焦时触发|event
on-blur|失焦时触发|-

::::vuecode::::
<script>
export default {
    data() {
      return {
        value1: 1,
        value2: 1,
        value3: 2,
        value4: 2,
        value5: 2,
        value6: 1,
        value7: 1,
        value8: 1,
        value9: 1000,
        value10: 100,
        disabled: true,
      }
    }
}
</script>
