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
    },
    val: String
  },
  methods: {
    valueHandle (item) {
      if(!item.disabled){
        this.$emit('value', item.label)
        item.isClick = true
        this.list.forEach(element => {
          if(element != item){
            element.isClick = false
          }
        });
      }
    },
    handelDisabled (item) {
      return{
        'lt-option__li--disabled': item.disabled,
        'lt-option__li--click': item.isClick
        // 'lt-option__li--click': item == this.val
      }
    }
  },
  mounted () {
    this.list.forEach(element => {
      this.$set(element, 'isClick', false)
    });
  }
}
</script>
