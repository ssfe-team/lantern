## iconfont

### 使用方式

```html
<lt-icon-font class="icon-left"></lt-icon-font>
```

### 类名列表

<div class="iconlist-md-wrap">
  <div v-for="item in iconlist" class="iconfont-md-content">
    <lt-icon-font :class="item" class="iconfont-md-show"></lt-icon-font>
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
        ['icon-signout', '\\e604'],
        ['icon-confirm', '\\e605'],
        ['icon-details', '\\e606'],
        ['icon-cancel', '\\e607'],
        ['icon-dropdown', '\\e608'],
        ['icon-close', '\\e609'],
        ['icon-tickcross', '\\e60a'],
        ['icon-right', '\\e60b'],
        ['icon-left', '\\e60c'],
        ['icon-mylike', '\\e60d'],
        ['icon-mybuy', '\\e60e'],
        ['icon-recycle', '\\e60f'],
        ['icon-mydesign', '\\e610'],
        ['icon-mytemplate', '\\e611']
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
}
.iconfont-md-code {
  margin-top: 10px;
}
</style>