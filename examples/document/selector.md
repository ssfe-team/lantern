## Selector 选择器

### 概述

当选项过多时，使用下拉菜单展示并选择内容。

### 代码示例

#### 基础用法

点击选择器，展开更多操作。

::: demo demo :::
```html
<template>
  <lt-selector>
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :isActive="selectedIndex1 === index"
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
        selectedIndex1: -1,
      },
      methods: {
        selectValueHandle1 (e) {
          this.$message({
            message: e
          });
          for (let i=0; i<this.list.length; i++) {
            if (this.list[i] === e) {
              this.selectedIndex1 = i
            }
          }
        },
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
  <lt-selector trigger="hover">
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :value="item"
      :isActive="selectedIndex2 === index"
      @select-value="selectValueHandle2"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        list: ['北京','上海','深圳','西宁','南阳'],
        selectedIndex2: -1,
      }
    },
    methods: {
      selectValueHandle2 (e) {
        this.$message({
          message: e
        });
        for (let i=0; i<this.list.length; i++) {
          if (this.list[i] === e) {
            this.selectedIndex2 = i
          }
        }
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
  <lt-selector :selectorSize="selectorSize">
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :value="item"
      :isActive="selectedIndex3 === index"
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
        selectedIndex3: -1,
      }
    },
    methods: {
      selectValueHandle3 (e) {
        this.$message({
          message: e
        });
        for (let i=0; i<this.list.length; i++) {
          if (this.list[i] === e) {
            this.selectedIndex3 = i
          }
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
  <lt-selector 
    clearable
    @clear-value="clearValueHandle"
  >
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :value="item"
      :isActive="selectedIndex4 === index"
      @select-value="selectValueHandle4"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        list: ['北京','上海','深圳','西宁','南阳'],
        selectedIndex4: -1,
      }
    },
    methods: {
      selectValueHandle4 (e) {
        this.$message({
          message: e
        });
        for (let i=0; i<this.list.length; i++) {
          if (this.list[i] === e) {
            this.selectedIndex4 = i
          }
        }
      },
      clearValueHandle () {
        this.selectedIndex4 = -1
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
  <lt-selector>
    <lt-option
      v-for="(item, index) in list1"
      :key="index"
      :value="item"
      :isActive="selectedIndex5 === index"
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
        selectedIndex5: -1,
      }
    },
    methods: {
    selectValueHandle5 (e) {
      this.$message({
        message: e
      });
      for (let i=0; i<this.list.length; i++) {
        if (this.list[i] === e) {
          this.selectedIndex5 = i
        }
      }
    }
  }
</script>
```
:::

### 默认选中项，更改选中项

可以设置`defaultValue`默认选中项，后续可更改。

:::demo demo
```html

<template>
  <lt-button @click="getDefaultValue">置空选择</lt-button>
  <lt-selector :defaultValue="defaultValue">
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :isActive="selectedIndex1 === index"
      :value="item"
      @select-value="selectValueHandle6"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        list: ['北京','上海','深圳','西宁','南阳']
        selectedIndex1: -1,
        defaultValue: '深圳'
      },
      methods: {
        selectValueHandle6 (e) {
          this.$message({
            message: e
          });
          for (let i=0; i<this.list.length; i++) {
            if (this.list[i] === e) {
              this.selectedIndex1 = i
            }
          }
          this.defaultValue = e
        },
        getDefaultValue () {
          this.defaultValue = ''
        }
      }
    }
  }
</script>
```
:::

### 设置显示对象内属性的值

可以设置`suffix`设置。

:::demo demo
```html

<template>
 <lt-button @click="getDefaultStudentValue">选择二麻子</lt-button>
  <lt-selector :defaultValue="defaultStudentVal" suffix='name'>
    <lt-option
      v-for="(item, index) in students"
      :key="index"
      :isActive="studentIndex === index"
      :value="item"
      suffix='name'
      @select-value="selecetStudent"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        students: [
                {
                  name:'张山',
                  age: 18
                },
                {
                  name:'李四',
                  age: 19
                },
                {
                  name:'王五',
                  age: 16
                },
                {
                  name:'李二麻子',
                  age: 22
                },
                {
                  name:'小红',
                  age: 13
                },
              ]
        studentIndex: -1,
        defaultStudentVal: { name:'小红', age: 13 },
      },
      methods: {
        selecetStudent (e) {
          this.$message({
            message: e
          });
          for (let i=0; i<this.students.length; i++) {
            if (this.students[i].name === e) {
              this.studentIndex = i
            }
          }
        },
        getDefaultStudentValue () {
          this.defaultStudentVal = { name:'李二麻子',age: 22 }
        }
      }
    }
  }
</script>
```
:::

