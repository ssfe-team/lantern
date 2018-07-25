<template>
    <div class="lt-steps" :class="stepsClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'Steps',    
  data () {
    return {}
  },
  props: {
    current: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    size: String
  },
  computed: {
    stepsClass () {
      return {
        'lt-steps--vertical': this.direction === 'vertical',
        'lt-steps--small': this.size === 'small'
      }
    }
  },
  watch: {
    current(v) {
    this.setActiveIndex(v)      
    }
  },
  methods: {
    setActiveIndex (index) {
      this.$children.forEach((item, i) => {
        if (i < index) {
          item.status = -1
        }else if(i === index){
           item.status = 0
        }
        else {
          item.status = 1
        }
      })
    }
  },
  mounted () {
    this.setActiveIndex(this.current)
  }
}
</script>
