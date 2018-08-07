## 快速上手

### 引入 lantern-ui

一般在 webpack 入口页面 `main.js` 中如下配置：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import Lantern from 'lantern-ui';
import 'lantern-ui/lib/lantern.css';

Vue.use(VueRouter);
Vue.use(Lantern)

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

```

### 按需引用

借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 可以实现按需加载组件，减少文件体积。首先安装，并在文件 `.babelrc` 中配置：

```js
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "lantern-ui",
    "libraryDirectory": "/packages"
  }]]
}
```

然后这样按需引入组件，就可以减小体积了：

```js
import { Scroll } from 'lantern-ui';
Vue.component('LtScroll', Scroll);
```

### 特别提醒
 - 按需引用仍然需要导入样式，即在 main.js 或根组件执行 `import 'lantern-ui/lib/lantern.css'`;
