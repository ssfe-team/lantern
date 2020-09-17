<template>
  <div id="app">
    <LtLayout
      class="ltdemo-wrap"
      :width="layoutWidth"
    >
      <LtHeader
        class="ltdemo-header"
        height="60px"
      >
        <div class="header-nav">
          <span>Lantern-创客贴前端UI库</span>
        </div>
      </LtHeader>
      <LtMain class="ltdemo-main">
        <div class="main-wrap">
          <LtLayout
            class="main-wrap-layout"
            :is-row="mainLayoutIsRow"
          >
            <LtAside width="300px">
              <LtMenu>
                <LtMenuItem href="/install">
                  <span>安装</span>
                </LtMenuItem>
                <LtMenuItem href="/start">
                  <span>快速上手</span>
                </LtMenuItem>
                <LtMenuItemGroup title="组件文档">
                  <LtMenuItem href="/color">
                    <span>Color 标准色</span>
                  </LtMenuItem>
                  <LtMenuItem href="/layout">
                    <span>Layout 布局容器</span>
                  </LtMenuItem>
                  <LtMenuItem href="/menu">
                    <span>Menu 导航菜单</span>
                  </LtMenuItem>
                  <!--
                  <LtMenuItem href="/scroll">
                    <span>Scroll 滚动条</span>
                  </LtMenuItem>-->
                  <LtMenuItem href="/message">
                    <span>Message 消息通知</span>
                  </LtMenuItem>
                  <LtMenuItem href="/pagination">
                    <span>Pagination 分页</span>
                  </LtMenuItem>
                  <LtMenuItem href="/icon">
                    <span>Icon 图标</span>
                  </LtMenuItem>
                  <LtMenuItem href="/select">
                    <span>Select 选择器</span>
                  </LtMenuItem>
                  <LtMenuItem href="/form">
                    <span>Form 表单</span>
                  </LtMenuItem>
                  <LtMenuItem href="/input">
                    <span>Input 输入框</span>
                  </LtMenuItem>
                  <LtMenuItem href="/input-number">
                    <span>InputNumber 数字输入框</span>
                  </LtMenuItem>
                  <LtMenuItem href="/poptip">
                    <span>Poptip 气泡提示</span>
                  </LtMenuItem>
                  <LtMenuItem href="/tooltip">
                    <span>Tooltip 文字提示</span>
                  </LtMenuItem>
                  <LtMenuItem href="/checkbox">
                    <span>Checkbox 多选框</span>
                  </LtMenuItem>
                  <LtMenuItem href="/button">
                    <span>Button 按钮</span>
                  </LtMenuItem>
                  <LtMenuItem href="/radio">
                    <span>Radio 单选框</span>
                  </LtMenuItem>
                  <LtMenuItem href="/slider">
                    <span>Slider 滑块</span>
                  </LtMenuItem>
                  <LtMenuItem href="/switch">
                    <span>Switch 开关</span>
                  </LtMenuItem>
                  <LtMenuItem href="/colorPicker">
                    <span>ColorPicker 颜色选择器</span>
                  </LtMenuItem>
                  <LtMenuItem href="/breadcrumb">
                    <span>Breadcrumb 面包屑</span>
                  </LtMenuItem>
                  <LtMenuItem href="/dropdown">
                    <span>Dropdown 下拉菜单</span>
                  </LtMenuItem>
                  <LtMenuItem href="/modal">
                    <span>Modal 弹框</span>
                  </LtMenuItem>
                  <LtMenuItem href="/steps">
                    <span>Steps 步骤条</span>
                  </LtMenuItem>
                  <LtMenuItem href="/progress">
                    <span>Progress 进度条</span>
                  </LtMenuItem>
                  <LtMenuItem href="/carousel">
                    <span>Carousel 轮播图</span>
                  </LtMenuItem>
                  <LtMenuItem href="/selector">
                    <span>Selector 选择器</span>
                  </LtMenuItem>
                  <LtMenuItem href="/time">
                    <span>Time 相对时间</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
                <LtMenuItemGroup title="规范文档">
                  <LtMenuItem href="/classstandard">
                    <span>class 命名规范</span>
                  </LtMenuItem>
                </LtMenuItemGroup>
              </LtMenu>
            </LtAside>
            <LtMain height="100%">
              <RouterView />
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
  data () {
    return {
      layoutWidth: '100%',
      mainLayoutIsRow: true,
      goToTopShow: false,
    }
  },
  mounted () {
    this.throttled = throttle(this.unThrottledFunc, 500)
    window.addEventListener('scroll', () => {
      this.throttled()
    })
  },
  methods: {
    goToTop () {
      const go = () => {
        let top = document.documentElement.scrollTop
        document.documentElement.scrollTop -= (top / 10)
        if (document.documentElement.scrollTop > 0) {
          window.requestAnimationFrame(go)
        }
      }
      go()
    },
    unThrottledFunc () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let height = document.documentElement.clientHeight || document.body.clientHeight
      this.goToTopShow = top > height
    }
  }
}
</script>
<style lang="less">
@import '../src/index.less';
@import './styles/index.less';
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
    background: #0773FC;
    z-index: 999999;
    border-radius: 100px;
    transition: all ease .2s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
    }
  }
</style>
