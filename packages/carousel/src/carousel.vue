<template>                                   
    <!-- carousel: carousels、inv、style、transitionBehavior、target -->
    <div class="carousel-show" @mouseover="clearInv" @mouseout="runInv" :style="visuaStyle">
    <transition-group tag="ul" class='carousel-ul' :name="behavior">
      <li v-for="(item , index) in carousels" :key="index" v-show="index === activeIndex">
        <a :href="item.href" :target="target" :style="getAStyle(index)"></a>
      </li>
    </transition-group>
    <ul class="carousel-pages">
      <li v-for="(item, index) in carousels" :key="index"
          @click="goto(index)"
          class="carousel-page-point"
      >
        <a :class="{'active': index === activeIndex}"></a>
      </li>
    </ul>
    <div class="controlBtn">
      <a class="prev" @click="goto(prevIndex)"><span></span></a>
      <a class="next" @click="goto(nextIndex)"><span></span></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  props: {
    carousels: {
      type: Array,
      default:[{}]
    },
    inv: {
      type: Number,
      default: 1000
    },
    behavior: {
      type: String,
      default: 'move'
    },
    visuaStyle: {
      type: Object,
      default: {
        width: '100%',
        maxWidth: '1920px',
        height:'420px'
      }
    },
    imgStyle: {
      type: Object,
      default: {
        width: '100%',
        height:'420px'
      }
    },
    target: {
      type: String,
      default: '_blank'
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    prevIndex () {
      if (this.activeIndex === 0) {
        return this.carousels.length - 1
      } else {
        return this.activeIndex - 1
      }
    },
    nextIndex () {
      if (this.activeIndex === this.carousels.length - 1) {
        return 0
      } else {
        return this.activeIndex + 1
      }
    },

  },
  methods: {
    goto (index) {
      this.activeIndex = index
    },
     getAStyle (index) {
      return {
        backgroundImage: `url(${this.carousels[index].src})`,
        ...this.imgStyle
      }
    } ,  
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

