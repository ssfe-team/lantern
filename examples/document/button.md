## Button 按钮

### 概述

基础组件，触发业务逻辑时使用。

### 代码示例

#### 基础用法

基础的按钮用法。

::: demo demo 
```html
  <lt-row align="middle">
    <span>主要按钮：</span>
    <lt-button>主要按钮</lt-button>
    <lt-button type="success">成功按钮</lt-button>
    <lt-button type="warning">提示按钮</lt-button>
    <lt-button type="error">危险按钮</lt-button>
    <lt-button type="vip">会员按钮</lt-button>
  </lt-row>

  <lt-row align="middle">
    <span>辅助按钮：</span>
    <lt-button type="normal">初等辅助</lt-button>
    <lt-button type="medium">中等辅助</lt-button>
    <lt-button type="heavy">高等辅助</lt-button>
  </lt-row>

  <lt-row align="middle">
    <span>虚线按钮：</span>
    <lt-button dashed>虚线主要</lt-button>
    <lt-button type="success" dashed>虚线成功</lt-button>
    <lt-button type="warning" dashed>虚线提示</lt-button>
    <lt-button type="error" dashed>虚线危险</lt-button>
  </lt-row>

  <lt-row align="middle">
    <span>幽灵按钮：</span>
    <section class="ghost-style">
      <!-- <lt-button type="transparent" ghost>幽灵透明</lt-button> -->
      <lt-button ghost>幽灵主要</lt-button>
      <lt-button type="success" ghost>幽灵成功</lt-button>
      <lt-button type="warning" ghost>幽灵提示</lt-button>
      <lt-button type="error" ghost>幽灵危险</lt-button>
    </section>
  </lt-row>

  <lt-row align="middle">
    <span>文字按钮：</span>
    <lt-button text>文字主要</lt-button>
    <lt-button type="success" text>文字成功</lt-button>
    <lt-button type="warning" text>文字提示</lt-button>
    <lt-button type="error" text>文字危险</lt-button>
    <lt-button type="general" text>文字普通</lt-button>
  </lt-row>
```
:::

#### 图标按钮及按钮形状

通过设置`icon`属性在Button内嵌入一个`Icon`，或者直接在`Button`内使用`Icon`组件。

使用`Button`的`icon`属性，图标位置将在最左边，如果需要自定义位置，需使用`Icon`组件。

通过设置`shape`属性为`circle`，可将按钮置为圆的形状。

::: demo demo
```html
  <lt-row align="middle">
    <span>图标按钮：</span>
    <lt-button type="normal" icon="sign"></lt-button>
    <lt-button icon="delete" ghost></lt-button>
    <lt-button icon="message"></lt-button>
    <lt-button icon="magic" circle></lt-button>
  </lt-row>
  <lt-row align="middle">
    <span>组合按钮：</span>
    <lt-button type="medium" icon="recycle" circle>删除</lt-button>
    <lt-button type="normal" icon="recycle">删除</lt-button>
    <lt-button icon="recycle">删除</lt-button>
    <lt-button icon="recycle" dashed>删除</lt-button>
  </lt-row>
  <lt-row align="middle">
    <span>无框按钮：</span>
    <lt-button type="general" icon="recycle" text>提交</lt-button>
    <lt-button type="general" icon="recycle" text>删除</lt-button>
  </lt-row>
```
:::

#### 按钮尺寸

按钮有三种尺寸：微型、小型、中型、默认（大型）、特大型

通过设置`size`为`min`、`small`、`middle`、`large`、`max`，将按钮设置为大和小尺寸，不设置为默认（大型）尺寸。

::: demo demo
```html
  <lt-row align="middle">
    <lt-button size="min">微型按钮</lt-button>
    <lt-button size="small">小型按钮</lt-button>
    <lt-button size="middle">中型按钮</lt-button>
    <lt-button>默认按钮</lt-button>
    <lt-button size="max">特大按钮</lt-button>
  </lt-row>
  <lt-row align="middle">
    <lt-button size="min" circle>微型按钮</lt-button>
    <lt-button size="small" circle>小型按钮</lt-button>
    <lt-button size="middle" circle>中型按钮</lt-button>
    <lt-button circle>默认按钮</lt-button>
    <lt-button size="max" circle>特大按钮</lt-button>
  </lt-row>
```
:::


#### 按钮loading

通过添加`loading`属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。

::: demo demo
```html
  <lt-button size="max" icon="load-d" loading></lt-button>
  <lt-button icon="load-b" loading>加载中</lt-button>
  <lt-button loading></lt-button>
```
:::

#### 按钮组合

