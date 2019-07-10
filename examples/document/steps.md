## Steps 步骤条

### 概述

拆分某项流程的步骤，引导用户按流程完成任务。

### 代码示例

#### 基础用法

最基础的用法，通过设置`current`属性设置当前步骤。

::: demo demo :::
```html
<lt-steps :current="0">
    <lt-step title="步骤 1" description="描述信息描述信息描述信息描述信息" iconinner="1"></lt-step>
    <lt-step title="步骤 2" description="描述信息描述信息描述信息描述信息" iconinner="2"></lt-step>
    <lt-step title="步骤 3" description="描述信息描述信息描述信息描述信息" iconinner="3"></lt-step>
</lt-steps>
```
:::

#### 简洁版

设置属性`size`为 small 使用简洁版。

::: demo demo :::
```html
<lt-steps :current="1" :size='size'>
    <lt-step title="步骤 1" description="描述信息描述信息描述信息描述信息" iconinner="1"></lt-step>
    <lt-step title="步骤 2" description="描述信息描述信息描述信息描述信息" iconinner="2"></lt-step>
    <lt-step title="步骤 3" description="描述信息描述信息描述信息描述信息" iconinner="3"></lt-step>
</lt-steps>
<script>
  export default {
    data () {
      return {
        size: 'small'
      }
    }
  }
</script>
```
:::

#### 垂直方向

设置属性`direction`为 vertical 在垂直方向展示。

::: demo demo :::
```html
<lt-steps :current="3" :direction="direction">
    <lt-step title="步骤 1" description="描述信息描述信息描述信息描述信息" iconinner="1"></lt-step>
    <lt-step title="步骤 2"  description="描述信息描述信息描述信息描述信息" >
      <lt-icon type="star" color="gold"></lt-icon>
    </lt-step>
    <lt-step title="步骤 3">
      <span class="icon-inner" style="height: 14px;width: 14px;border-radius: 50%;background: #0773FC;"></span>
    </lt-step>
</lt-steps>
<script>
  export default {
    data () {
      return {
        direction: 'vertical'
      }
    }
  }
</script>
```
:::

#### 切换步骤

点击`下一步`按钮可以切换当前进度状态。

::: demo demo :::
```html
<lt-steps :current="current">
    <lt-step title="步骤 1" description="描述信息描述信息描述信息描述信息" icon="" iconinner="1"></lt-step>
    <lt-step title="步骤 2" description="描述信息描述信息描述信息描述信息" iconinner="2"></lt-step>
    <lt-step title="步骤 3" description="描述信息描述信息描述信息描述信息" iconinner="3"></lt-step>
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
direction|步骤条方向|String | horizontal
size|步骤条简洁版|String | -
#### Step props

属性|说明|类型|默认值 
---|---|---|---
iconinner|步骤的图标内的内容,支持slot|String|-
title|步骤的标题|String|-
description|步骤的详细描述|String|-


::::vuecode::::
<script>
  export default {
    data () {
      return {
        size: 'small',
        direction: 'vertical',
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
