## Selector 选择器

### 概述

当选项过多时，使用下拉菜单展示并选择内容。

### 代码示例

#### 基础用法

点击选择器，展开更多操作。

::: demo demo :::
```html
<template>
  <lt-selector :selectedValue="selectedValue1">
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :value="item"
      @select-value="selectValueHandle1"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        list: ['北京','上海','深圳','西宁','南阳']
        selectedValue1: ''.
      },
      methods: {
        selectValueHandle1 (e) {
          this.selectedValue1 = e
          this.$message({
            message: e
          });
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
  <lt-selector trigger="hover" :selectedValue="selectedValue2">
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :value="item"
      @select-value="selectValueHandle2"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        list: ['北京','上海','深圳','西宁','南阳'],
        selectedValue2: ''.
      }
    },
    methods: {
      selectValueHandle2 (e) {
        this.selectedValue2 = e
        this.$message({
          message: e
        });
      }
    }
  }
</script>
```
:::

#### 尺寸

通过设置`selectorSize`属性调整选择器的尺寸,设置`optionSize`属性调整选择列表的尺寸。

::: demo demo :::
```html
<template>
  <lt-selector 
    :selectedValue="selectedValue3" 
    :selectorSize="selectorSize"
  >
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :value="item"
      :optionSize="optionSize"
      @select-value="selectValueHandle3"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        list: ['北京','上海','深圳','西宁','南阳'],
        selectorSize: {
          width: '100px',
          height: '25px'
        },
        optionSize: {
          width: '100px',
          height: '25px'
        },
        selectedValue3: '',
      }
    },
    methods: {
      selectValueHandle3 (e) {
        this.selectedValue3 = e
        this.$message({
          message: e
        });
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
  <lt-selector 
    :selectedValue="selectedValue4"  
    clearable
    @clear-value="clearValueHandle"
  >
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :value="item"
      @select-value="selectValueHandle4"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        list: ['北京','上海','深圳','西宁','南阳'],
      }
    },
    methods: {
      selectValueHandle4 (e) {
        this.selectedValue4 = e
        this.$message({
          message: e
        });
      },
      clearValueHandle () {
        this.selectedValue4 = ''
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
  <lt-selector :selectedValue="selectedValue5">
    <lt-option
      v-for="(item, index) in list1"
      :key="index"
      :value="item"
      @select-value="selectValueHandle5"
    ></lt-option>
  </lt-selector>
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
        selectedValue5: '',
      }
    },
    methods: {
    selectValueHandle5 (e) {
      this.selectedValue5 = e
      this.$message({
        message: e
      });
    }
  }
</script>
```
:::

### API

#### selector props

属性|说明|类型|默认值
---|---|---|---|---
selectedValue | 选择项 | String | -
placeholder | 默认显示 | String | 请选择
trigger | 触发方式 | String | click
clearable | 清空选择项 | Boolean | false
selectorSize | 选择器尺寸 | Object | 190 x 40

#### list props

属性|说明|类型|默认值
---|---|---|---|---
value | 列表中将要显示的名称 | String / Object | -
disabled | 禁用该项 | Boolean | false
optionSize | 列表项尺寸 | Object | 190 x 32

#### selector evevt 说明

事件名|说明|返回值
---|---|---
select-value | 返回选中的列表项的值 | 当前选中项
clear-value | 清除选中的列表项 | -

::::vuecode::::
<script>
    export default {
        data () {
            return {
                list: ['北京','上海','深圳','西宁','南阳'],
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
                    width: '100px',
                    height: '25px'
                },
              optionSize: {
                width: '100px',
                height: '25px'
              },
              selectedValue1: '',
              selectedValue2: '',
              selectedValue3: '',
              selectedValue4: '',
              selectedValue5: '',

            }
        },
      methods: {
        selectValueHandle1 (e) {
          this.selectedValue1 = e
          this.$message({
            message: e
          });
        },
        selectValueHandle2 (e) {
          this.selectedValue2 = e
          this.$message({
            message: e
          });
        },
        selectValueHandle3 (e) {
          this.selectedValue3 = e
          this.$message({
            message: e
          });
        },
        selectValueHandle4 (e) {
          this.selectedValue4 = e
          this.$message({
            message: e
          });
        },
        selectValueHandle5 (e) {
          this.selectedValue5 = e
          this.$message({
            message: e
          });
        },
        clearValueHandle () {
          this.selectedValue4 = ''
        }
      }
    }
</script>
