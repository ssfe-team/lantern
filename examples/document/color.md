# 标准色  Color

使用以下调色板的规定颜色作为设计和开发规范，以保证页面和产品的统一视觉感受。

#### 主色
创客贴以代表梦想与科技的亮蓝色作为品牌主色，深色一般用于hover状态，浅色一般用于标签背景和辅助性按钮。

<div class="color-show-wrap">
  <div
    v-for="item in maincolors"
    class="color-show-content"
    :style="{
      'background': item.color,
      'color': item.textcolor
    }"
  >
    <p class="color-show-title">{{ item.title }}</p>
    <p class="color-show-color">{{ item.color }}</p>
  </div>
</div>

#### 辅助色
辅助色是除了主色外的场景色，常用于不同情绪的信息提示或不同分类的标签背景。

<div class="color-show-wrap">
  <div v-for="item in auxiliarycolors">
    <div
      class="color-show-content auxiliary"
      :style="{
        'background': item.gradient ? item.gradient : item.color,
        'color': item.textcolor
      }"
    >
      <p class="color-show-title">{{ item.title }}</p>
      <p class="color-show-color">{{ item.color }}</p>
    </div>
    <div
      class="color-show-auxiliary"
      :style="{
        'background': item.lightcolor,
        'color': item.color.split(' ')[1] ? item.color.split(' ')[1] : item.color
      }"
    >
      <p class="color-show-color light">{{ item.lightcolor }}</p>
    </div>
  </div>
</div>

#### 中性色
中性色广泛用于文本、背景和边框阴影等内容，不同明度的中性色可以用来表现页面内容的层次结构。

<div class="color-show-wrap">
  <div 
    v-for="item in neutralcolors"
    class="color-show-content"
    :style="{
      'background': item.opacity ? item.opacity: item.color,
      'color': item.textcolor,
    }"
  >
    <p class="color-show-title">{{ item.title }}</p>
    <p class="color-show-color">{{ item.color }}</p>
  </div>
</div>

#### 渐变色
渐变色主要用于专题活动视觉、运营入口卡片或icon背景。

<div class="color-show-wrap">
  <div 
    v-for="item in gradientcolors"
    class="color-show-content gradient"
    :style="{
      'background': item.color,
      'color': item.textcolor,
    }"
  >
    <p class="color-show-title">{{ item.title }}</p>
  </div>
</div>


