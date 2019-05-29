## Button 按钮

### 概述

基础组件，触发业务逻辑时使用。

### 代码示例

#### 按钮类型

按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。

通过设置`type`为`primary`、`ghost`、`dashed`、`text`、`info`、`success`、`warning`、`error`创建不同样式的按钮，不设置为默认样式。

::: demo demo
```html
   <lt-button>Default</lt-button>
   <lt-button type="primary">Primary</lt-button>
   <lt-button type="ghost">Ghost</lt-button>
   <lt-button type="dashed">Dashed</lt-button>
   <lt-button type="text">Text</lt-button>
   <br><br>
   <lt-button type="info">Info</lt-button>
   <lt-button type="success">Success</lt-button>
   <lt-button type="warning">Warning</lt-button>
   <lt-button type="error">Error</lt-button>
```
:::

#### 图标按钮及按钮形状

通过设置`icon`属性在Button内嵌入一个`Icon`，或者直接在`Button`内使用`Icon`组件。

使用`Button`的`icon`属性，图标位置将在最左边，如果需要自定义位置，需使用`Icon`组件。

通过设置`shape`属性为`circle`，可将按钮置为圆的形状。

::: demo demo
```html
   <lt-button type="primary" shape="circle" icon="recycle"></lt-button>
   <lt-button type="primary" icon="recycle" icon-size="14">删除</lt-button>
   <lt-button type="primary" shape="circle" icon="recycle">删除</lt-button>
   <lt-button type="primary" shape="circle">Circle</lt-button>
   <br><br>
   <lt-button type="ghost" shape="circle" icon="recycle"></lt-button>
   <lt-button type="ghost" icon="recycle">删除</lt-button>
   <lt-button type="ghost" shape="circle" icon="recycle">删除</lt-button>
   <lt-button type="ghost" shape="circle">Circle</lt-button>
```
:::

#### 按钮尺寸

按钮有三种尺寸：大、默认（中）、小

通过设置`size`为`large`和`small`将按钮设置为大和小尺寸，不设置为默认（中）尺寸。

::: demo demo
```html
  <lt-button type="primary" size="large">Large</lt-button>
  <lt-button type="primary">Default</lt-button>
  <lt-button type="primary" size="small">Small</lt-button>
  <br><br>
  <lt-button type="primary" shape="circle" size="large">Large</lt-button>
  <lt-button type="primary" shape="circle">Default</lt-button>
  <lt-button type="primary" shape="circle" size="small">Small</lt-button>
```
:::

#### 长按钮

通过设置属性 `long` 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。

使用者也可以直接通过给组件添加 `style` 来设置更细节的样式，比如定宽。

::: demo demo
```html
  <lt-button type="success" long>SUBMIT</lt-button>
  <br><br>
  <lt-button type="error" long>DELETE</lt-button>
```
:::

#### 不可用状态

通过添加`disabled`属性可将按钮设置为不可用状态。

::: demo demo
```html
     <lt-button>Default</lt-button>
     <lt-button disabled>Default(Disabled)</lt-button>
     <br><br>
     <lt-button type="primary">Primary</lt-button>
     <lt-button type="primary" disabled>Primary(Disabled)</lt-button>
     <br><br>
     <lt-button type="ghost">Ghost</lt-button>
     <lt-button type="ghost" disabled>Ghost(Disabled)</lt-button>
     <br><br>
     <lt-button type="dashed">Dashed</lt-button>
     <lt-button type="dashed" disabled>Dashed(Disabled)</lt-button>
     <br><br>
     <lt-button type="text">Text</lt-button>
     <lt-button type="text" disabled>Text(Disabled)</lt-button>
```
:::

#### 加载中状态

通过添加`loading`属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。

::: demo demo
```html
    <template>
        <lt-button type="primary" loading>Loading...</lt-button>
        <lt-button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Click me!</span>
            <span v-else>Loading...</span>
        </lt-button>
        <lt-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
            <span v-if="!loading2">Click me!</span>
            <span v-else>Loading...</span>
        </lt-button>
    </template>
    <script>
        export default {
            data () {
                return {
                    loading: false,
                    loading2: false
                }
            },
            methods: {
                toLoading () {
                    this.loading = true;
                },
                toLoading2 () {
                    this.loading2 = true;
                }
            }
        }
    </script>
```
:::

#### 按钮组合

将多个`Button`放入`ButtonGroup`内，可实现按钮组合的效果。

通过设置`ButtonGroup`的属性`size`为`large`和`small`，可将按钮组尺寸设置为大和小，不设置`size`，则为默认（中）尺寸。

通过设置`ButtonGroup`的属性`shape`为`circle`，可将按钮组形状设置为圆角。

