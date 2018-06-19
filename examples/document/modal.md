## Modal 弹框

::: demo demo
```html
    <template>
      <lt-button @click="show1 = true">点我显示弹框</lt-button>
      <lt-modal v-model="show1">
        <div>弹框内容</div>
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