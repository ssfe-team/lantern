## Selector 选择器

### 概述

当选项过多时，使用下拉菜单展示并选择内容。

### 代码示例

#### 基础用法


::: demo demo :::
```html
<lt-selector :list="list"><lt-option></lt-option></lt-selector>
<script>
    export default {
        data () {
            return {
                list: ['北京', '上海', '深圳', '西宁', '南阳']
            }
        }
    }
</script>
```
:::

### API

#### selector props

属性|说明|类型|默认值
---|---|---|---
list | 选择项列表 | Array | -


#### option props

属性|说明|类型|默认值
---|---|---|---
list | 选择项列表 | Array | -

::::vuecode::::
<script>
    export default {
        data () {
            return {
                list: ['北京', '上海', '深圳', '西宁', '南阳']
            }
        }
    }
</script>