::: demo demo
```html
     <h4>Basic</h4>
         <br><br>
         <lt-button-group>
             <lt-button>Cancel</lt-button>
             <lt-button type="primary">Confirm</lt-button>
         </lt-button-group>
         <lt-button-group>
             <lt-button disabled>Yesterday</lt-button>
             <lt-button disabled>Today</lt-button>
             <lt-button disabled>Tomorrow</lt-button>
         </lt-button-group>
         <lt-button-group>
             <lt-button type="primary">L</lt-button>
             <lt-button>M</lt-button>
             <lt-button type="ghost">M</lt-button>
             <lt-button type="dashed">R</lt-button>
         </lt-button-group>
         <br><br>
         <h4>Icons</h4>
         <br><br>
         <lt-button-group>
             <lt-button type="primary">
                 <lt-icon type="chevron-left"></lt-icon>
                 Backward
             </lt-button>
             <lt-button type="primary">
                 Forward
                 <lt-icon type="chevron-right"></lt-icon>
             </lt-button>
         </lt-button-group>
         <lt-button-group>
             <lt-button type="primary" icon="chevron-left"></lt-button>
             <lt-button type="primary" icon="chevron-right"></lt-button>
         </lt-button-group>
         <lt-button-group>
             <lt-button type="ghost" icon="mylike"></lt-button>
             <lt-button type="ghost" icon="mybuy"></lt-button>
             <lt-button type="ghost" icon="recycle"></lt-button>
             <lt-button type="ghost" icon="mydesign"></lt-button>
         </lt-button-group>
         <br><br>
         <h4>Circle</h4>
         <br><br>
         <lt-button-group shape="circle">
             <lt-button type="primary">
                 <lt-icon type="chevron-left"></lt-icon>
                 Backward
             </lt-button>
             <lt-button type="primary">
                 Forward
                 <lt-icon type="chevron-right"></lt-icon>
             </lt-button>
         </lt-button-group>
         <lt-button-group shape="circle">
             <lt-button type="primary" icon="chevron-left"></lt-button>
             <lt-button type="primary" icon="chevron-right"></lt-button>
         </lt-button-group>
         <lt-button-group shape="circle">
             <lt-button type="ghost" icon="mylike"></lt-button>
             <lt-button type="ghost" icon="mybuy"></lt-button>
             <lt-button type="ghost" icon="recycle"></lt-button>
             <lt-button type="ghost" icon="mydesign"></lt-button>
         </lt-button-group>
         <br><br>
         <h4>Size</h4>
         <br><br>
         <lt-button-group size="large">
             <lt-button type="ghost">Large</lt-button>
             <lt-button type="ghost">Large</lt-button>
         </lt-button-group>
         <lt-button-group>
             <lt-button type="ghost">Default</lt-button>
             <lt-button type="ghost">Default</lt-button>
         </lt-button-group>
         <lt-button-group size="small">
             <lt-button type="ghost">Small</lt-button>
             <lt-button type="ghost">Small</lt-button>
         </lt-button-group>
         <br><br>
         <lt-button-group size="large" shape="circle">
             <lt-button type="ghost">Large</lt-button>
             <lt-button type="ghost">Large</lt-button>
         </lt-button-group>
         <lt-button-group shape="circle">
             <lt-button type="ghost">Default</lt-button>
             <lt-button type="ghost">Default</lt-button>
         </lt-button-group>
         <lt-button-group size="small" shape="circle">
             <lt-button type="ghost">Small</lt-button>
             <lt-button type="ghost">Small</lt-button>
         </lt-button-group>
```
:::

#### 按钮组纵向排列

通过设置`ButtonGroup`的属性`vertical`，可以使按钮组纵向排列。

::: demo demo
```html
   <lt-button-group vertical>
       <lt-button type="ghost" icon="mylike"></lt-button>
       <lt-button type="ghost" icon="mybuy"></lt-button>
       <lt-button type="ghost" icon="recycle"></lt-button>
       <lt-button type="ghost" icon="mydesign"></lt-button>
   </lt-button-group>
```
:::

### API

#### Button props

属性|说明|类型|默认值
---|---|---|---
type|按钮类型，可选值为`primary`、`ghost`、`dashed`、`text`、`info`、`success`、`warning`、`error`或者不设置|String|-
size|按钮大小，可选值为`large`、`small`、`default`或者不设置|String|-
shape|按钮形状，可选值为`circle`或者不设置|String|-
long|开启后，按钮的长度为 100%|Boolean|false
html-type|设置`button`原生的`type`，可选值为`button`、`submit`、`reset`|String|button
disabled|设置按钮为禁用状态|Boolean|false
loading|设置按钮为加载中状态|Boolean|false
icon|设置按钮的图标类型|String|-
icon-size|设置按钮的图标大小|String|16

#### ButtonGroup props

属性|说明|类型|默认值
---|---|---|---
size|按钮组合大小，可选值为`large`、`small`、`default`或者不设置|String|-
shape|按钮组合形状，可选值为`circle`或者不设置|String|-
vertical|是否纵向排列按钮组|Boolean|false

::::vuecode::::
<script>
export default {
    data () {
        return {
            loading: false,
            loading2: false
        }
    },
    methods: {
        toLoading () {
            this.loading = true;
        },
        toLoading2 () {
            this.loading2 = true;
        }
    }
}
</script>
