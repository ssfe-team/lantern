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
export default {
  data() {
    return {
      iconlist: [
        'signout',
        'close',
        'mydesign',
        'recycle',
        'mybuy',
        'mylike',
        'mytemplate',
        'wenhao',
        'qq',
        'weixin',
        'chevron-up',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'information-circled',
        'close-circled',
        'checkmark',
        'checkmark-circled',
        'ios-arrow-up',
        'ios-arrow-down',
        'ios-arrow-left',
        'ios-arrow-right',
        'ios-arrow-forward',
        'ios-arrow-back',
        'ios-checkmark-outline',
        'ios-checkmark-empty',
        'ios-checkmark',
        'android-close',
        'ios-close-outline',
        'ios-close-empty',
        'ios-close',
        'trash-a',
        'trash-b',
        'load-a',
        'load-b',
        'load-c',
        'load-d',
        'log-in',
        'log-out',
        'ios-arrow-thin-up',
        'ios-arrow-thin-down',
        'ios-arrow-thin-left',
        'ios-arrow-thin-right',
        'ios-plus',
        'ios-plus-empty',
        'ios-plus-outline',
        'ios-minus',
        'ios-minus-empty',
        'ios-minus-outline',
        'information',
        'ios-information',
        'ios-information-empty',
        'ios-information-outline',
        'help',
        'help-circled',
        'ios-help',
        'ios-help-outline',
        'ios-help-empty',
        'search',
        'ios-search',
        'ios-search-strong',
        'android-search',
        'maximize'
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
