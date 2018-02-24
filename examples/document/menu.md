## 导航菜单

暂时只有竖向导航

`lt-menu`：导航容器

`lt-menu-item-group`：导航组合

`lt-menu-item-select`：下拉导航

`lt-menu-item`：导航元素

### 实例

::: demo demo
```html
  <lt-menu>
    <lt-menu-item :href="'#1'"><span>导航1</span></lt-menu-item>
    <lt-menu-item :href="'#2'"><span>导航2</span></lt-menu-item>
    <lt-menu-item @itemClick="itemClick"><span>导航3</span></lt-menu-item>
    <lt-menu-item-select :height="'72px'" @titleClick="skip('#4-1')">
      <span slot="title">导航4</span>
      <lt-menu-item :href="'#4-1'"><span>导航4-1</span></lt-menu-item>
      <lt-menu-item :href="'#4-2'"><span>导航4-2</span></lt-menu-item>
    </lt-menu-item-select>
  </lt-menu>
```


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