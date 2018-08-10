## 快速上手

### 引入 lantern-ui

你可以引入整个 lantern-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 lantern-ui。

#### 完整引入

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import Lantern from 'lantern-ui';
import 'lantern-ui/lib/lantern.css';
import App from './App.vue';

Vue.use(Lantern)

new Vue({
    el: '#app',
    render: h => h(App)
});

```

以上代码便完成了 lantern-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引用

借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 可以实现按需加载组件，减少文件体积。

首先，安装 babel-plugin-import：

```js
npm i babel-plugin-import -D
```

然后，将 .babelrc 修改为：

```js
{
  "plugins": [["import", {
    "libraryName": "lantern-ui",
    "libraryDirectory": "/packages"
  }]]
}
```

然后这样按需引入组件，就可以减小体积了：

```js
import Vue from 'vue';
import { Button, Scroll } from 'lantern-ui';
import App from './App.vue';
Vue.component('LtScroll', Scroll);
Vue.component('LtButton', Button);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

**特别提醒**
 - 按需引用仍然需要导入样式，即在 main.js 或根组件执行 `import 'lantern-ui/lib/lantern.css'`;
