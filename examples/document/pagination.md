## 分页

### 实例

::: demo demo
```html
    <template>
      <lt-Pagination
        :total="total"
        :current="current"
      ></lt-Pagination>
    </template>
    <script>
      export default {
        data () {
          return {
            total: 89,
            current: 4
          }
        }
      }
    </script>
```
:::

### Usage

|参数|说明|类型|默认值|可选|
|---|---|---|---|---|
|bgcolor|背景颜色|ColorHex|'#fff'|可选|
|total|总页码|Number|1|必选|
|current|当前页码|Number|1|必选|
|type|模式(event&#124;route)|String|'event'|可选|
|routePath|路由的计算func|Function|null|模式为route时必选|
|jumpUrl|event模式下返回点击的页码|Emit|pageNo=>{}|必选|

#### Events
事件名|说明|返回值
---|---|---
on-change|跳页|页码

### 路由模式下 routePath 的一个栗子

```javascript
import Vue from 'vue'
Vue.component('', {
  methods: {
    routePath (pageNo) {
      return 'lantern.com?pageNo=' + pageNo
    }
  },
  computed: {
    routePath () {
      return pageNo => 'lantern.com?pageNo=' + pageNo
    }
  }
})
```

::::vuecode::::
<script>
      export default {
        data () {
          return {
            total: 89,
            current: 4
          }
        },
      }
</script>
