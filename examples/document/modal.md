## Modal 弹框

### 概述

模态对话框，在浮层中显示，引导用户进行相关操作。

### 代码示例

#### 简易模式

只为要展示的内容提供遮罩、关闭按钮等，常用于展示图片等场景

::: demo demo
```html
    <template>
      <lt-button @click="simple = true">简易模式</lt-button>
      <lt-modal
        v-model="simple"
      >
        <img src="https://imgpub.chuangkit.com/designTemplate/2019/05/08/466042295_thumb" style="display: block;">
      </lt-modal>
    </template>
    
    <script>
      export default {
        data() {
          return {
            simple: false
          }
        },
      }
    </script>
```
:::

#### 基础用法

最简单的使用方法，通过控制属性 value 来显示 / 隐藏对话框。

可以使用 v-model 实现双向绑定。

::: demo demo
```html
    <template>
      <lt-button @click="modal1 = true">显示对话框</lt-button>
      <lt-modal
        v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel"
        :simple="false"
      >
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
      </lt-modal>
    </template>
    
    <script>
      export default {
        data() {
          return {
            modal1: false
          }
        },
        methods: {
          ok() {
            this.$message('点击了确定')
          },
          cancel() {
            this.$message('点击了取消')
          }
        }
      }
    </script>
```
:::

#### 全屏

设置属性 `fullscreen` 可以全屏显示。

设置属性 `footer-hide` 可以隐藏底部内容。

::: demo demo

```html
    <template>
      <lt-button @click="fullscreenModalShow = true">显示全屏对话框</lt-button>
      <lt-modal
        v-model="fullscreenModalShow"
        fullscreen
        title="全屏对话框的标题"
        @on-ok="ok"
        @on-cancel="cancel"
        :simple="false"
      >
        <div>这是一个全屏对话框</div>
      </lt-modal>
    </template>
    <script>
      export default {
        data() {
          return {
            fullscreenModalShow: false
          }
        },
        methods: {
          ok() {
            this.$message('点击了确定')
          },
          cancel() {
            this.$message('点击了取消')
          }
        }
      }
    </script>
```

:::

#### 自定义样式

Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。

通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。

::: demo demo
```html
    <template>
      <lt-button @click="modal2 = true">点我显示弹框</lt-button>
      <lt-modal
        v-model="modal2"
        :footer-hide="true"
        width="420"
        :simple="false"
      >
        <p style="font-size: 20px;font-weight: bold;text-align: center;">创建文件夹</p>
        <p style="font-weight: bold;">文件夹名称</p>
        <LtInput ref="input" autofocus placeholder="输入文件夹名称" />
        <LtButton type="primary" style="margin-top: 40px;" @click="createFolder">创建文件夹</LtButton>
      </lt-modal>
    </template>
    
    <script>
      export default {
        data() {
          return {
            modal2: false
          }
        }
      }
    </script>
```
:::

### Modal props

属性|说明|类型|默认值
---|---|---|---
value|对话框是否显示，可使用 v-model 双向绑定数据。|Boolean|false
title|对话框标题，如果使用 slot 自定义了页头，则 title 无效|String|-
closable|是否显示右上角的关闭按钮|Boolean|true
simple|是否使用简易模式（只显示内容，不包含 padding 、header、footer 等）|Boolean|true
mask-closable|是否允许点击遮罩层关闭|Boolean|true
scrollable|页面是否可以滚动|Boolean|false
ok-text|确定按钮文字|String|确定
cancel-text|取消按钮文字|String|取消
width|对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动 `auto`。当其值不大于 100 时以百分比显示，大于 100 时为像素|Number \| String|400
footer-hide|不显示底部|Boolean|false
styles|设置浮层样式，调整浮层位置等，该属性设置的是 `.lt-modal` 的样式|Object|-
class-name|设置对话框容器 `.lt-modal-wrap` 的类名，可辅助实现垂直居中等自定义效果|String|-
z-index|层级|Number|1000
transition-names|自定义显示动画，第一项是模态框，第二项是背景|Array|['ease', 'fade']
transfer|是否将弹层放置于 body 内|Boolean|true

### Modal events

事件名|说明|返回值
---|---|---
on-ok|点击确定的回调|无
on-cancel|点击取消的回调|无
on-visible-change|显示状态发生变化时触发|true \/ false

### Modal slot

名称|说明
---|---
header|自定义页头
footer|自定义页脚内容
close|自定义右上角关闭内容
无|对话框主体内容

::::vuecode::::
<script>
  module.exports = {
    data() {
      return {
        simple: false,
        modal1: false,
        modal2: false,
        fullscreenModalShow: false
      }
    },
    watch: {
      modal2(v) {
        if(v) {
          this.$nextTick(() => {
            this.$refs.input.focus()
          })
        }
      }
    },
    methods: {
      ok() {
        this.$message('点击了确定')
      },
      cancel() {
        this.$message('点击了取消')
      },
      createFolder() {
        this.$message('创建成功')
        this.modal2 = false
      }
    }
  };
</script>
