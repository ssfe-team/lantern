## iconfont

### 使用方式

::: demo demo :::

```html
<lt-icon type="mydesign"></lt-icon>
```

:::

### API

#### Icon props

| 属性  | 说明                  | 类型             | 默认值 |
| ----- | --------------------- | ---------------- | ------ |
| type  | 图标的名称            | String           | -      |
| size  | 图标的大小，单位是 px | Number \| String | -      |
| color | 图标的颜色            | String           | -      |

### 类名列表

<div class="iconlist-md-wrap">
  <div v-for="item in iconlist" class="iconfont-md-content">
    <lt-icon :type="item" class="iconfont-md-show"></lt-icon>
    <div class="iconfont-md-title">{{item}}</div>
  </div>
</div>

::::vuecode::::

<script>
import iconlist from '../common/iconNameList'

export default {
  data() {
    return {
      iconlist
    }
  }
}
</script>
<style>
.iconfont-md-content {
  width: 100px;
  height: 120px;
  float: left;
  text-align: center;
  margin: 10px;
}
.iconfont-md-show {
  font-size: 30px !important;
  width: 100%;
  display: block;
  margin-bottom: 8px;
}
.iconfont-md-code {
  margin-top: 10px;
}
</style>
