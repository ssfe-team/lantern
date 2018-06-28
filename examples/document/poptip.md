## Poptip 气泡提示

### 概述

Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。

Poptip 还包含 confirm 确认框，与 Modal 不同的是，它会出现在就近元素，相对轻量。

### 代码示例

#### 基础用法

支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。

注意 Poptip 内的文本使用了 `white-space: nowrap;`，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 `white-space: normal;`。

::: demo demo
```html
   <lt-poptip trigger="hover" title="Title" content="content">
     <lt-button>hover 激活</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="click" title="Title" content="content">
     <lt-button>click 激活</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="focus" title="Title" content="content">
     <lt-button>focus 激活</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="focus" title="Title" content="content">
     <input placeholder="输入框的 focus">
   </lt-poptip>
```
:::


#### 位置

组件提供了12个不同的方向显示Poptip，具体配置可查看API。

::: demo demo
```html
   <lt-poptip trigger="hover" title="Title" content="content" placement="top-start">
     <lt-button>Top Left</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="hover" title="Title" content="content" placement="top">
     <lt-button>Top Center</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="hover" title="Title" content="content" placement="top-end">
     <lt-button>Top Right</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="hover" title="Title" content="content" placement="right-start">
     <lt-button>Right Top</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="hover" title="Title" content="content" placement="right">
     <lt-button>Right Center</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="hover" title="Title" content="content" placement="right-end">
     <lt-button>Right Bottom</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="hover" title="Title" content="content" placement="bottom-start">
     <lt-button>Bottom Left</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="click" title="Title" content="content" placement="bottom">
     <lt-button>Bottom Center</lt-button>
   </lt-poptip>
   <lt-poptip  trigger="hover" title="Title" content="content" placement="bottom-end">
     <lt-button>Bottom Right</lt-button>
   </lt-poptip>
```
:::

#### 嵌套复杂内容

通过自定义 slot 来实现复杂的内容。

::: demo demo
```html
<lt-poptip trigger="click" placement="right">
     <lt-button>click 激活</lt-button>
     <div class="api" slot="content">
         <table>
             <thead>
                 <tr>
                     <th>Version</th>
                     <th>Update Time</th>
                     <th>Description</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>0.9.5</td>
                     <td>2016-10-26</td>
                     <td>Add new components <code>Tooltip</code> and <code>Poptip</code></td>
                 </tr>
                 <tr>
                     <td>0.9.4</td>
                     <td>2016-10-25</td>
                     <td>Add new components <code>Modal</code></td>
                 </tr>
                 <tr>
                     <td>0.9.2</td>
                     <td>2016-09-28</td>
                     <td>Add new components <code>Select</code></td>
                 </tr>
             </tbody>
         </table>
     </div>
   </lt-poptip>
```
:::

#### 确认框

通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

::: demo demo
```html
<lt-poptip
  confirm
  title="您确认删除这条内容吗？"
  @on-ok="ok"
  @on-cancel="cancel"
>
 <lt-button>删除</lt-button>
</lt-poptip>
```
:::

#### API

##### Poptip props 

属性|说明|类型|默认值
---|---|---|---
trigger|触发方式，可选值为`hover`（悬停）`click`（点击）`focus`（聚焦）,在 confirm 模式下，只有 click 有效|String|click
title|显示的标题|String \| Number|-
content|显示的正文内容，只在非 confirm 模式下有效|String \| Number|空
placement|提示框出现的位置，可选值为`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end`，支持自动识别|String|top
customStyle|自定义样式|Object|-
confirm|是否开启对话框模式|Boolean|false
ok-text|确定按钮的文字，只在 confirm 模式下有效|String|确定
cancel-text|取消按钮的文字，只在 confirm 模式下有效|String|	取消
transfer|是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果|Boolean|false
offset|出现位置的偏移量|Number\|String|0
visible-arrow|是否显示 Tooltip 箭头|Boolean|true
popper-class|给 Poptip 设置 class-name，在使用 transfer 时会很有用|String|-
options|自定义 popper.js 的配置项，具体配置见 [popper.js 文档](https://popper.js.org/popper-documentation.html)|Object|![](https://ws3.sinaimg.cn/large/006tKfTcly1fr42hc9bx7j308z05taa5.jpg)
padding|自定义内容 padding|String|8 16

##### Poptip events

事件名|说明|返回值
---|---|---
on-popper-show|在提示框显示时触发|无
on-popper-hide|在提示框消失时触发|无
on-ok|点击确定的回调，只在 confirm 模式下有效|无
on-cancel|点击取消的回调，只在 confirm 模式下有效|无

##### Poptip slot

名称|说明|
---|---
无|主体内容
title|提示框标题，定义此 slot 时，会覆盖 props `title`
content|提示框内容，定义此 slot 时，会覆盖 props `content`，只在非 confirm 模式下有效

::::vuecode::::
<script>
export default {
    methods: {
        ok() {
             this.$message({
              message: '点击了确定',
              type: 'success'
             });
        },
        cancel() {
            this.$message.error('点击了取消');
        }
    }
}
</script>