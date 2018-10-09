<template>
    <div class="demo-block-control">
      <div class="demo-block-header" ref="header">
        <slot name="title"></slot>
      </div>
      <div class="demo-block-main" ref="content">
        <pre>
              <slot name="content"></slot>
        </pre>
      </div>
      <div @click="handelshow"  class="demo-block-footer" v-if="blockTxtTure">
        <Icon type="ios-arrow-down" class="block-icon"></Icon>
        <span class="block-txt" >显示代码</span> </div>
      <div @click="handelhide"  class="demo-block-footer" v-if="blockTxtFalse">
        <Icon type="ios-arrow-up" class="block-icon"></Icon>
        <span class="block-txt" >隐藏代码</span> </div>
    </div>
</template>

<script>
import Icon from '../../icon/src/icon.vue'
export default { 
  name:"demoBlockControl",
   components: {
     Icon
   },
   data() {
    return {
      blockTxtTure: true,
      blockTxtFalse :false
    }
  },
   methods:{
    handelshow() {
      this.$refs.content.style.height = this.$refs.content.scrollHeight + 'px'
      this.blockTxtTure = false
      this.blockTxtFalse = true
    },
    handelhide() {
      this.$refs.content.style.height = '0px'
      this.blockTxtTure = true
      this.blockTxtFalse = false
    }
  },
  mounted () {
    this.$refs.header.style.height = this.$refs.header.scrollHeight + 20+  'px'
  }
}
  
</script>

<style lang="less">
.demo-block-control{
  width: 100%;
  border: 1px solid #eee;
  float: left;
  vertical-align:middle;
}
.demo-block-header{
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding: 20px 20px 20px 40px;
}
.demo-block-main {
  width: 100%;
  height: 0.1px;
  transition: .7s;
  overflow: hidden;
  box-sizing: border-box;
  padding-left:10px; 
}
.demo-block-footer {
  color: #9B9B9B;
  cursor: pointer;
  width: 100%;
  height:50px;
  border-top: 1px solid #eee;
  line-height: 50px;
  text-align: center;
  &:hover {
    color: #5EA2FF;
  }
}
</style>
