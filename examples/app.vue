<template>
  <div id="app">
    <LtLayout class="ltdemo-wrap" :width="layoutWidth">
      <LtHeader class="ltdemo-header" height="70px">
        <div class="left-header-nav">
          <img src="./static/logo.png" class="logo-img" >
        </div>
        <div class="right-header-nav">
          <ul class="nav-menu-wrap">
            <li class="menu-item menu-item-active"><a href="#">pc端组件</a></li>
            <li class="menu-item"><a href="#">移动端组件</a></li>
            <li class="menu-item"><a href="#">资源下载</a></li>
            <li class="menu-item"><a href="https://www.ckt.cn">创客贴</a></li>
          </ul>
          <a href="https://github.com/ssfe-team/lantern" class="github-link">
            <img src="./static/github.jpg" alt="">
          </a>
        </div>
      </LtHeader>

      <LtMain class="ltdemo-main">
        <div class="main-wrap">
          <LtLayout class="main-wrap-layout" :is-row="mainLayoutIsRow">
            <div
              v-show="isAsideFixed"
              class="left-menu-wrap-blank"
              :style="{height:this.mainContentWrapHeight+'px'}"
            ></div>
            <LtAside width="280px" :style="getLeftStyle">
              <LtMenu>
                <LtMenuItem href="/install">
                  <span>安装</span>
                </LtMenuItem>
                <LtMenuItem href="/start">
                  <span>快速上手</span>
                </LtMenuItem>
                <LtMenuItemGroup title="基础组件">
                  <LtMenuItem href="/color">
                    <span class="lt-menu-title-text">标准色</span>
                    <span class="lt-menu-sub-text">Color</span>
                  </LtMenuItem>
                  <LtMenuItem href="/layout">
                    <span class="lt-menu-title-text">布局容器</span>
                    <span class="lt-menu-sub-text">Layout</span>
                  </LtMenuItem>
                  <LtMenuItem href="/icon">
                    <span class="lt-menu-title-text">图标</span>
                    <span class="lt-menu-sub-text">Icon</span>
                  </LtMenuItem>
                  <LtMenuItem href="/button">
                    <span class="lt-menu-title-text">按钮</span>
                    <span class="lt-menu-sub-text">Button</span>
                  </LtMenuItem>
                  <LtMenuItem href="/tag">
                    <span class="lt-menu-title-text">标签</span>
                    <span class="lt-menu-sub-text">Tag</span>
                  </LtMenuItem>
                  <LtMenuItem href="/grid">
                    <span class="lt-menu-title-text">栅格</span>
                    <span class="lt-menu-sub-text">Grid</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
                <!-- <LtMenuItem href="/scroll">
                  <span>Scroll 滚动条</span>
                </LtMenuItem> -->
                <LtMenuItemGroup title="导航组件">
                  <LtMenuItem href="/menu">
                    <span class="lt-menu-title-text">导航菜单</span>
                    <span class="lt-menu-sub-text">Menu</span>
                  </LtMenuItem>
                  <LtMenuItem href="/breadcrumb">
                    <span class="lt-menu-title-text">面包屑</span>
                    <span class="lt-menu-sub-text">Breadcrumb</span>
                  </LtMenuItem>
                  <LtMenuItem href="/steps">
                    <span class="lt-menu-title-text">步骤条</span>
                    <span class="lt-menu-sub-text">Steps</span>
                  </LtMenuItem>
                  <LtMenuItem href="/dropdown">
                    <span class="lt-menu-title-text">下拉菜单</span>
                    <span class="lt-menu-sub-text">Dropdown</span>
                  </LtMenuItem>
                  <LtMenuItem href="/pagination">
                    <span class="lt-menu-title-text">分页</span>
                    <span class="lt-menu-sub-text">Pagination</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
                <LtMenuItemGroup title="数据录入">
                  <LtMenuItem href="/select">
                    <span class="lt-menu-title-text">选择器</span>
                    <span class="lt-menu-sub-text">Select</span>
                  </LtMenuItem>
                  <LtMenuItem href="/form">
                    <span class="lt-menu-title-text">表单</span>
                    <span class="lt-menu-sub-text">Form</span>
                  </LtMenuItem>
                  <LtMenuItem href="/input">
                    <span class="lt-menu-title-text">输入框</span>
                    <span class="lt-menu-sub-text">Input</span>
                  </LtMenuItem>
                  <LtMenuItem href="/input-number">
                    <span class="lt-menu-title-text">数字输入框</span>
                    <span class="lt-menu-sub-text">InputNumber</span>
                  </LtMenuItem>
                  <LtMenuItem href="/checkbox">
                    <span class="lt-menu-title-text">多选框</span>
                    <span class="lt-menu-sub-text">Checkbox</span>
                  </LtMenuItem>
                  <LtMenuItem href="/radio">
                    <span class="lt-menu-title-text">单选框</span>
                    <span class="lt-menu-sub-text">Radio</span>
                  </LtMenuItem>
                  <LtMenuItem href="/slider">
                    <span class="lt-menu-title-text">滑块</span>
                    <span class="lt-menu-sub-text">Slider</span>
                  </LtMenuItem>
                  <LtMenuItem href="/switch">
                    <span class="lt-menu-title-text">开关</span>
                    <span class="lt-menu-sub-text">Switch</span>
                  </LtMenuItem>
                  <LtMenuItem href="/selector">
                    <span class="lt-menu-title-text">选择器</span>
                    <span class="lt-menu-sub-text">Selector</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
                <LtMenuItemGroup title="数据展示">
                  <LtMenuItem href="/poptip">
                    <span class="lt-menu-title-text">气泡提示</span>
                    <span class="lt-menu-sub-text">Poptip</span>
                  </LtMenuItem>
                  <LtMenuItem href="/tooltip">
                    <span class="lt-menu-title-text">文字提示</span>
                    <span class="lt-menu-sub-text">Tooltip</span>
                  </LtMenuItem>
                  <LtMenuItem href="/progress">
                    <span class="lt-menu-title-text">进度条</span>
                    <span class="lt-menu-sub-text">Progress</span>
                  </LtMenuItem>
                  <LtMenuItem href="/carousel">
                    <span class="lt-menu-title-text">轮播图</span>
                    <span class="lt-menu-sub-text">Carousel</span>
                  </LtMenuItem>
                  <LtMenuItem href="/time">
                    <span class="lt-menu-title-text">相对时间</span>
                    <span class="lt-menu-sub-text">Time</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
                <LtMenuItemGroup title="反馈">
                  <LtMenuItem href="/message">
                    <span class="lt-menu-title-text">消息通知</span>
                    <span class="lt-menu-sub-text">Message</span>
                  </LtMenuItem>
                  <LtMenuItem href="/modal">
                    <span class="lt-menu-title-text">弹框</span>
                    <span class="lt-menu-sub-text">Modal</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
                <LtMenuItemGroup title="规范文档">
                  <LtMenuItem href="/classstandard">
                    <span>class 命名规范</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
                <LtMenuItemGroup title="" />
              </LtMenu>
            </LtAside>

            <LtMain class="main-content-wrap" ref="mainContentWrap">
              <main class="main-content-wrap_left">
                <RouterView />
                <div class="main-content-wrap_footer">创客贴- 前端开发&UI设计部</div>
              </main>
            </LtMain>
          </LtLayout>
        </div>
      </LtMain>
    </LtLayout>

    <Transition>
      <span
        class="go-to-top"
        @click="goToTop"
        v-show="goToTopShow"
      >
        <LtIcon type="chevron-up" />
      </span>
    </Transition>
  </div>
