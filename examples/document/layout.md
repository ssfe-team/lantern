## Layout布局容器

用于搭建网页的基础布局

`lt-layout`：外层容器

`lt-header`：头部容器

`lt-aside`：侧边栏容器

`lt-main`：主体容器

`lt-footer`：底部容器

> 此组件使用 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<lt-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<lt-layout>`

### 实例

::: demo demo
```html
  <lt-layout>
    <lt-header>header</lt-header>
    <lt-main>main</lt-main>
  </lt-layout>
  
  <lt-layout>
    <lt-header>header</lt-header>
    <lt-main>main</lt-main>
    <lt-footer>footer</lt-footer>
  </lt-layout>
  
  <lt-layout>
    <lt-header>header</lt-header>
    <lt-main>
      <lt-layout :isRow="true">
        <lt-aside>aside</lt-aside>
        <lt-main>main</lt-main>
      </lt-layout>
    </lt-main>
    <lt-footer>footer</lt-footer>
  </lt-layout>
```
:::

### lt-layout Attributes

参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
isRow|控制子元素的排列方向|Boolean|true/false|false

### lt-header Attributes

参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
height|header高度|String|-|60px

### lt-main Attributes

参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
height|main高度|String|-|100%

### lt-aside Attributes

参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
width|aside宽度|String|-|200px

### lt-footer Attributes

参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
height|footer高度|String|-|60px


::::vuecode::::
<style lang='less'>
.demo-code-result {
  .lt-layout {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .lt-header {
    line-height: 60px;
    text-align: center;
    background-color: #9B9B9B;
  }
  .lt-main {
    line-height: 120px;
    text-align: center;
    background-color: #CDCDCD;
    .lt-layout {
      margin: 0;
    }
  }
  .lt-footer {
    line-height: 60px;
    text-align: center;
    background-color: #E7E7E7;
  }
  .lt-aside {
    background-color: #FAFAFA;
  }
}
</style>