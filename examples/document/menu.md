## 导航菜单

暂时只有竖向导航

`lt-menu`：导航容器

`lt-menu-item`：导航按钮

### 实例

::: demo demo
```html
  <lt-menu>
    <lt-menu-item :href="'#1'">
      <span slot="title">导航1</span>
    </lt-menu-item>
    <lt-menu-item :href="'#2'">
      <span slot="title">导航2</span>
    </lt-menu-item>
    <lt-menu-item :href="'#3'">
      <span slot="title">导航3</span>
    </lt-menu-item>
    <lt-menu-item :href="'#4'">
      <span slot="title">导航4</span>
      <ul slot="childItem">
        <li>子导航1</li>
        <li>子导航2</li>
        <li>子导航3</li>
      </ul>
    </lt-menu-item>
  </lt-menu>
```