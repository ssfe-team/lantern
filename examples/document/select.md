## Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

移动到下拉菜单上，展开更多操作。

:::demo demo
```html
    <template>
      <lt-select :d-data="dData"></lt-select>
    </template>
    
    <script>
      export default {
        data() {
          return {
            dData: [
              {
                des: '测试1'
              },
              {
                des: '测试2'
              },
              {
                des: '测试3',
                dis: true
              }
            ]
          }
        }
      }
    </script>
```
:::

### 触发方式

可以配置 click 激活或者 hover 激活。

:::demo demo
```html
 <template>
      <lt-select :d-data="dData"></lt-select>
      <lt-select :d-data="dData" trigger="click"></lt-select>
 </template>
```
:::

### 不同高度

Dropdown 组件支持自定义高度。

:::demo demo
```html
 <template>
      <lt-select :d-data="dData"></lt-select>
      <lt-select :d-data="dData" :size="32"></lt-select>
      <lt-select :d-data="dData" :size="48"></lt-select>
 </template>
```
:::

### Dropdown Attributes

参数|说明|类型|可选值|默认值
---|---|---|---|---|
dData|要显示的列表项数据|Array|-|[]
trigger|触发方式|String|hover/click|hover
size|下拉框高度|Number|-|28
height|下拉列表最大高度|Number|-|250

#### dData 说明

属性|说明|类型|默认值
---|---|---|---
des|列表中将要显示的名称|String|-
dis|禁用该项|Boolean|false

注：传入`dData`前须对其每个元素增加一个名称为`des`的属性，其值为列表中将要显示的名称，例：
```js
dData: [
  {
    des: '测试1'
  },
  {
    des: '测试2',
    dis: true // 禁用
  }
]
```

#### Dropdown events

名称|说明|返回值
---|---|---
lt-select|点击菜单项时触发|菜单项的所有数据

::::vuecode::::
<script>
  export default {
    data () {
      return {
        dData: [
          {
            des: '测试1'
          },
          {
            des: '测试2'
          },
          {
            des: '测试3',
            dis: true
          }
        ]
  
      }
    }
  }
</script>