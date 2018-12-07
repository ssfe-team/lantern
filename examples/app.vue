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
                <lt-menu-item href="/install"><span>安装</span></lt-menu-item>
                <lt-menu-item href="/start"><span>快速上手</span></lt-menu-item>
                <lt-menu-item-group title="组件文档">
                  <lt-menu-item href="/color"><span>Color 标准色</span></lt-menu-item>
                  <lt-menu-item href="/layout"><span>Layout 布局容器</span></lt-menu-item>
                  <lt-menu-item href="/menu"><span>Menu 导航菜单</span></lt-menu-item>
                  <lt-menu-item href="/scroll"><span>Scroll 滚动条</span></lt-menu-item>
                  <lt-menu-item href="/message"><span>Message 消息通知</span></lt-menu-item>
                  <lt-menu-item href="/pagination"><span>Pagination 分页</span></lt-menu-item>
                  <lt-menu-item href="/icon"><span>Icon 图标</span></lt-menu-item>
                  <!-- <lt-menu-item href="/select"><span>Select 选择器</span></lt-menu-item> -->
                  <!--<lt-menu-item href="/input"><span>Input 输入框</span></lt-menu-item>-->
                  <lt-menu-item href="/input-number"><span>InputNumber 数字输入框</span></lt-menu-item>
                  <lt-menu-item href="/poptip"><span>Poptip 气泡提示</span></lt-menu-item>
                  <lt-menu-item href="/tooltip"><span>Tooltip 文字提示</span></lt-menu-item>
                  <lt-menu-item href="/checkbox"><span>Checkbox 多选框</span></lt-menu-item>
                  <lt-menu-item href="/button"><span>Button 按钮</span></lt-menu-item>
                  <lt-menu-item href="/radio"><span>Radio 单选框</span></lt-menu-item>
                  <lt-menu-item href="/slider"><span>Slider 滑块</span></lt-menu-item>
                  <lt-menu-item href="/switch"><span>Switch 开关</span></lt-menu-item>
                  <lt-menu-item href="/breadcrumb"><span>Breadcrumb 面包屑</span></lt-menu-item>
                  <lt-menu-item href="/dropdown"><span>Dropdown 下拉菜单</span></lt-menu-item>
                  <lt-menu-item href="/modal"><span>Modal 弹框</span></lt-menu-item>
                  <lt-menu-item href="/steps"><span>Steps 步骤条</span></lt-menu-item>
                  <lt-menu-item href="/progress"><span>Progress 进度条</span></lt-menu-item>
                  <lt-menu-item href="/carousel"><span>Carousel 轮播图</span></lt-menu-item>
                  <lt-menu-item href="/selector"><span>Selector 选择器</span></lt-menu-item>
                </lt-menu-item-group>
                <lt-menu-item-group title="规范文档">
                  <lt-menu-item href="/classstandard"><span>class 命名规范</span></lt-menu-item>
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
    <transition>
      <span class="go-to-top" @click="goToTop" v-show="goToTopShow">
        <lt-icon type="chevron-up"></lt-icon>
      </span>
    </transition>
  </div>
</template>

<script>
  import throttle from 'lantern/src/utils/throttle'

export default {
  name: 'app',
  data() {
    return {
      layoutWidth: '100%',
      mainLayoutIsRow: true,
      goToTopShow: false,
    }
  },
  mounted() {
    this.throttled = throttle(this.unThrottledFunc, 500)
    window.addEventListener('scroll', () => {
      this.throttled()
    })
    this.handleDemoCodeDisplay()
  },
  methods: {
    goToTop() {
      const go = () => {
        let top = document.documentElement.scrollTop
        document.documentElement.scrollTop -= (top / 10)
        if (document.documentElement.scrollTop > 0) {
          window.requestAnimationFrame(go)
        }
      }
      go()
    },
    unThrottledFunc() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let height = document.documentElement.clientHeight || document.body.clientHeight
      this.goToTopShow = top > height
    },
    handleDemoCodeDisplay() {
      let docList = document.getElementsByClassName('demo-code-btn')
      for (let i = 0, len = docList.length; i < len; i++) {
        docList[i].onclick = () => {
          let docHtml = docList[i].previousElementSibling
          docHtml.classList.toggle('expand')
          let text = '点击收起源代码'
          if (!docHtml.classList.contains('expand')) {
            text = '点击查看源代码'
          }
          setTimeout(() => {
            docList[i].innerHTML = text
          }, 400);
        }
      }
    }
  }
}
</script>
<style lang="less">
@import '../src/index.less';
@import './styles/index.less';
</style>
<style lang="less" scoped>
  .go-to-top {
    position: fixed;
    right: 4%;
    bottom: 113px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #fff;
    background: #07aefc;
    z-index: 999999;
    border-radius: 100px;
    transition: all ease .2s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
    }
  }
</style>
