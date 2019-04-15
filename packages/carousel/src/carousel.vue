<template>
  <div :style="visualStyle" class="lt-carousel" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" :name="setBehavior" class="lt-carousel__img">
      <li
        v-for="(item, index) in carousels"
        :key="item + '_' + index"
        v-show="index === activeIndex"
      >
        <a :href="item.href" :target="target" :style="getAStyle(index)"></a>
      </li>
    </transition-group>
    <ul class="lt-carousel__pages" v-if="carousels.length > 1">
      <li
        v-for="(item, index) in carousels"
        :key="index"
        @click="handleClick(index)"
        class="lt-carousel__pages-point"
        @mouseover="handleMouseover(index)"
      >
        <a :class="{'active': index === activeIndex}"></a>
      </li>
    </ul>
    <div class="lt-carousel__controlBtn" v-if="carousels.length > 1 && showTurnBtn">
      <a class="lt-carousel__controlBtn-prev" @click="goto(prevIndex, 'prev')">
        <span></span>
      </a>
      <a class="lt-carousel__controlBtn-next" @click="goto(nextIndex, 'next')">
        <span></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  data () {
    return {
      activeIndex: 0,
      isLeft: false
    }
  },
  props: {
    carousels: {
      type: Array,
      default () {
        return []
      }
    },
    inv: {
      type: Number,
      default: 3000
    },
    behavior: {
      type: String,
      default: 'move'
    },
    visualStyle: {
      type: Object,
      default () {
        return {
          width: '100%',
          maxWidth: '1920px',
          height: '420px'
        }
      }
    },
    imgStyle: {
      type: Object,
      default () {
        return {
          width: '100%',
          height: '420px'
        }
      }
    },
    target: {
      type: String,
      default: '_blank'
    },
    showTurnBtn: {
      type: Boolean,
      default: true
    },
    handleType: {
      type: String,
      default: 'hover'
    }
  },
  computed: {
    setBehavior () {
      return this.behavior === 'move' ? this.trBehavior : this.behavior
    },
    trBehavior () {
      return this.isLeft ? 'move-left' : 'move'
    },
    prevIndex () {
      return this.activeIndex === 0 ? this.carousels.length - 1 : this.activeIndex - 1
    },
    nextIndex () {
      return this.activeIndex === this.carousels.length - 1 ? 0 : this.activeIndex + 1
    }
  },
  mounted () {
    this.runInv()
  },
  methods: {
    goto (index, direction) {
      if (this.behavior === 'move') {
        if (direction === 'prev') {
          this.isLeft = true
        } else {
          this.isLeft = false
        }
      }
      this.activeIndex = index
    },
    getAStyle (index) {
      return {
        backgroundImage: `url(${this.carousels[index].src})`,
        ...this.imgStyle
      }
    },
    runInv () {
      this.invTimer = setInterval(() => {
        this.goto(this.nextIndex, 'next')
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invTimer)
    },
    handleClick (index) {
      if (this.handleType === 'hover') return
      this.goto(index)
    },
    handleMouseover (index) {
      if (this.handleType === 'click') return
      this.goto(index)
    }
  }
}
</script>