</template>

<script>
import throttle from 'lantern/src/utils/throttle'

export default {
  name: 'App',
  data() {
    return {
      layoutWidth: '100%',
      mainLayoutIsRow: true,
      goToTopShow: false,
      isAsideFixed: false,
      mainContentWrapHeight: 100
    }
  },
  mounted() {
    this.throttled = throttle(this.unThrottledFunc, 500)
    this.mainContentWrapHeight = this.$refs.mainContentWrap.$el.clientHeight
    window.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let height = document.documentElement.clientHeight || document.body.clientHeight
      this.isAsideFixed = top >= 113 ? true : false
      this.throttled()
    })
  },
  computed: {
    getLeftStyle() {
      return this.isAsideFixed ? { position: 'fixed', height: '100vh' } : {}
    }
  },
  methods: {
    goToTop() {
      const go = () => {
        let top = document.documentElement.scrollTop
        document.documentElement.scrollTop -= top / 10
        if (document.documentElement.scrollTop > 0) {
          window.requestAnimationFrame(go)
        }
      }
      go()
    },
    unThrottledFunc() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let height = document.documentElement.clientHeight || document.body.clientHeight
      // this.isAsideFixed = top >= 70 ? true : false
      this.goToTopShow = top > height
    }
  }
}
</script>

<style lang="less">
@import '../src/index.less';
@import './styles/index.less';
@import './styles/highlight.style.css';
</style>
<style lang="less">
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
  background: #0773fc;
  z-index: 999999;
  border-radius: 100px;
  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  }
}
</style>
