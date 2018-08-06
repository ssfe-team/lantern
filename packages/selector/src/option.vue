<template>
  <ul class="option">
    <li v-for="item in list" :key="item" @click="valueHandle(item)" >{{item}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    valueHandle (item) {
      this.$emit('value', item)
    }
  }
}
</script>