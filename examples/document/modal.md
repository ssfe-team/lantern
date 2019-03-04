## Modal 弹框

::: demo demo
```html
    <template>
      <lt-button @click="show1 = true">点我显示弹框</lt-button>
      <lt-modal v-model="show1">
        <div style="width: 500px; height: 400px; backgroundColor: #fff;">弹框内容</div>
      </lt-modal>
    </template>
    
    <script>
      export default {
        data() {
          return {
            show1: false
          }
        }
      }
    </script>
```
:::

### Modal props

属性|说明|类型|默认值
---|---|---|---
disabled|是否禁止关闭|Boolean|false

::::vuecode::::
<script>
  module.exports = {
    data() {
      return {
        show1: false
      }
    }
  };
</script>
