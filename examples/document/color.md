## 标准色

用于统一整站颜色，达到视觉统一

### 主色

<div class="color-show-wrap">
  <div v-for="index in mainlist" class="color-show-content">
    <div class="color-show-color" :style="{'background': index.color}"></div>
    <div class="color-show-text-wrap">
      <div class="color-show-title">{{index.title}}</div>
      <div>{{index.des}}</div>
      <div>{{index.content}}</div>
    </div>
  </div>
</div>

### 辅助色
<div class="color-show-wrap">
  <div v-for="index in comlist" class="color-show-content">
    <div class="color-show-color" :style="{'background': index.color}"></div>
    <div class="color-show-text-wrap">
      <div class="color-show-title">{{index.title}}</div>
      <div>{{index.des}}</div>
      <div>{{index.content}}</div>
    </div>
  </div>
</div>

::::vuecode::::
<script>
export default {
  data() {
    return {
      mainlist: [{
        color: '#07AEFC',
        title: '主色调1',
        des: '色值：#07AEFC',
        content: '使用规则：主色调，应用于头部、重要性文字·按钮和icon'
      },{
        color: 'linear-gradient(to bottom right, #5ea2ff, #00e3ff)',
        title: '主色调2',
        des: '色值：#5EA2FF/#00E3FF',
        content: '使用规则：辅助色用于新手标的文字描述、数字展示、次级按钮'
      }],
      comlist: [{
        color: '#343434',
        title: '辅助色1',
        des: '色值：#343434',
        content: '使用规则：用于标题和重要内容，已填写内容和重要叙述性内容'
      },{
        color: '#626262',
        title: '辅助色2',
        des: '色值：#626262',
        content: '使用规则：用于次级标题信息和内容等'
      },{
        color: '#9B9B9B',
        title: '辅助色3',
        des: '色值：#9B9B9B',
        content: '使用规则：用于不重要的叙述性内容、灰色按钮文字内容'
      },{
        color: '#CDCDCD',
        title: '辅助色4',
        des: '色值：#CDCDCD',
        content: '使用规则：用于置灰按钮文字等'
      },{
        color: '#E7E7E7',
        title: '辅助色5',
        des: '色值：#E7E7E7',
        content: '使用规则：辅助色用于新手标的文字描述、数字展示、次级按钮'
      },{
        color: '#FAFAFA',
        title: '辅助色6',
        des: '色值：#FAFAFA',
        content: '用于背景色等辅助灰色使用，用于分割线，占位提示性、灰色按钮'
      },{
        color: '#FFFFFF',
        title: '辅助色7',
        des: '色值：#FFFFFF',
        content: '使用规则：用于背景色，高亮提示文字使用'
      }]
    }
  }
}
</script>
<style lang="less">
  .color-show-wrap {
    overflow: hidden;
    padding: 5px;
  }
  .color-show-content {
    float: left;
    margin-left: 40px;
    border-radius: 5px;
    overflow: hidden;
    width: 250px;
    height: 290px;
    box-shadow:0px 0px 5px 1px #dadada;
    margin-bottom: 40px;
    .color-show-color {
      width: 100%;
      height: 160px
    }
    .color-show-text-wrap {
      width: 100%;
      height: 130px;
      padding: 20px;
      background-color: #ffffff;
      div {
        font-size: 12px;
        width: 210px;
        line-height: 1.5em;
        color: #9b9b9b;
      }
      .color-show-title {
        margin: 0px 0px 10px 0px;
        color: #626262;
      }
    }
  }
</style>