#### icon样式

默认为`arrow-dropdown`，可从 <a href='/icon'>icon图标</a> 内设置多种样式显示

::: demo demo :::
```html
<template>
  <lt-selector :iconType="iconType">
    <lt-option
      v-for="(item, index) in list"
      :key="index"
      :isActive="selectedIndex1 === index"
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
        selectedIndex1: -1,
        iconType: 'ios-arrow-down'
      },
      methods: {
        selectValueHandle1 (e) {
          this.$message({
            message: e
          });
          for (let i=0; i<this.list.length; i++) {
            if (this.list[i] === e) {
              this.selectedIndex1 = i
            }
          }
        },
      }
    }
  }
</script>
```
:::
### 设置下拉菜单是否显示图片

设置`picUrl`后在子菜单内显示图片

一般是用来显示头像（建议使用正方形，`imgStyle`最大高度为列表项尺寸的80%）

:::demo demo
```html

<template>
  <lt-selector :defaultValue="defaultStudentVal" suffix='name'>
    <lt-option
      v-for="(item, index) in studentsSrc"
      :key="index"
      :isActive="studentIndex === index"
      :value="item"
      :picUrl="item.src"
      suffix='name'
      @select-value="selecetStudent"
    ></lt-option>
  </lt-selector>
</template>
<script>
  export default {
    data () {
      return {
        studentsSrc: [
         {
           name:'张山',
           age: 18,
           src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
         },
         {
           name:'李四',
           age: 19,
           src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
         },
         {
           name:'王五',
           age: 16,
           src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
         },
         {
           name:'李二麻子',
           age: 22,
           src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
         },
          {
            name:'小红',
            age: 13,
            src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
          },
        ],
        studentIndex: -1,
      },
      methods: {
        selecetStudent (e) {
          this.$message({
            message: e
          });
          for (let i=0; i<this.students.length; i++) {
            if (this.students[i].name === e) {
              this.studentIndex = i
            }
          }
        },
      }
    }
  }
</script>
```

