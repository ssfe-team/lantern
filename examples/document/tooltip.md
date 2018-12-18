## Tooltip 文字提示

文字提示气泡框，在鼠标悬停时显示，代替了系统的`title`提示。

### 代码示例

#### 基础用法

最简单的用法。

注意 lt-tooltip 内的文本使用了 `white-space: nowrap;`，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 `white-space: normal;`。

::: demo demo
```html
  <lt-tooltip content="这是提示文字">
      当鼠标经过这段文字时，会显示一个气泡框
  </lt-tooltip>
```
:::

#### 主题

Tooltip 组件提供了两个不同的主题：`blue`和`light`。

通过设置effect属性来改变主题，默认为 `blue`。

::: demo demo
```html
  <lt-tooltip content="这是提示文字">
      <lt-button>BLue</lt-button>
  </lt-tooltip>
  <lt-tooltip content="这是提示文字" effect="light">
      <lt-button>Light</lt-button>
  </lt-tooltip>
```
:::


#### 位置

组件提供了12个不同的方向显示Tooltip，具体配置可查看API。

::: demo demo
```html
   <lt-tooltip content="Top Start 文字提示" placement="top-start" style="margin-bottom: 16px">
     <lt-button>Top Left</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Top Center 文字提示" placement="top">
     <lt-button>Top Center</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Top End 文字提示" placement="top-end">
     <lt-button>Top Right</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Right Start 文字提示" placement="right-start">
     <lt-button>Right Top</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Right Center 文字提示" placement="right">
     <lt-button>Right Center</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Right End 文字提示" placement="right-end">
     <lt-button>Right Bottom</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Bottom Start 文字提示" placement="bottom-start">
     <lt-button>Bottom Left</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Bottom Center 文字提示" placement="bottom">
     <lt-button>Bottom Center</lt-button>
   </lt-tooltip>
   <lt-tooltip  content="Bottom End 文字提示" placement="bottom-end">
     <lt-button>Bottom Right</lt-button>
   </lt-tooltip>
```
:::

#### 自定义内容

通过自定义 slot 显示多行文本或更复杂的样式。

::: demo demo
```html
  <lt-tooltip>
      <lt-button>多行</lt-button>
      <div slot="content">
          <p>显示多行信息</p>
          <p><i>可自定义样式</i></p>
      </div>
  </lt-tooltip>
```
:::

#### 禁用

通过设置属性`disabled`可以禁用文字提示。

::: demo demo
```html
  <lt-tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
      <lt-button @click="disabled = true">点击关闭提示</lt-button>
  </lt-tooltip>
```
:::

#### 延时

通过设置属性`delay`可以延时显示文字提示，单位毫秒。

::: demo demo
```html
  <lt-tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
      <lt-button @click="disabled = true">延时1秒显示</lt-button>
  </lt-tooltip>
```
:::

### API

#### Tooltip props

属性|说明|类型|默认值
---|---|---|---
content|显示的内容|String \| Number|空
placement|提示框出现的位置，可选值为`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end`，支持自动识别|String|bottom
effect|主题|string|blue
disabled|是否禁用提示框|Boolean|false
delay|延迟显示，单位毫秒|Number|0
always|是否总是可见|Boolean|false
transfer|是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果|Boolean|false
visible-arrow|是否显示 Tooltip 箭头|Boolean|true
options|自定义 popper.js 的配置项，具体配置见 [popper.js 文档](https://popper.js.org/popper-documentation.html)|Object|![](https://ws3.sinaimg.cn/large/006tKfTcly1fr42hc9bx7j308z05taa5.jpg)

#### Tooltip events

事件名|说明|返回值
---|---|---
on-popper-show|在提示框显示时触发|无
on-popper-hide|在提示框消失时触发|无

#### Tooltip slot

名称|说明|
---|---
无|主体内容
content|提示框内容，定义此 slot 时，会覆盖 props `content`。

::::vuecode::::
<script>
export default {
    data () {
        return {
            disabled: false
        }
    }
}
</script>
