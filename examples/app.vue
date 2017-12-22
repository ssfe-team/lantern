<template>
  <div id="app">
    {{msg}}
    <message></message>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Lantern'
    }
  }
}
</script>