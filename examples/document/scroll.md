### 实例

::: demo demo

```html
  <div style="width: 500px;height: 300px">
    <lt-scroll
      @on-scroll="onScroll"
      :hasBottom="true"
    >
      <div style="width: 2000px;background: linear-gradient(to right, blue, red);color: white">测试</div>
      <br />
      <p>2.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <p>3.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <p>4.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <p>6.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <p>7.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <p>8.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <p>9.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <p>10.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
    </lt-scroll>
  </div>
```

:::

### lt-scroll 参数

参数|说明|类型|必选|默认值
---|---|---|---|---
hasRight|是否有右侧滚动条|Boolean|否|true
hasBottom|是否有底部滚动条|Boolean|否|false
zIndex|CSS z-index 属性|Number, String|否|10

::::vuecode::::
<script>
export default {
  methods: {
    onScroll(eve) {
    },
  }
}
</script>
<style lang="less" scoped>

</style>
