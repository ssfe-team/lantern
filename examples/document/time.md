## Time 相对时间

### 概述

常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。

### 代码示例

#### 基础用法

设置一个时间戳或 Date，可自动转为相对于当前的时间。


::: demo demo :::
```html
<template>
    <div>
        <LtTime :time="time1"></LtTime>
            <br>
        <LtTime :time="time2"></LtTime>
            <br>
        <LtTime :time="time3"></LtTime>
            <br>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time1: (new Date()).getTime() - 60 * 3 * 1000,
      time2: (new Date()).getTime() - 86400 * 3 * 1000,
      time3: '2019-01-23 20:50:36.00',
    }
  },
}
  </script>
```
:::
#### 不同类型

可以根据情况，设置不同的显示类型。


::: demo demo :::
```html
<template>
    <div>
        <LtTime :time="time2"></LtTime>
            <br>
        <LtTime :time="time2" type="date"></LtTime>
            <br>
        <LtTime :time="time2" type="datetime"></LtTime>
            <br>
    </div>
</template>
<script>
export default {
  data() {
    return {
      time2: (new Date()).getTime() - 86400 * 3 * 1000,
    }
  },
}
  </script>
```

:::
#### 自动更新间隔 

设置自动更新间隔，默认为 60 秒。

::: demo demo :::
```html
<template>
    <div>
        <LtTime :time="time4" :interval="1"></LtTime>
            <br>
        <LtTime :time="time4" :interval="5"></LtTime>
            <br>
    </div>
</template>
<script>
export default {
  data() {
    return {
      time4: new Date(),
    }
  },
}
  </script>
```
:::
#### 限制相对时间最高显示天数 

默认不限制

::: demo demo :::
```html
<template>
    <div>
        <LtTime :time="time2" :days="3"></LtTime>
            <br>
        <LtTime :time="time2"></LtTime>
            <br>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time2: (new Date()).getTime() - 86400 * 3 * 1000,
    }
  },
}
  </script>
```

:::
#### 相对时间内的日期，本年内的日期不显示年


::: demo demo :::
```html
<template>
    <div>
        <LtTime :time="time3"></LtTime>
            <br>
        <LtTime :time="time5"></LtTime>
            <br>
    </div>
</template>
<script>
export default {
  data() {
    return {
     time3: '2019-01-23 20:50:36.00',
     time5: '2018-09-23 12:32:25.00',
    }
  },
}
  </script>
```

:::
### API

#### Time props

属性|说明|类型|默认值
---|---|---|---
time|需要对比的时间，可以是时间戳或 Date 类型|Number\|Date\|String|-
type|类型，可选值为 relative、date 或 datetime|String|relative
interval|自动更新的间隔，单位：秒|Number|60
days|在相对时间内限制显示最高的天数，在 date 或者 datetime 类型内无效|Number|0


::::vuecode::::
<script>
export default {
  data() {
    return {
      time1: (new Date()).getTime() - 60 * 3 * 1000,
      time2: (new Date()).getTime() - 86400 * 3 * 1000,
      time3: '2019-01-23 20:50:36.00',
      time4: new Date(),
      time5: '2018-09-23 12:32:25.00',
    }
  },

}
</script>
