## Selector 选择器

### 概述

当选项过多时，使用下拉菜单展示并选择内容。

### 代码示例

#### 基础用法

点击选择器，展开更多操作。

::: demo demo :::
```html
<template>
    <lt-selector :list="list1"></lt-selector>
</template>
<script>
    export default {
        data () {
            return {
                list1: [
                    {
                        label: '北京',
                    },
                    {
                        label: '上海',
                    },
                    {
                        label: '深圳',
                    },
                    {
                        label: '西宁',
                        disabled: true
                    },
                    {
                        label: '南阳'
                    }
                ],
                selectorSize: {
                    width: '80px',
                    height: '25px'
                }
            }
        }
    }
</script>
```
:::

### 触发方式

可以设置 `click`或 `hover` 激活。

:::demo demo
```html
 <template>
      <lt-selector :list="list2" trigger="hover"></lt-selector>
 </template>
 <script>
    export default {
        data () {
            return {
                list2: [
                    {
                        label: '北京',
                    },
                    {
                        label: '上海',
                    },
                    {
                        label: '深圳',
                    },
                    {
                        label: '西宁',
                        disabled: true
                    },
                    {
                        label: '南阳'
                    }
                ]
            }
        }
    }
</script>
```
:::

#### 选择器尺寸

通过设置`size`属性调整选择器大小尺寸。

::: demo demo :::
```html
<template>
    <lt-selector :list="list3" :size="size"></lt-selector>
</template>
<script>
    export default {
        data () {
            return {
                list3: [
                    {
                        label: '北京',
                    },
                    {
                        label: '上海',
                    },
                    {
                        label: '深圳',
                    },
                    {
                        label: '西宁',
                    },
                    {
                        label: '南阳'
                    }
                ],
                size: {
                    width: '100px',
                    height: '20px'
                }
            }
        }
    }
</script>
```
:::

### 清空选择项

可以设置`clearable`清空选择项。

:::demo demo
```html
 <template>
      <lt-selector :list="list4" clearable></lt-selector>
 </template>
 <script>
    export default {
        data () {
            return {
                list4: [
                    {
                        label: '北京',
                    },
                    {
                        label: '上海',
                    },
                    {
                        label: '深圳',
                    },
                    {
                        label: '西宁',
                        disabled: true
                    },
                    {
                        label: '南阳'
                    }
                ]
            }
        }
    }
</script>
```
:::

### 禁用选择项

可以设置`disabled`清空选择项。

:::demo demo
```html
 <template>
      <lt-selector :list="list5"></lt-selector>
 </template>
 <script>
    export default {
        data () {
            return {
                list5: [
                    {
                        label: '北京',
                    },
                    {
                        label: '上海',
                    },
                    {
                        label: '深圳',
                    },
                    {
                        label: '西宁',
                        disabled: true
                    },
                    {
                        label: '南阳'
                    }
                ]
            }
        }
    }
</script>
```
:::

### API

#### selector props

属性|说明|类型|默认值
---|---|---|---|---
list | 选择项列表 | Array | -
trigger | 触发方式 | String |click
clearable | 清空选择项 | Boolean | false
size | 设置选择器尺寸 | Object | 200x30

#### list 说明

属性|说明|类型|默认值
---|---|---|---|---
label | 列表中将要显示的名称 | String | -
disabled | 禁用该项 | Boolean | false

#### selector evevt 说明

事件名|说明|返回值
---|---|---
select-value | 返回选中的列表项的`label`值 | 当前选中项

::::vuecode::::
<script>
    export default {
        data () {
            return {
                list1: [
                    {
                        label: '北京'
                    },
                    {
                        label: '上海'
                    },
                    {
                        label: '深圳'
                    },
                    {
                        label: '西宁'
                    },
                    {
                        label: '南阳'
                    }
                ],
                list2: [
                    {
                        label: '北京'
                    },
                    {
                        label: '上海'
                    },
                    {
                        label: '深圳'
                    },
                    {
                        label: '西宁'
                    },
                    {
                        label: '南阳'
                    }
                ],
                list3: [
                    {
                        label: '北京'
                    },
                    {
                        label: '上海'
                    },
                    {
                        label: '深圳'
                    },
                    {
                        label: '西宁'
                    },
                    {
                        label: '南阳'
                    }
                ],
                list4: [
                    {
                        label: '北京'
                    },
                    {
                        label: '上海'
                    },
                    {
                        label: '深圳'
                    },
                    {
                        label: '西宁'
                    },
                    {
                        label: '南阳'
                    }
                ],
                list5: [
                    {
                        label: '北京'
                    },
                    {
                        label: '上海'
                    },
                    {
                        label: '深圳'
                    },
                    {
                        label: '西宁',
                        disabled: true
                    },
                    {
                        label: '南阳'
                    }
                ],
                size: {
                    width: '80px',
                    height: '25px'
                }
            }
        }
    }
</script>