:::
或者使用`<slot>`自定义需要显示的内容
:::demo demo
```html
<template>
  <lt-selector :selectorSize="thirdpartySize">
    <lt-option
      v-for="(item, index) in thirdpartyList"
      :key="index"
      :isActive="activeIndex === index"
      :value="item"
      :optionSize="thirdpartySize"
      suffix='name'
      @select-value="selecetBgImageItem"
    >
      <span class="thirdparty-icon" :class="`icon-${item.id}`"></span>
    </lt-option>
  </lt-selector>
</template>

<script>
  export default {
    data () {
      return {
        thirdpartyList: [
        {
          name:'微信',
          id: 3,
        },
        {
          name:'新浪微博',
          id: 1,
        },
        {
          name:'QQ',
          id: 2,
        }],
        activeIndex: -1,
        thirdpartySize: {
          height: '40px'
        }
      },
      methods: {
        selecetBgImageItem (e) {
          this.$message({
            message: e
          });
          for (let i = 0; i < this.thirdpartyList.length; i++) {
            if (this.thirdpartyList[i].name === e) {
              this.activeIndex = i
            }
          }
        },
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
placeholder | 默认显示 | String | 请选择
trigger | 触发方式 | String | click
clearable | 清空选择项 | Boolean | false
selectorSize | 选择器尺寸 | Object | { width: '190px', height: '40px' }
defaultValue | 默认选中的项（后续可更改） | String / Object | -
suffix | 传入对象后显示对象内属性的值 | String | false
iconType | 选择框右侧的icon样式 | String | arrow-dropdown

#### list props

属性|说明|类型|默认值
---|---|---|---|---
value | 列表中将要显示的名称 | String / Object | -
disabled | 禁用该项 | Boolean | false
optionSize | 列表项尺寸 | Object | { width: '190px', height: '32px' }
isActive | 选中高亮 | Boolean | false
suffix | 传入对象后显示对象内属性的值 | String | false
picUrl | 设置<img>的图片地址 | String | -
imgStyle | 图片的style样式 | Object | { width: '24px', height: '24px' }

#### option evevt 说明

事件名|说明|返回值
---|---|---
select-value | 返回选中的列表项的值(根据你传入的type) | 当前选中项
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
      students: [
        {
          name:'张山',
          age: 18
        },
        {
          name:'李四',
          age: 19
        },
        {
          name:'王五',
          age: 16
        },
        {
          name:'李二麻子',
          age: 22
        },
        {
          name:'小红',
          age: 13
        },
      ],
      selectorSize: {
        width: '100px',
        height: '25px'
      },
      optionSize: {
        width: '100px',
        height: '25px'
      },
      selectedIndex1: -1,
      selectedIndex2: -1,
      selectedIndex3: -1,
      selectedIndex4: -1,
      selectedIndex5: -1,
      studentIndex: -1,
      defaultValue: '深圳',
      defaultStudentVal: { name:'小红', age: 13 },
      iconType: 'ios-arrow-down',
      studentsSrc: [
        {
          name:'张山',
          age: 18,
          src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
        },
        {
          name:'李四',
          age: 19,
          src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
        },
        {
          name:'王五',
          age: 16,
          src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
        },
        {
          name:'李二麻子',
          age: 22,
          src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
        },
        {
          name:'小红',
          age: 13,
          src:'//imgpub.chuangkit.com/userHead/5189665@1l_160w.src?v=1537182203000'
        },
     ],
      thirdpartyList: [
      {
        name:'微信',
        id: 3,
      },
      {
        name:'新浪微博',
        id: 1,
      },
      {
        name:'QQ',
        id: 2,
      }],
      activeIndex: -1,
      thirdpartySize: {
        height: '40px'
      }
    }
  },
  methods: {
    selectValueHandle1 (e) {
      this.$message({
        message: e
      });
      for (let i=0; i<this.list.length; i++) {
        if (this.list[i] === e) {
          this.selectedIndex1 = i
        }
      }
    },
    selectValueHandle2 (e) {
      this.$message({
        message: e
      });
      for (let i=0; i<this.list.length; i++) {
        if (this.list[i] === e) {
          this.selectedIndex2 = i
        }
      }
    },
    selectValueHandle3 (e) {
      this.$message({
        message: e
      });
      for (let i=0; i<this.list.length; i++) {
        if (this.list[i] === e) {
          this.selectedIndex3 = i
        }
      }
    },
    selectValueHandle4 (e) {
      this.$message({
        message: e
      });
      for (let i=0; i<this.list.length; i++) {
        if (this.list[i] === e) {
          this.selectedIndex4 = i
        }
      }
    },
    selectValueHandle5 (e) {
      this.$message({
        message: e
      })
      for (let i=0; i<this.list.length; i++) {
        if (this.list[i] === e) {
          this.selectedIndex5 = i
        }
      }
    },
    selectValueHandle6 (e) {
      this.$message({
        message: e
      });
      for (let i=0; i<this.list.length; i++) {
        if (this.list[i] === e) {
          this.selectedIndex1 = i
        }
      }
      this.defaultValue = e
    },
    selecetStudent (e) {
      this.$message({
        message: e
      });
      for (let i=0; i<this.students.length; i++) {
        if (this.students[i].name === e) {
          this.studentIndex = i
          }
        }
    },
    clearValueHandle () {
      this.selectedIndex4 = -1
    },
    getDefaultValue () {
      this.defaultValue = ''
    },
    getDefaultStudentValue () {
       this.defaultStudentVal = { name:'李二麻子',age: 22 }
    },
    selecetBgImageItem (e) {
      this.$message({
        message: e
      });
      for (let i = 0; i < this.thirdpartyList.length; i++) {
        if (this.thirdpartyList[i].name === e) {
          this.activeIndex = i
        }
      }
    },
  }
}
</script>
<style lang="less" scoped>
  .thirdparty-icon {
    width: 24px;
    height: 24px;
    background: url('../static/thirdpartyIcon.svg') no-repeat 0 0;
    margin-right: 12px;
    &.icon-1 {
      background-position-x: -48px;
    }
    &.icon-2 {
      background-position-x: -96px;
    }
    &.icon-3 {
      background-position-x: -24px;
    }
  }
</style>