::::vuecode::::
<script>
export default {
  data() {
    return {
      // 主色
      maincolors: [{
        title: '默认',
        color: '#0773FC',
        textcolor: '#FFF',
        lesstilte: 'mainColor1',
      },{
        title: '深色',
        color: '#0667E2',
        textcolor: '#FFF',
        lesstilte: 'mainColor2',
      },{
        title: '浅色',
        color: '#E6F1FE',
        textcolor: '#1B2337',
        lesstilte: 'mainColor3',
      }],
      // 辅助色
      auxiliarycolors: [{
        title: '警告',
        color: '#FA2323',
        lightcolor: '#FEE9E9',
        textcolor: '#FFF',
        lesstilte: 'auxColor1',
      },{
        title: '提醒',
        color: '#F5930D',
        lightcolor: '#FEF5E6',
        textcolor: '#FFF',
        lesstilte: 'auxColor2',
      },{
        title: '完成',
        color: '#02BB00',
        lightcolor: '#E5F8E5',
        textcolor: '#FFF',
        lesstilte: 'auxColor3',
      },{
        title: '会员',
        color: '#FCEEE1 #FCDAC1',
        lightcolor: '#6B3D1E',
        textcolor: '#6B3D1E',
        lesstilte: 'auxColor4',
        gradient: 'linear-gradient(90deg, #FCEEE1 0%, #FCDAC1 100%)'
      }],
      // 中性色
      neutralcolors: [{
        title: '标题/主要文字/其他深色',
        color: '#1B2337',
        textcolor: '#FFF',
        lesstilte: 'neuColor1',
      },{
        title: '一般文字',
        color: '#505A71',
        textcolor: '#FFF',
        lesstilte: 'neuColor2',
      },{
        title: '次要/占位提示文字',
        color: '#8693AB',
        textcolor: '#FFF',
        lesstilte: 'neuColor3',
      },{
        title: '内边框',
        color: '#000 10%',
        textcolor: '#1B2337',
        lesstilte: 'neuColor4',
        opacity: 'rgba(0, 0, 0, 10%)'
      },{
        title: '中灰背景/分割线',
        color: '#EBEEF5',
        textcolor: '#1B2337',
        lesstilte: 'neuColor5',
      },{
        title: '失效',
        color: '#F3F4F9',
        textcolor: '#1B2337',
        lesstilte: 'neuColor6',
      },{
        title: '一般背景色',
        color: '#F3F4F9',
        textcolor: '#1B2337',
        lesstilte: 'neuColor7',
      },{
        title: '浅灰背景',
        color: '#F8F8FB',
        textcolor: '#1B2337',
        lesstilte: 'neuColor8',
      }],
      // 渐变色
      gradientcolors: [{
        title: '蓝魂',
        color: 'linear-gradient(270deg, #0056F5 0%, #00E1FF 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor1',
      },{
        title: '赤梦',
        color: 'linear-gradient(90deg, #F91821 0%, #FF722E 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor2',
      },{
        title: '绮罗',
        color: 'linear-gradient(135deg, #FF5763 0%, #7E2CD2 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor3',
      },{
        title: '初阳',
        color: 'linear-gradient(135deg, #FDCA00 0%, #FF4501 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor4',
      },{
        title: '薄雾',
        color: 'linear-gradient(135deg, #FFC352 0%, #FC76B3 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor5',
      },{
        title: '魅惑',
        color: 'linear-gradient(269deg, #F0214F 1%, #F86F96 99%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor6',
      },{
        title: '竹叶',
        color: 'linear-gradient(269deg, #0CAC00 0%, #6BD633 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor7',
      },{
        title: '藤萝',
        color: 'linear-gradient(90deg, #CE9FFC 0%, #7367F0 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor8',
      },{
        title: '光芒',
        color: 'linear-gradient(135deg, #FFE324 0%, #FF9C33 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor9',
      },{
        title: '绿笛',
        color: 'linear-gradient(269deg, #28C76F 0%, #81FBB8 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor10',
      },{
        title: '风筝',
        color: 'linear-gradient(270deg, #EA5455 0%, #FEB692 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor11',
      },{
        title: '星魂',
        color: 'linear-gradient(270deg, #4C83FF 0%, #2AFADF 100%)',
        textcolor: '#FFF',
        lesstilte: 'gradColor12',
      }]
    }
  }
}
</script>
<style lang="less">
  .flex(@hor: center, @ver: center, @type: row) {
    display: flex;
    justify-content: @hor;
    align-items: @ver;
    flex-direction: @type;
  }
  .color-show-wrap {
    width: 100%;
    .flex(flex-start);
    flex-wrap: wrap;
    overflow: hidden;
    
  }
  .color-show-content {
    .flex(flex-start, flex-start, column);
    width: 321px;
    height: 106px;
    border-radius: 6px;
    padding: 38px 24px 24px;
    margin-bottom: 32px;
    box-sizing: border-box;
    position: relative;
    &:not(:last-child) {
      margin-right: 38px;
    }
    p {
      box-sizing: border-box;
      margin: 0;
    }
    .color-show-title {
      font-size: 12px;
      margin-bottom: 8px;
    }
    .color-show-color {
      font-size: 24px;
      &.light {
        font-size: 16px;
      }
    }
    &.auxiliary {
      margin-bottom: 0;
    }
    &.gradient {
      padding: 68px 24px 24px;
    }
  }
  .color-show-auxiliary {
    .flex(flex-start);
    width: 321px;
    height: 60px;
    border-radius: 0 0 6px 6px;
    margin-bottom: 32px;
    padding: 0 0 0 24px;
    margin-top: -7px;
    box-sizing: border-box;
  }
</style>
