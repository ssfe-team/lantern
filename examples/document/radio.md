
## Radio 单选框

基础组件，触发业务逻辑时使用。

### 代码示例

#### 单独使用

使用 v-model 可以双向绑定数据。

::: demo demo
```html
   <lt-radio v-model="single">Radio</lt-radio>
   <p>{{single}}</p>
```
:::

#### 组合使用

使用 `RadioGroup` 实现一组互斥的选项组。在组合使用时，`Radio` 使用 `label` 来自动判断。每个 `Radio` 的内容可以自定义，如不填写则默认使用 `label` 的值。

::: demo demo
```html
   <lt-radio-group v-model="phone">
       <lt-radio label="mylike">
           <lt-icon type="mylike"></lt-icon>
           <span>我的收藏</span>
       </lt-radio>
       <lt-radio label="mybuy">
           <lt-icon type="mybuy"></lt-icon>
           <span>我购买的</span>
       </lt-radio>
       <lt-radio label="recycle">
           <lt-icon type="recycle"></lt-icon>
           <span>回收站</span>
       </lt-radio>
   </lt-radio-group>
   <p>{{phone}}</p>
   <lt-radio-group v-model="animal">
       <lt-radio label="金斑蝶"></lt-radio>
       <lt-radio label="爪哇犀牛"></lt-radio>
       <lt-radio label="印度黑羚"></lt-radio>
   </lt-radio-group>
  <p>{{animal}}</p>
```
:::

#### 不可用

通过设置`disabled`属性来禁用单选框。

::: demo demo
```html
    <lt-radio v-model="disabledSingle" disabled>Radio</lt-radio>
    <br><br>
    <lt-radio-group v-model="disabledGroup">
       <lt-radio label="金斑蝶" disabled></lt-radio>
       <lt-radio label="爪哇犀牛"></lt-radio>
       <lt-radio label="印度黑羚"></lt-radio>
    </lt-radio-group>
```
:::

#### 垂直

设置属性 `vertical` 可以垂直显示，按钮样式下无效。

::: demo demo
```html
   <lt-radio-group v-model="phone" vertical>
       <lt-radio label="mylike">
           <lt-icon type="mylike"></lt-icon>
           <span>我的收藏</span>
       </lt-radio>
       <lt-radio label="mybuy">
           <lt-icon type="mybuy"></lt-icon>
           <span>我购买的</span>
       </lt-radio>
       <lt-radio label="recycle">
           <lt-icon type="recycle"></lt-icon>
           <span>回收站</span>
       </lt-radio>
   </lt-radio-group>
```
:::

#### 按钮样式

组合使用时可以设置属性`type`为 button 来应用按钮的样式。

设置属性`type`为 button-split 来应用为 UI 定制的样式(……）。

::: demo demo
```html
   <lt-radio-group v-model="button1" type="button-split" size="small">
       <lt-radio label="北京" disabled></lt-radio>
       <lt-radio label="上海"></lt-radio>
       <lt-radio label="深圳"></lt-radio>
       <lt-radio label="杭州"></lt-radio>
   </lt-radio-group>
   <p>{{button1}}</p>
   <lt-radio-group v-model="button2" type="button">
       <lt-radio label="北京"></lt-radio>
       <lt-radio label="上海" disabled></lt-radio>
       <lt-radio label="深圳"></lt-radio>
       <lt-radio label="杭州"></lt-radio>
   </lt-radio-group>
   <p>{{button2}}</p>
   <lt-radio-group v-model="button3" type="button">
       <lt-radio label="北京" disabled></lt-radio>
       <lt-radio label="上海" disabled></lt-radio>
       <lt-radio label="深圳" disabled></lt-radio>
       <lt-radio label="杭州" disabled></lt-radio>
   </lt-radio-group>
   <p>{{button3}}</p>
```
:::

#### 尺寸

通过设置属性`size`为`large`或`small`将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。

::: demo demo
```html
   <lt-radio-group v-model="button1" type="button" size="large">
       <lt-radio label="北京"></lt-radio>
       <lt-radio label="上海"></lt-radio>
       <lt-radio label="深圳"></lt-radio>
       <lt-radio label="杭州"></lt-radio>
   </lt-radio-group>
   <p>{{button1}}</p>
   <lt-radio-group v-model="button2" type="button">
       <lt-radio label="北京"></lt-radio>
       <lt-radio label="上海" disabled></lt-radio>
       <lt-radio label="深圳"></lt-radio>
       <lt-radio label="杭州"></lt-radio>
   </lt-radio-group>
   <p>{{button2}}</p>
   <lt-radio-group v-model="button3" type="button" size="small">
       <lt-radio label="北京" disabled></lt-radio>
       <lt-radio label="上海" disabled></lt-radio>
       <lt-radio label="深圳" disabled></lt-radio>
       <lt-radio label="杭州" disabled></lt-radio>
   </lt-radio-group>
   <p>{{button3}}</p>
```
:::

### API

#### Radio props

属性|说明|类型|默认值
---|---|---|---
value|只在单独使用时有效。可以使用 `v-model` 双向绑定数据|Boolean|false
label|只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目|String \| Number|-
disabled|是否禁用当前项|Boolean|false
size|单选框的尺寸，可选值为`large`、`small`、`default`或者不设置|String|-
true-value|选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用|String, Number, Boolean|true
false-value|没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用|String, Number, Boolean|false

#### Radio Events

事件名|说明|返回值
---|---|---
on-change|在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发|...

#### RadioGroup Props

属性|说明|类型|默认值
---|---|---|---
value|指定当前选中的项目数据。可以使用 v-model 双向绑定数据|String | Number|-
type|可选值为 button 或不填，为 button 时使用按钮样式|String|-
size|尺寸，可选值为`large`、`small`、`default`或者不设置|String|-
vertical|是否垂直排列，按钮样式下无效|Boolean|false

#### RadioGroup Events

事件名|说明|返回值
---|---|---
on-change|在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发|...

::::vuecode::::
<script>
export default {
    data () {
        return {
            single: false,
            phone: 'mylike',
            animal: '爪哇犀牛',
            disabledSingle: true,
            disabledGroup: '爪哇犀牛',
            button1: '北京',
            button2: '北京',
            button3: '北京'
        }
    }
}
</script>