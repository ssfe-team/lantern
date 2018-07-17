## Dropdown 下拉菜单

### 概述

展示一组折叠的下拉菜单。

### 代码示例

#### 基础用法

需要配合 `DropdownMenu` 和 `DropdownItem` 两个组件来使用，并且给列表设置具名 slot 为 `list`。

触发对象可以是链接、按钮等各种元素。

本例还展示了禁用项和分隔线。

::: demo demo :::

```html
<lt-dropdown>
    <a href="javascript:void(0)">
        下拉菜单
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item disabled>豆汁儿</lt-dropdown-item>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
        <lt-dropdown-item divided>北京烤鸭</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
<lt-dropdown style="margin-left: 20px">
    <lt-button type="primary">
        下拉菜单
        <lt-icon type="ios-arrow-down"></lt-icon>
    </lt-button>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item disabled>豆汁儿</lt-dropdown-item>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
        <lt-dropdown-item divided>北京烤鸭</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
```

:::

#### 触发方式

通过设置属性 `trigger` 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。

触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。

::: demo demo :::

```html
<lt-dropdown>
    <a href="javascript:void(0)">
        hover 触发
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item>豆汁儿</lt-dropdown-item>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
        <lt-dropdown-item>北京烤鸭</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
<lt-dropdown trigger="click" style="margin-left: 20px">
    <a href="javascript:void(0)">
        click 触发
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item>豆汁儿</lt-dropdown-item>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
        <lt-dropdown-item>北京烤鸭</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
<lt-dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
    <a href="javascript:void(0)" @click="handleOpen">
        custom 触发
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <p>常用于各种自定义下拉内容的场景。</p>
        <div style="text-align: right;margin:10px;">
            <lt-button type="primary" @click="handleClose">关闭</lt-button>
        </div>
    </lt-dropdown-menu>
</lt-dropdown>
```

:::

#### 对齐方向

通过设置属性 `placement` 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。

::: demo demo :::

```html
<lt-dropdown placement="bottom-start">
    <a href="javascript:void(0)">
        菜单(左)
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item>豆汁儿</lt-dropdown-item>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
        <lt-dropdown-item>北京烤鸭</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
<lt-dropdown style="margin-left: 20px">
    <a href="javascript:void(0)">
        菜单(居中)
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item>豆汁儿</lt-dropdown-item>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
        <lt-dropdown-item>北京烤鸭</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
<lt-dropdown style="margin-left: 20px" placement="bottom-end">
    <a href="javascript:void(0)">
        菜单(右)
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item>豆汁儿</lt-dropdown-item>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
        <lt-dropdown-item>北京烤鸭</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
```

:::

#### 嵌套用法

下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。

::: demo demo :::

```html
<lt-dropdown>
    <a href="javascript:void(0)">
        北京小吃
        <lt-icon type="ios-arrow-down"></lt-icon>
    </a>
    <lt-dropdown-menu slot="list">
        <lt-dropdown-item>驴打滚</lt-dropdown-item>
        <lt-dropdown-item>炸酱面</lt-dropdown-item>
        <lt-dropdown-item>豆汁儿</lt-dropdown-item>
        <lt-dropdown placement="right-start">
            <lt-dropdown-item>
                北京烤鸭
                <lt-icon type="ios-arrow-right"></lt-icon>
            </lt-dropdown-item>
            <lt-dropdown-menu slot="list">
                <lt-dropdown-item>挂炉烤鸭</lt-dropdown-item>
                <lt-dropdown-item>焖炉烤鸭</lt-dropdown-item>
            </lt-dropdown-menu>
        </lt-dropdown>
        <lt-dropdown-item>冰糖葫芦</lt-dropdown-item>
    </lt-dropdown-menu>
</lt-dropdown>
```

:::

### API

#### Dropdown props

| 属性      | 说明                                                                                                                                                                        | 类型    | 默认值 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| trigger   | 触发方式，可选值为 `hover`（悬停）`click`（点击）`custom`（自定义），使用 custom 时，需配合 visible 一起使用                                                                | String  | hover  |
| visible   | 手动控制下拉框的显示，在 trigger = 'custom' 时使用                                                                                                                          | Boolean | false  |
| placement | 下拉菜单出现的位置，可选值为`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end`, 支持自动识别 | String  | bottom |
| transfer  | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果                                                 | Boolean | false  |

#### Dropdown events

| 事件名            | 说明                       | 返回值                  |
| ----------------- | -------------------------- | ----------------------- |
| on-click          | 点击菜单项时触发           | DropdownItem 的 name 值 |
| on-visible-change | 菜单显示状态改变时调用     | visible                 |
| on-clickoutside   | 点击外部关闭下拉菜单时触发 | event                   |

#### Dropdown slot

| 名称 | 说明                                 |
| ---- | ------------------------------------ |
| 无   | 主体内容                             |
| list | 列表内容，一般由 `DropdownMenu` 承担 |

#### DropdownItem props

| 属性     | 说明               | 类型    | 默认值 |
| -------- | ------------------ | ------- | ------ |
| name     | 用来标识这一项     | String  | -      |
| disabled | 禁用该项           | Boolean | false  |
| divided  | 显示分割线         | Boolean | false  |
| selected | 标记该项为选中状态 | Boolean | false  |

::::vuecode::::

<script>
export default {
  data () {
      return {
          visible: false
      }
  },
  methods: {
      handleOpen () {
          this.visible = true;
      },
      handleClose () {
          this.visible = false;
      }
  }
}
</script>
