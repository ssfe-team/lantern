## Slider 滑块

滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。

### 代码示例

#### 基础用法

滑块的基本用法，可以使用 v-model 双向绑定数据。

通过设置属性 `range`开启双滑块，通过设置属性 `disabled` 禁用滑块。

注意，单滑块时，`value` 格式为数字，当开启双滑块时，`value` 为长度是2的数组，且每项为数字。

::: demo demo
```html
   <lt-slider v-model="value1"></lt-slider>
   <lt-slider v-model="value2" range></lt-slider>
   <lt-slider v-model="value3" range disabled></lt-slider>
```
:::

::::vuecode::::
<script>
export default {
    data () {
        return {
            value1: 25,
            value2: [20, 50],
            value3: [20, 50]
        }
    }
}
</script>