将多个`Button`放入`ButtonGroup`内，可实现按钮组合的效果。

::: demo demo
```html
  <lt-row align="middle">
    <lt-button-group>
      <lt-button>内容一</lt-button>
      <lt-button type="normal">内容二</lt-button>
      <lt-button type="normal">内容三</lt-button>
      <lt-button type="normal">内容四</lt-button>
    </lt-button-group>

    <lt-button-group circle>
      <lt-button type="heavy">内容一</lt-button>
      <lt-button type="general" text>内容二</lt-button>
      <lt-button type="general" text>内容三</lt-button>
      <lt-button type="general" text>内容四</lt-button>
    </lt-button-group>
  </lt-row>

  <lt-button-group>
    <lt-button type="normal" icon="angle-double-left"></lt-button>
    <lt-button type="normal" icon="angle-double-right"></lt-button>
  </lt-button-group>

  <lt-button-group>
    <lt-button type="normal">内容一</lt-button>
    <lt-button type="normal">内容二</lt-button>
  </lt-button-group>
```
:::

#### 长按钮

通过设置属性 `long` 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。

使用者也可以直接通过给组件添加 `style` 来设置更细节的样式，比如定宽。

::: demo demo
```html
  <lt-button long>确定</lt-button>
  <br><br>
  <lt-button ghost long>取消</lt-button>
```
:::

#### 不可用状态

通过添加`disabled`属性可将按钮设置为不可用状态。

::: demo demo
```html
  <lt-row align="middle">
    <lt-button>主要按钮</lt-button>
    <lt-button type="medium">中等辅助</lt-button>
    <lt-button type="heavy">高等辅助</lt-button>
    <lt-button type="normal">初等辅助</lt-button>
    <lt-button dashed>虚线按钮</lt-button>
    <lt-button type="general" text>普通按钮</lt-button>
  </lt-row>
  <lt-row align="middle">
    <lt-button disabled>主要按钮</lt-button>
    <lt-button type="medium" disabled>中等辅助</lt-button>
    <lt-button type="heavy" disabled>高等辅助</lt-button>
    <lt-button type="normal" disabled>初等辅助</lt-button>
    <lt-button dashed disabled>虚线按钮</lt-button>
    <lt-button type="general" text disabled>普通按钮</lt-button>
  </lt-row>
```
:::


#### 按钮组纵向排列

通过设置`ButtonGroup`的属性`vertical`，可以使按钮组纵向排列。

::: demo demo
```html
  <lt-button-group vertical>
    <lt-button icon="arrow-left-filling" ghost></lt-button>
    <lt-button icon="arrow-right-filling" ghost></lt-button>
    <lt-button icon="arrow-down-filling" ghost></lt-button>
    <lt-button icon="arrow-up-filling" ghost></lt-button>
  </lt-button-group>
```
:::

### API

#### Button props

参数|说明|类型|默认值
-------|-------|-------|-------|-------
type|按钮类型|success｜warning｜error｜vip｜heavy｜medium｜normal｜general｜white｜default|default
ghost|幽灵属性，使按钮背景透明|Boolean|false
dashed|虚线属性，使按钮边框使用虚线|Boolean|false
text|文字按钮|Boolean|false
size|按钮大小|min｜small｜middle｜large｜max|large
circle|圆形按钮|Boolean|false
long|开启后，按钮的长度为 100%|Boolean|false
html-type|设置`button`原生的`type`|button｜submit｜reset|button
disabled|设置按钮为禁用状态|Boolean|false
loading|设置按钮为加载中状态|Boolean|false
icon|设置按钮的图标类型|String|-
icon-size|设置按钮的图标大小|String|16

#### ButtonGroup props

属性|说明|类型|默认值
---|---|---|---
circle|圆形按钮|Boolean|false
vertical|是否纵向排列按钮组|Boolean|false

::::vuecode::::

<style lang='less'>
.demo-code-result {
  .lt-row {
    margin-bottom: 32px;
    >span {
      font-size: 14px;
      color: #505A71;
      margin-right: 18px;
    }
  }
  .lt-btn {
    margin-right: 24px;
  }

  .ghost-style {
    display: flex;
    align-items: center;
    height: 72px;
    width: 680px;
    background-image: linear-gradient(90deg, rgba(66,81,107,0.30) 0%, rgba(59,76,101,0.00) 100%);
    border-radius: 2px;
    margin-left: -16px;
    padding-left: 16px;
  }
  
  .lt-btn-group {
    margin-right: 24px;
    .lt-btn {
      margin-right: 0;
    }
  }
}
</style>
