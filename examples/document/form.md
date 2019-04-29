## Form 表单

### 概述

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

### 代码示例（未完待续）

#### 行内表单

设置属性`inline`，表单元素可以水平排列。

::: demo demo :::
```html
<LtForm ref="formInline" :model="formInline" :rules="ruleInline">
  <LtFormItem prop="user">
      <LtInput type="text" v-model="formInline.user" placeholder="Username"></LtInput>
  </LtFormItem>
  <LtFormItem prop="password">
      <LtInput :type="passwordShow ? 'text' : 'password' " v-model="formInline.password" placeholder="Password"></LtInput>
  </LtFormItem>
  <LtFormItem>
      <LtButton type="primary" @click="handleSubmit('formInline')">Signin</LtButton>
  </LtFormItem>
  <button @click="passwordShow = !passwordShow">{{ passwordShow ? '隐藏' : '显示'}} 密码</button>
</LtForm>
```
:::

### API

#### Form props

属性|说明|类型|默认值
---|---|---|---
model|表单数据对象|Object|-
rules|表单验证规则，具体配置查看 [async-validator](https://github.com/yiminghe/async-validator)|Object|-
inline|是否开启行内表单模式|Boolean|false
label-position|表单域标签的位置，可选值为 `left`、`right`、`top`|String|right
label-width|表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值|Number|-
show-message|show-message|是否显示校验错误信息|Boolean|true
autocomplete|原生的 `autocomplete` 属性，可选值为 `off` 或 `on`|String|off

#### Form methods

方法名|说明|参数
---|---|---
validate|对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 `Promise`|callback
validateField|对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息|callback
resetFields|对整个表单进行重置，将所有字段值重置为空并移除校验结果|无

#### FormItem props

属性|说明|类型|默认值
---|---|---|---
prop|对应表单域 `model` 里的字段|String|-
label|标签文本|String|-
label-width|表单域标签的的宽度|Number|-
label-for|指定原生的 `label` 标签的 `for` 属性，配合控件的 `element-id` 属性，可以点击 `label` 时聚焦控件。|String|-
required|是否必填，如不设置，则会根据校验规则自动生成|Boolean|-
rules|表单验证规则|Object \| Array|-
error|表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息|String|-
show-message|是否显示校验错误信息|Boolean|true

#### FormItem slot
名称|说明
---|---
无|内容
label|label 内容

::::vuecode::::
<script>
export default {
  data() {
    return {
      passwordShow: false,
      formInline: {
          user: '',
          password: ''
      },
      ruleInline: {
          user: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { type: 'string', min: 6, max: 18, message: '密码长度为6-18位之间', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
      handleSubmit(name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
                this.$message.success('Success!');
            } else {
                this.$message.error('Fail!');
            }
          })
      }
  }
}
</script>
