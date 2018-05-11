## iconfont

### 使用方式

```html
<lt-icon type="left"></lt-icon>
```

### 类名列表

<div class="iconlist-md-wrap">
  <div v-for="item in iconlist" class="iconfont-md-content">
    <lt-icon :type="item[0]" class="iconfont-md-show"></lt-icon>
    <div class="iconfont-md-title">{{item[0]}}</div>
    <div class="iconfont-md-code">{{item[1]}}</div>
  </div>
</div>

::::vuecode::::
<script>
export default {
  data() {
    return {
      iconlist: [
        ['signout', '\\e604'],
        ['confirm', '\\e605'],
        ['details', '\\e606'],
        ['cancel', '\\e607'],
        ['dropdown', '\\e608'],
        ['close', '\\e609'],
        ['tickcross', '\\e60a'],
        ['right', '\\e60b'],
        ['left', '\\e60c'],
        ['mylike', '\\e60d'],
        ['mybuy', '\\e60e'],
        ['recycle', '\\e60f'],
        ['mydesign', '\\e610'],
        ['mytemplate', '\\e611']
      ]
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