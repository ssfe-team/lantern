<!--Created by suti on 2017/2/18.-->
<template>
  <div class="paging" :style="{background: bgcolor}">
    <div class="jump">
      <input
        type="number"
        :max="count"
        :placeholder="current"
        :min="1"
        v-model="inputValue"
        @blur="test"
        @keyup.enter="enter"
      >
      <span
        @click="inputjump"
      >
        跳页
      </span>
    </div>
    <div class="paging-sele sele">
      <div class="prev" @click="butjump('p')"></div>
      <div class="number" :style="{width:numberWidth+'px'}" :data="numberWidth" ref="number">
        <div class="shadow-layout-left" v-if="count>7&&current>4">
          <span>
            <a v-if="type === 'event'" @click="$emit('jumpUrl',1)">{{1}}</a>
            <router-link :to="numbers[0].router" v-else-if="type === 'route'">{{1}}</router-link>
          </span>
          <span>
            <a>...</a>
          </span>
        </div>
        <ul class="main-layout" :style="{left:listLeft+'px'}" ref="mainLayout">
          <li v-for="index in numbers"
              :class="index.style">
            <a @click="lijump" v-if="type === 'event'">{{index.content}}</a>
            <router-link :to="index.router" v-else-if="type === 'route'">{{index.content}}</router-link>
            <a v-else>type error</a>
          </li>
        </ul>
        <div class="shadow-layout" v-if="count>7&&current<(numbers.length-3)">
          <span>
            <a>...</a>
          </span>
          <span>
            <a v-if="type === 'event'" @click="$emit('jumpUrl',numbers.length)">{{numbers.length}}</a>
            <router-link :to="numbers[numbers.length-1].router" v-else-if="type === 'route'">{{numbers.length}}</router-link>
          </span>
        </div>
        <!--<ul class="second-layout">-->
        <!--<li v-for="index in numbers"><a href="">{{index}}</a></li>-->
        <!--</ul>-->
      </div>
      <div class="next" @click="butjump('n')"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../styles/packages/pagination/pagination.less";
</style>

<script>
  export default {
    data () {
      return {
        numbers: [],
        inputValue: 1,
        inputActive: false,
        listLeft: 0,
      }
    },
    props: {
      count: {
        required: true,
        type: [Number, String],
      },
      current: {
        required: true,
        type: [Number, String],
      },
      bgcolor: {
        type: [String],
        default: '#f8f8f8',
      },
      type: {
        default: 'event',
      },
      routePath: {
        default: function (e) {
          return e
        },
      },
    },
    mounted () {
      for (let i = 1; i <= this.count; i++) {
        this.numbers.push({
          content: i,
          style: i == this.current ? {active: true} : {active: false},
          router: typeof this.routePath === 'function' && this.routePath(i)
        })
      }
    },
    computed:{
      numberWidth(){
        if (this.count < 7) {
          return 25 * this.count
        } else {
          return 176
        }
      }
    },
    watch: {
      count: function () {
        this.numbers = []
        for (let i = 1; i <= this.count; i++) {
          this.numbers.push({
            content: i,
            style: i == this.current ? {active: true} : {active: false},
            router: typeof this.routePath === 'function' && this.routePath(i)
          })
        }
      },
      current (t) {
        this.inputValue = null
        try {
          Array.prototype.map.call(this.$refs.mainLayout.children, function (child) {
            child.classList.remove('active')
          })
          this.$refs.mainLayout.children[t - 1].classList.add('active')

          if (this.count > 7) {

            if (t <= 4) {
              this.listLeft = 0
            } else if (t > 4 && t < this.count - 3) {
              this.listLeft = -(t - 4) * 25
            } else if (t >= this.count - 3) {
              this.listLeft = -(this.count - 3 - 4) * 25
            }

          } else {
            this.listLeft = 0
            // this.$refs.number.style.width = this.$refs.mainLayout.offsetWidth
          }
        } catch (err) {
          console.log(err)
        }

      },
    },
    methods: {
      lijump (event) {
        let it = event.target
        this.$emit('jumpUrl', it.innerHTML)
      },
      inputjump () {
        if (this.inputValue == null) return
        this.$emit('jumpUrl', this.inputValue|0)
      },
      butjump (c) {
        if (c == 'p' && this.current != 1) {
          this.$emit('jumpUrl', this.current - 1)
        } else if (c == 'n' && this.current != this.count) {
          this.$emit('jumpUrl', this.current - (-1))
        }
      },
      test (e) {
        if (e.target.value > this.count) {
          this.inputValue = this.count
        } else if (e.target.value < 1) {
          this.inputValue = 1
        }
      },
      enter (e) {
        this.test(e)
        this.inputjump()
      },
    },
  }
</script>