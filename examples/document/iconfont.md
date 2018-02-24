## iconfont

### 使用方式

```html
<lt-icon-font class="icon-left"></lt-icon-font>
```

### 类名列表

<div class="iconlist-md-wrap">
  <div v-for="item in iconlist" class="iconfont-md-content">
    <lt-icon-font :class="item" class="iconfont-md-show"></lt-icon-font>
    <div class="iconfont-md-title">{{item}}</div>
  </div>
</div>

::::vuecode::::
<script>
export default {
  data() {
    return {
      iconlist: [
        'icon-signout',
        'icon-confirm',
        'icon-details',
        'icon-cancel',
        'icon-dropdown',
        'icon-close',
        'icon-tickcross',
        'icon-right',
        'icon-left',
        'icon-mylike',
        'icon-mybuy',
        'icon-recycle',
        'icon-mydesign',
        'icon-mytemplate'
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
.iconfont-md-title {
}
</style>