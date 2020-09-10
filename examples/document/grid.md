# Grid 栅格

24 栅格系统。

#### 基础用法

从堆叠到水平排列。

使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有 `Col` 必须放在 `Row` 内。

::: demo demo :::

```html
<template>
  <lt-row>
    <lt-col :span="24">100%</lt-col>
  </lt-row>
  <lt-row>
    <lt-col :span="12">50%</lt-col>
    <lt-col :span="12">50%</lt-col>
  </lt-row>
  <lt-row>
    <lt-col :span="8">33.33%</lt-col>
    <lt-col :span="8">33.33%</lt-col>
    <lt-col :span="8">33.33%</lt-col>
  </lt-row>
  <lt-row>
    <lt-col :span="6">25%</lt-col>
    <lt-col :span="6">25%</lt-col>
    <lt-col :span="6">25%</lt-col>
    <lt-col :span="6">25%</lt-col>
  </lt-row>
</template>
```
:::


#### 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性, 如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]`。

::: demo demo :::

```html
<template>
  <section class="gutter-style">
    <lt-row :gutter="16">
      <lt-col :span="24"><div>col-1</div></lt-col>
    </lt-row>
    <lt-row :gutter="16">
      <lt-col :span="12"><div>col-2-1</div></lt-col>
      <lt-col :span="12"><div>col-2-2</div></lt-col>
    </lt-row>
    <lt-row :gutter='16'>
      <lt-col :span="8"><div>col-3-1</div></lt-col>
      <lt-col :span="8"><div>col-3-2</div></lt-col>
      <lt-col :span="8"><div>col-3-3</div></lt-col>
    </lt-row>
  </section>
</template>
```
:::



#### 对齐

使用 `Row` 的 `justify` 和 `align` 属性， 设置子元素水平垂直对齐。

::: demo demo :::

```html
<template>
  <h3>Justify Center</h3>
  <section class="justify-style">
    <lt-row justify="center">
      <lt-col :span="4"><div>col-1</div></lt-col>
      <lt-col :span="4"><div>col-2</div></lt-col>
      <lt-col :span="4"><div>col-3</div></lt-col>
      <lt-col :span="4"><div>col-4</div></lt-col>
    </lt-row>
  </section>
  <h3>Align Center</h3>
  <section class="align-style">
    <lt-row align="middle">
      <lt-col :span="6"><div>col-3-1</div></lt-col>
      <lt-col :span="6"><div>col-3-2</div></lt-col>
      <lt-col :span="6"><div>col-3-3</div></lt-col>
      <lt-col :span="6"><div>col-3-3</div></lt-col>
    </lt-row>
  </section>
</template>
```
:::



#### 响应式布局

参照 Bootstrap 的 响应式设计，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl`  `xxl`。

::: demo demo :::

```html
<template>
   <lt-row>
    <lt-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">col-1</lt-col>
    <lt-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">col-2</lt-col>
    <lt-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">col-1</lt-col>
  </lt-row>
</template>
```
:::


### API

#### Row props

参数|说明|类型|默认值
-------|-------|-------|-------
gutter|栅格间隔|number｜array|0
justify|水平排列方式|start｜end｜center｜between｜around|start
align|垂直对齐方式|top｜bottom｜middle|top

#### Col props

参数|说明|类型|默认值
-------|-------|-------|-------
span|栅格占位格数，为 0 时相当于 display: none|number|-
xs|屏幕 < 576px 响应式栅格|number|-
sm|屏幕 ≥ 576px 响应式栅格|number|-
md|屏幕 ≥ 768px 响应式栅格|number|-
lg|屏幕 ≥ 992px 响应式栅格|number|-
xl|屏幕 ≥ 1200px 响应式栅格|number|-
xxl|屏幕 ≥ 1600px 响应式栅格|number|-

::::vuecode::::

<style lang='less'>
.demo-code-result {
  .lt-row {
    margin-bottom: 8px;
  }
  .lt-col {
    background: #0773fe;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 30px;
    &:nth-child(odd) {
      background: rgba(0,146,255,.75);
    }
    >div {
      height: 50px;
      line-height: 50px;
    }
  }
  .gutter-style {
    .lt-row {
      margin: 0;
    }
    .lt-col {
      background: none;
      >div {
        background: #0773fe;
      }
    }
  }
  .justify-style,  .align-style {
    background: rgba(128, 128, 128, 0.08);
  }
  .align-style .lt-col {
    &:nth-child(2) >div {
      height: 100px;
      line-height: 100px;
    }
  }
}
</style>