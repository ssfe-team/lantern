## Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础用法

从顶部出现，3 秒后自动消失。

::: demo demo
```html
    <template>
      <lt-button @click="open">点我显示消息提示</lt-button>
    </template>
    
    <script>
      export default {
        methods: {
          open() {
            this.$message('这是一条消息提示')
          }
        }
      }
    </script>
```
:::

### 不同状态

用来显示「成功、提醒、错误、加载中、无提示icon」类的操作反馈。

:::demo demo
```html
    <template>
      <lt-button @click="open2">成功</lt-button>
      <lt-button @click="open3">提醒</lt-button>
      <lt-button @click="open4">错误</lt-button>
      <lt-button @click="open5">加载中</lt-button>
      <lt-button @click="open1">无提示icon</lt-button>
    </template>
    
    <script>
      export default {
        methods: {
          open1() {
            this.$message({
              message: '不显示提示icon',
              type: 'none'
            });
          }
          open2() {
            this.$message.success({
              message: '这里是成功确认文案',
            });
          },
          open3() {
            this.$message({
              message: '这里是一般提醒文案',
              type: 'warning'
            });
          },
          open4() {
            this.$message.error('这里是错误警告文案');
          },
          open5() {
            this.$message({
              message: '正在拼命加载中',
              type: 'loading'
            });
          },
        }
      }
    </script>
```
:::

### 不同主题

设置不同主题风格（亮色和暗色）

:::demo demo
```html
    <template>
      <lt-button @click="open6">点击亮色主题</lt-button>
      <lt-button @click="open7">点击暗色主题</lt-button>
    </template>
    
    <script>
      export default {
        methods: {
          open6() {
            this.$message({
              message: '这是亮色主题哦',
              theme: 'light'
            });
          },
    
          open7() {
            this.$message({
              message: '这是暗色主题哦',
              theme: 'dark'
            });
          },
        }
      }
    </script>
```
:::

### 点击事件

点击消息提示后执行自定义操作

:::demo demo
```html
    <template>
      <lt-button :plain="true" @click="clickSupport">点击事件</lt-button>
    </template>
    
    <script>
      export default {
        methods: {
          clickSupport() {
            this.$message({
              message: '点我点我点我',
              onClick: () => {
                alert('恭喜你点到了我！')
              }
            });
          }
        }
      }
    </script>
```
:::

### 增加自定义操作

::: demo demo :::

```html
    <template>
      <lt-button @click="showAppendText">删除（带恢复操作）</lt-button>
    </template>
    
    <script>
      export default {
        methods: {
          showAppendText() {
            let deleteMessage = this.$message({
              message: '删除成功',
              appendText: '恢复',
              onClickAppendText: () => {
                this.$message('恢复成功')
                deleteMessage.close()
              }
            });
          }
        }
      }
    </script>
```
:::

### 文字居中

使用 `center` 属性让文字水平居中。

:::demo demo
```html
    <template>
      <lt-button :plain="true" @click="openCenter">文字居中</lt-button>
    </template>
    
    <script>
      export default {
        methods: {
          openCenter() {
            this.$message({
              message: '居中的文字',
              center: true
            });
          }
        }
      }
    </script>
```
:::

### 使用 HTML 片段

`message` 属性支持传入 HTML 片段

将`dangerouslyUseHTMLString`属性设置为 true，`message` 就会被当作 HTML 片段处理。

:::demo demo

```html
    <template>
      <lt-button :plain="true" @click="openHTML">使用 HTML 片段</lt-button>
    </template>
    
    <script>
      export default {
        methods: {
          openHTML() {
            this.$message({
              dangerouslyUseHTMLString: true,
              message: '<strong>这是 <i>HTML</i> 片段</strong>'
            });
          }
        }
      }
    </script>
```
:::

**`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。**

### 全局方法

Lantern 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 `Message`。

### 单独引用

单独引入 `Message`：

```javascript
import { Message } from 'lantern-ui';
```

此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message(options)`。并且可以调用 `Message.closeAll()` 手动关闭所有实例。

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string / VNode | — | — |
| type | 图标的类型 | string | default/success/warning/error/loading/none | default |
| theme | 主题色 | string | dark(暗色)/light(亮色) | dark
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
|appendText|后置按钮文字|string|-|-|
|onClickAppendText|点击后置按钮时的回调函数|function|-|-
| showClose | 是否显示关闭按钮 | boolean | — | false |
| center | 文字是否居中 | boolean | — | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | — | — |

### 方法
调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |

::::vuecode::::
<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      open1() {
        this.$message({
          message: '这里是默认提示文案',
          type: 'none'
        });
      },

      open2() {
        this.$message.success({
          message: '这里是成功确认文案',
        });
      },

      open3() {
        this.$message({
          message: '这里是一般提醒文案',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('这里是错误警告文案');
      },

      open5() {
        this.$message({
          message: '正在拼命加载中',
          type: 'loading'
        });
      },

      open6() {
        this.$message({
          message: '这是亮色主题哦',
          theme: 'light'
        });
      },

      open7() {
        this.$message({
          message: '这是暗色主题哦',
          theme: 'dark'
        });
      },
      
      clickSupport() {
        this.$message({
          message: '点我点我点我',
          onClick: () => {
            alert('恭喜你点到了我！')
          }
        });
      },

      showAppendText() {
        let deleteMessage = this.$message({
          message: '删除成功',
          appendText: '恢复',
          onClickAppendText: () => {
            this.$message('恢复成功')
            deleteMessage.close()
          }
        });
      },

      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      },

      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  };
</script>
