<template>
    <!-- carousel: carousels、inv、styleObject、target -->
    <div class="carousel-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='carousel-ul' :name="name">
      <li v-for="(item , index) in carousels" :key="index" v-show="index === activeIndex">
        <a :href="item.href" :target="target">
          <img :src="item.src" alt="">
        </a>
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
      default () {}
    },
    inv: {
      type: Number,
      default: 1000
    },
    behavior: {
      type: String,
      default: 'move'
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
    }
  },
  methods: {
    goto (index) {
      this.activeIndex = index
    },
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
