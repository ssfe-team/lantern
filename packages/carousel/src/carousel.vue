<template>                                   
    <!-- carousel: carousels、inv、style、transitionBehavior、target -->
    <div class="lt-carousel" @mouseover="clearInv" @mouseout="runInv" :style="visualStyle">
    <transition-group tag="ul" class='lt-carousel__img' :name="behavior">
      <li v-for="(item , index) in carousels" :key="index" v-show="index === activeIndex">
        <a :href="item.href" :target="target" :style="getAStyle(index)"></a>
      </li>
    </transition-group>
    <ul class="lt-carousel__pages">
      <li v-for="(item, index) in carousels" :key="index"
          @click="goto(index)"
          class="lt-carousel__pages-point"
      >
        <a :class="{'active': index === activeIndex}"></a>
      </li>
    </ul>
    <div class="lt-carousel__controlBtn">
      <a class="lt-carousel__controlBtn-prev" @click="goto(prevIndex)"><span></span></a>
      <a class="lt-carousel__controlBtn-next" @click="goto(nextIndex)"><span></span></a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Carousel',
    props: {
      carousels: {
        type: Array,
        default () {
          return []
        }
      },
      inv: {
        type: Number,
        default: 1000
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
    mounted () {
      this.runInv()
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
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    }
  }
</script>

