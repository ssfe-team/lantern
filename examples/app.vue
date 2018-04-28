<template>
  <div id="app">
    <lt-layout class="ltdemo-wrap" :width="layoutWidth">
      <lt-header class="ltdemo-header" height="60px">
        <div class="header-nav">
          <span>Lantern-创客贴前端UI库</span>
        </div>
      </lt-header>
      <lt-main class="ltdemo-main" height="100%">
        <div class="main-wrap">
          <lt-layout class="main-wrap-layout" :isRow="mainLayoutIsRow">
            <lt-aside width="300px">
              <lt-menu>
                <lt-menu-item-select :title="'组件文档'">
                  <span slot="title">组件文档</span>
                  <lt-menu-item :href="'/color'"><span>标准色</span></lt-menu-item>
                  <lt-menu-item :href="'/layout'"><span>Layout布局容器</span></lt-menu-item>
                  <lt-menu-item :href="'/menu'"><span>导航菜单</span></lt-menu-item>
                  <lt-menu-item :href="'/scroll'"><span>滚动条</span></lt-menu-item>
                  <lt-menu-item :href="'/message'"><span>Message 消息通知</span></lt-menu-item>
                  <lt-menu-item :href="'/pagination'"><span>Pagination 分页</span></lt-menu-item>
                  <lt-menu-item :href="'/iconfont'"><span>iconfont</span></lt-menu-item>
                  <lt-menu-item :href="'/select'"><span>Select 选择器</span></lt-menu-item>
                  <lt-menu-item :href="'/input'"><span>输入框input</span></lt-menu-item>
                </lt-menu-item-select>
                <lt-menu-item-group :title="'规范文档'">
                  <lt-menu-item :href="'/classstandard'"><span>class命名规范</span></lt-menu-item>
                </lt-menu-item-group>
              </lt-menu>
            </lt-aside>
            <lt-main height="100%">
              <router-view></router-view>
            </lt-main>
          </lt-layout>
        </div>
      </lt-main>
    </lt-layout>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      layoutWidth: '100%',
      mainLayoutIsRow: true
    }
  }
}
</script>
<style lang="less">
  @import '../src/index.less';
  @import './styles/index.less';
</style>