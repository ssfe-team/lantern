## Breadcrumb 面包屑

### 概述

显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。

### 代码示例

#### 基础用法

最基础的用法，通过设置`to`属性添加链接。

::: demo demo :::
```html
<lt-breadcrumb>
    <lt-breadcrumb-item to="/">Home</lt-breadcrumb-item>
    <lt-breadcrumb-item to="/components/breadcrumb">Components</lt-breadcrumb-item>
    <lt-breadcrumb-item>Breadcrumb</lt-breadcrumb-item>
</lt-breadcrumb>
```
:::

#### 带图标的

可自定义每项的内容，比如带有一个图标。

::: demo demo :::
```html
<lt-breadcrumb>
    <lt-breadcrumb-item to="/">
        <lt-icon type="mydesign"></lt-icon> Home
    </lt-breadcrumb-item>
    <lt-breadcrumb-item to="/components/breadcrumb">
        <lt-icon type="recycle"></lt-icon> Components
    </lt-breadcrumb-item>
    <lt-breadcrumb-item>
        <lt-icon type="mybuy"></lt-icon> Breadcrumb
    </lt-breadcrumb-item>
</lt-breadcrumb>
```
:::

#### 分隔符

通过设置`separator`属性来自定义分隔符，比如 `>` ，也可以接受自定义的HTML字符串。

::: demo demo :::
```html
</style>
<lt-breadcrumb separator="/">
    <lt-breadcrumb-item to="/">Home</lt-breadcrumb-item>
    <lt-breadcrumb-item to="/components/breadcrumb">Components</lt-breadcrumb-item>
    <lt-breadcrumb-item>Breadcrumb</lt-breadcrumb-item>
</lt-breadcrumb>
<lt-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
    <lt-breadcrumb-item to="/">Home</lt-breadcrumb-item>
    <lt-breadcrumb-item to="/components/breadcrumb">Components</lt-breadcrumb-item>
    <lt-breadcrumb-item>Breadcrumb</lt-breadcrumb-item>
</lt-breadcrumb>
```
:::

### API

#### Breadcrumb props

属性|说明|类型|默认值
---|---|---|---
separator|自定义分隔符|String \| Element String|>

#### BreadcrumbItem props

属性|说明|类型|默认值
---|---|---|---
to|链接，不传则没有链接|String \| Object|-
href|同 to，未来将废弃|String \| Object|-
replace|路由跳转时，开启 replace 将不会向 history 添加新记录|Boolean|false

::::vuecode::::
<style lang="less">
.demo-breadcrumb-separator{
    color: #ff5500;
    padding: 0 5px;
}
</style>