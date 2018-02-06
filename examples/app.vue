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
                <lt-menu-item :href="'/color'"><span slot="text">标准色</span></lt-menu-item>
                <lt-menu-item :href="'/layout'"><span slot="text">Layout布局容器</span></lt-menu-item>
                <lt-menu-item :href="'/menu'"><span slot="text">导航菜单</span></lt-menu-item>
                <lt-menu-item :href="'/scroll'"><span slot="text">滚动条</span></lt-menu-item>
                <lt-menu-item :href="'/message'"><span slot="text">Message 消息通知</span></lt-menu-item>
                <lt-menu-item :href="'/pagination'"><span slot="text">Pagination 分页</span></lt-menu-item>
                <lt-menu-item :href="'/dropdown'"><span slot="text">Dropdown 下拉菜单</span></lt-menu-item>
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

