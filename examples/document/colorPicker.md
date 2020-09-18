## color-picker 颜色选择器

### 概述

用于颜色选择，或者吸取指定图片的色值。

### 基础用法

:::demo demo
```html
<lt-color-picker v-model="color1" />

```
:::

### 吸取指定图片颜色

:::demo demo
```html
<lt-color-picker v-model="color2" :absorbImgUrl="absorbImgUrl" />

```
:::

### 预设颜色（最多只能预设5个色值）

:::demo demo
```html
<lt-color-picker v-model="color3" :predefine="predefineColors" />

```
:::

### 可编辑

:::demo demo
```html
<lt-color-picker v-model="color4" edit />

```
:::

### API

#### Switch props

属性|说明|类型|默认值
---|---|---|---
value|绑定值，可以使用 v-model 双向绑定数据|String|true
absorbImgUrl|吸取颜色的图片地址，|String|false
edit|是否开启编辑状态|Boolean|false
predefineColors|预定义颜色|Array|false

::::vuecode::::
<script>
export default {
  data() {
    return {
        color1: '#D5E4D1',
        color2: '#D5E4D1',
        color3: '#D5E4D1',
        color4: '#D5E4D1',
        absorbImgUrl: 'https://imgpub.chuangkit.com/designTemplate/2018/09/17/436330385_thumb?v=1587524880000&x-oss-process=image/resize,w_600/format,png',
        predefineColors: [
            '#581ab1',
            '#1ab192',
            '#b1941a',
            '#000000',
            '#fb0000',
        ],
    }
  }
}
</script>