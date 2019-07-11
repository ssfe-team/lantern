## Steps 步骤条

### 概述

拆分某项流程的步骤，引导用户按流程完成任务。

### 代码示例

#### 基础用法

最基础的用法，通过设置`current`属性设置当前步骤。

::: demo demo :::
```html
<lt-steps :current="0">
  <lt-step title="步骤 1" content="这里是该步骤的描述信息" stepNum="1"></lt-step>
  <lt-step title="步骤 2" content="这里是该步骤的描述信息" stepNum="2"></lt-step>
  <lt-step title="步骤 3" content="这里是该步骤的描述信息" stepNum="3"></lt-step>
</lt-steps>
```
:::

#### 垂直方向

设置属性`isVertical`在垂直方向展示。

::: demo demo :::
```html
<lt-steps :current="3" :isVertical="true" :simple="true">
  <lt-step title="选择成品模板或自定义空白画布">
    <lt-icon type="star" color="gold"></lt-icon>
  </lt-step>
  <lt-step title="进入画布，修改文字或图片，简单的点选或托拉拽实现创意特效">
    <lt-icon type="star" color="gold"></lt-icon>
  </lt-step>
  <lt-step title="下载本地或在线印刷">
    <span class="icon-inner" style="height: 14px;width: 14px;border-radius: 50%;background: #0773FC;"></span>
  </lt-step>
</lt-steps>
```
:::

#### 切换步骤

点击`下一步`按钮可以切换当前进度状态。

::: demo demo :::
```html
<lt-steps :current="current">
  <lt-step title="步骤 1" stepNum="1"></lt-step>
  <lt-step title="步骤 2" stepNum="2"></lt-step>
  <lt-step title="步骤 3" stepNum="3"></lt-step>
</lt-steps>
<lt-button @click="next" style="margin-top: 30px;">下一步</lt-button>
<script>
  export default {
    data () {
      return {
         current: 0
      }
    },
    methods: {
      next () {
        if (this.current < 3) {
          this.current += 1
        } else { 
          this.current = 0
        }
      }
    }
  }
</script>
```
:::

### API

#### Steps props

属性|说明|类型|默认值
---|---|---|---
current|当前步骤|Number|0
isVertical|步骤条竖向|Boolean|false
simple|步骤条简洁版|Boolean|false
#### Step props

属性|说明|类型|默认值 
---|---|---|---
stepNum|步骤的图标内的内容，支持slot|String|-
title|步骤的标题|String|-
content|步骤的详细描述，可选|String|-

::::vuecode::::
<script>
  export default {
    data () {
      return {
        current: 0
      }
    },
    methods: {
      next () {
        if (this.current < 3) {
          this.current += 1
        } else {
          this.current = 0
        }
      }
    }
  }
</script>

<style lang="less">
.demo-breadcrumb-separator{
  color: #ff5500;
  padding: 0 5px;
}
</style>
