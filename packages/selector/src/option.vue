<template>
  <ul class="lt-option">
    <li v-for="item in list" :key="item.label" @click="valueHandle(item)" :class="handelDisabled(item)">{{item.label}}</li>
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
      if(!item.disabled){
        this.$emit('value', item.label)
      }
    },
    handelDisabled (item) {
      return{
        'lt-option__li--disabled': item.disabled
      }
    }
  }
}
</script>