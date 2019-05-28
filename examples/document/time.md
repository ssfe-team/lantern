## Time 相对时间

### 概述

常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。

### 代码示例

#### 基础用法


::: demo demo :::
```html
<LtTime :time="time1"></LtTime>
  <br>
<LtTime :time="time2"></LtTime>
  <br>
<LtTime :time="time4" :days="3"></LtTime>
  <br>
<LtTime :time="time3" :interval="1"></LtTime>
  <br>
<LtTime :time="time3" type="date"></LtTime>
  <br>
<LtTime :time="time3" type="datetime"></LtTime>
  <br>
<LtTime :time="time5"></LtTime>
  <br>
<LtTime :time="time6"></LtTime>
  <br>
  
```
:::

### API

#### Time props

属性|说明|类型|默认值
---|---|---|---
time|需要对比的时间，可以是时间戳或 Date 类型|Number 、 Date 、 String|-
type|类型，可选值为 relative、date 或 datetime|String|relative
interval|自动更新的间隔，单位：秒|Number|60
days|再相对时间内限制最高显示的天数内，如值为3的话 ，就是3天内的设计|Number|0


::::vuecode::::
<script>
export default {
  data() {
    return {
      time1: (new Date()).getTime() - 60 * 3 * 1000,
      time2: (new Date()).getTime() - 86400 * 3 * 1000,
      time3: new Date(),
      time4: (new Date()).getTime() - 86400 * 2 * 1000,
       time5: (new Date()).getTime() - 86400 * 110 * 1000,
        time6: (new Date()).getTime() - 86400 * 210 * 1000,
    }
  },

}
</script>
