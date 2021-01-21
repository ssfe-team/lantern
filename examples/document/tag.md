
## Tag 标签

#### 基本用法

基本的tag用法，可关闭

::: demo demo
```html
  <template>
    <lt-row>
      <lt-tag>标签一</lt-tag>
      <lt-tag closable>非受控标签</lt-tag>
      <lt-tag closable :visible="visible1" @close="onClose1">受控标签</lt-tag>
      <lt-tag closable v-model="visible2">v-model绑定</lt-tag>
    </lt-row>
  </template>
  <script>
    export default{
      data() {
        return {
          visible1: true,
          visible2: true,
        }
      },
      methods: {
        onClose1() {
          // this.visible1 = false
        }
      }
    }
  </script>
```
:::

#### 样式类型

内置六种颜色的标签，默认gray，如需其他颜色的标签，可设置...

::: demo demo
```html
  <lt-row>
    <lt-tag color="gray">标签一</lt-tag>
    <lt-tag color="blue">标签二</lt-tag>
    <lt-tag color="pink">标签三</lt-tag>
    <lt-tag color="oranage">标签四</lt-tag>
    <lt-tag color="green">标签五</lt-tag>
    <lt-tag color="transparent">标签六</lt-tag>
    <lt-tag color="#00ff00" bgcColor="#ff0000">自定义颜色</lt-tag>
  </lt-row>
  <lt-row>
    <lt-tag closable>标签一</lt-tag>
    <lt-tag color="blue" closable>标签二</lt-tag>
    <lt-tag color="pink" closable>标签三</lt-tag>
    <lt-tag color="oranage" closable>标签四</lt-tag>
    <lt-tag color="green" closable>标签五</lt-tag>
    <lt-tag color="transparent" closable>标签六</lt-tag>
  </lt-row>
```
:::

#### 标签尺寸

内置三种标签尺寸，默认normal，如需其他尺寸大小，可设置...

::: demo demo
```html
  <lt-row align="middle">
    <lt-tag size="small">小型标签</lt-tag>
    <lt-tag size="normal">默认标签</lt-tag>
    <lt-tag size="large" closable>大型标签</lt-tag>
    <lt-tag :size="20" closable>自定义尺寸</lt-tag>
  </lt-row>
```
:::

#### 动态编辑标签

动态编辑标签可使用标签组，可设置内置颜色及尺寸
::: demo demo
```html
  <template>
    <lt-row>
      <lt-tag-group
        v-model="tagValue1"
        closable
        canAdd
        size="small"
        :maxLength="5"
      />
    </lt-row>
    <lt-row>
      <lt-tag-group
        v-model="tagValue2"
        :closable="closableTagValue2"
        canAdd
        :maxLength="5"
        @change="changeTagValue2"
      />
    </lt-row>
    <lt-row>
      <lt-tag-group
        v-model="tagValue3"
        closable
        canAdd
        size="large"
        color="pink"
        :maxLength="3"
      />
    </lt-row>
  </template>
<script>
  export default{
    data() {
      return {
        tagValue1: ['标签一', '标签二'],
        tagValue2: ['标签一', '标签二'],
        tagValue3: ['标签一']
      }
    },
    computed: {
      closableTagValue2() {
        return this.tagValue2.filter(value => value !== '标签一')
      },
    },
    methods: {
      changeTagValue2(values) {
        console.log(values, 'changeTagValue2')
      }
    }
  }
</script>
```
:::

### Tag API

#### tag props

参数|说明|类型|默认值
----|----|----|----
visible（v-model）|是否显示（若设置则为受控组件）|Boolean|true
closable|是否可关闭|Boolean|false
color|主题颜色（内置主题色或自定义字体颜色）|'gray','blue', 'pink', 'oranage', 'green', 'transparent', String|'gray'
bgcColor|背景颜色（color为自定义字体颜色时生效）|Sring|--
size|尺寸（内置尺寸大小或自定义大小）|'normal', 'small', 'large', Number|'normal'

#### tag event

事件名称|说明|回调参数
----|----|----
close|关闭tag时触发|--
click|点击tag时触发|--

### TagGroup API

#### tag-group props

参数|说明|类型|默认值
----|----|----|----
value（v-model）|一组标签的显示内容|Array|[]
closable|是否可关闭（Boolean决定整组标签的可关闭状态，Array中存在的value可关闭）|Boolean/Array|false
canAdd|是否可添加|Boolean|false
maxLength|最多显示个数（若可添加，则达到最大数量不显示添加按钮）|Number|--
color|主题颜色（只支持内置主题色）|'gray','blue', 'pink', 'oranage', 'green', 'transparent'|'gray'
size|尺寸（只支持内置尺寸大小）|'normal', 'small', 'large'|'normal'

#### tag-group event

事件名称|说明|回调参数
----|----|----
change|tag更改时（添加、删除）触发|更改后的value

::::vuecode::::

<script>
  export default{
    data() {
      return {
        visible1: true,
        visible2: true,
        tagValue1: ['标签一', '标签二'],
        tagValue2: ['标签一', '标签二'],
        tagValue3: ['标签一']
      }
    },
    computed: {
      closableTagValue2() {
        return this.tagValue2.filter(value => value !== '标签一')
      }
    },
    methods: {
      onClose1() {
        // this.visible1 = false;
      },
      changeTagValue2(values) {
        console.log(values, 'changeTagValue2')
      }
    },
  }
</script>
<style lang='less'>
.demo-code-result {
  .lt-row {
    margin: 32px 16px;
  }
  .lt-tag {
    margin-right: 24px;
  }
}
</style>
