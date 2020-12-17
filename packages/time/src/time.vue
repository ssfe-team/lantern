<template>
  <span class="lt-time">
    {{date}}
  </span>
</template>

<script>

import { oneOf } from '../../../src/utils/assist'
import Time from './time'
const prefixCls = 'lt-time'
export default {
  name: 'LtTime',
  data () {
    return {
      date: ''
    }
  },
  props: {
    time: {
      type: [Number, Date, String],
      required: true
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['relative', 'date', 'datetime'])
      },
      default: 'relative'
    },
    interval: {
      type: Number,
      default: 60
    },
    days: {
      type: Number,
      default: 0
    }
  },
  methods: {
    setTime() {
      const type = typeof this.time
      let time

      if (type === 'number') {
        const timestamp = this.time.toString().length > 10 ? this.time : this.time * 1000
        time = (new Date(timestamp)).getTime()
      } else if (type === 'object') {
        time = this.time.getTime()
      } else if (type === 'string') {
        // 兼容 safari 处理不了带‘-’的时间戳 后续优化
        let endTime = this.time.replace(/-/g, '/')
        endTime = endTime.substring(0, endTime.indexOf('.'))
        time = new Date(endTime).getTime()
      }
      if (this.type === 'relative') {
        this.date = Time(time, this.days)
      } else {
        const date = new Date(this.time)
        const year = date.getFullYear()
        const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

        if (this.type === 'datetime') {
          this.date = `${year}-${month}-${day} ${hour}:${minute}:${second}`
        } else if (this.type === 'date') {
          this.date = `${year}-${month}-${day}`
        }
      }
    }
  },
  mounted () {
    this.setTime()
    this.timer = setInterval(() => {
      this.setTime()
    }, 1000 * this.interval)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer)
  }
}
</script>
