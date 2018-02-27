## 导航菜单

暂时只有竖向导航

`lt-menu`：导航容器

`lt-menu-item-group`：导航组合

`lt-menu-item-select`：下拉导航

`lt-menu-item`：导航元素

### 实例

::: demo demo
```html
  <lt-menu :mode="'horizontal'">
    <lt-menu-item :href="'#1'"><span>导航1</span></lt-menu-item>
    <lt-menu-item :href="'#2'"><span>导航2</span></lt-menu-item>
    <lt-menu-item @itemClick="itemClick"><span>导航3</span></lt-menu-item>
    <lt-menu-item-select>
        <span slot="title">导航4</span>
        <lt-menu-item :href="'#4-1'"><span>导航4-1</span></lt-menu-item>
        <lt-menu-item :href="'#4-2'"><span>导航4-2</span></lt-menu-item>
      </lt-menu-item-select>
  </lt-menu>
```
:::

::: demo demo
```html
  <lt-menu>
    <lt-menu-item-group :title="'导航组1'">
      <lt-menu-item :href="'#1'"><span>导航1</span></lt-menu-item>
      <lt-menu-item :href="'#2'"><span>导航2</span></lt-menu-item>
      <lt-menu-item @itemClick="itemClick"><span>导航3</span></lt-menu-item>
    </lt-menu-item-group>
    <lt-menu-item-group :title="'导航组2'">
      <lt-menu-item-select @titleClick="skip('#4-1')">
        <span slot="title">导航4</span>
        <lt-menu-item :href="'#4-1'"><span>导航4-1</span></lt-menu-item>
        <lt-menu-item :href="'#4-2'"><span>导航4-2</span></lt-menu-item>
      </lt-menu-item-select>
    </lt-menu-item-group>
  </lt-menu>

  <script>
    export default {
      methods: {
        skip: function(href) {
          this.$router.push(href);
        },
        itemClick() {
          alert('无跳转');
        }
      }
    }
  </script>
```
:::

### Menu参数
参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
accordion|是否开启手风琴模式（一次只能打开一个子菜单）|Boolean|-|false
mode|menu垂直还是水平|String|horizontal / vertical|vertical

### MenuItemGroup参数
参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
title|itemGroup title|String|-|-

### MenuItemSelect事件
事件名|说明|参数|返回值
--------|--------|--------|--------
titleClick|MenuItemSelect标题点击|-|-

### MenuItemSelect slot
名称|说明
--------|--------
title|MenuItemSelect标题

### MenuItem参数
参数|说明|类型|可选值|默认值
--------|--------|--------|--------|--------
href|跳转链接|String|-|-

### MenuItem事件
事件名|说明|参数|返回值
--------|--------|--------|--------
itemClick|item点击，href为外部链接时，事件不生效|-|-

::::vuecode::::
<script>
export default {
  methods: {
    skip: function(href) {
      this.$router.push(href);
    },
    itemClick() {
      alert('无跳转');
    }
  }
}
</script>