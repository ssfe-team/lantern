<template>
  <div v-html="msg">
  </div>
</template>
<script>
import md1 from 'markdown-it'
const md = md1();
import layoutmd from '../document/layout.md'
export default {
  data() {
    return {
      msg: md.render('# test')
    }
  },
  mounted() {
    console.log(md.render(
      '# test'
    ));
  }
}
</script>