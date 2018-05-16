<!--Created by suti on 2017/2/18.-->
<template>
  <div :class="{isbackground: background}" class="lt-pagination">
    <div class="jumpwrap">
      <input class="jump-input" type="number" :max="total" min="1" :value="nowPage" ref="jumpInput"><button class="jump-btn" @click="jumpPageClick">跳页</button>
    </div>
    <button class="btn-prev" @click="prev()" :class="{disabled: nowPage == 1}">
      <lt-icon type="chevron-left"></lt-icon>
    </button><ul>
      <li v-for="(value, key) in pageList" :key="value + key" :class="{active: value == nowPage, disabled: value == '...'}" @click="jumpPage(value)">{{value}}</li>
    </ul><button class="btn-next" @click="next" :class="{disabled: nowPage == total}">
      <lt-icon type="chevron-right"></lt-icon>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageList: [],
      nowPage: this.current
    }
  },
  props: {
    total: {
      required: true,
      type: Number
    },
    current: {
      default: 1,
      type: Number
    },
    background: {
      default: true,
      type: Boolean
    }
  },
  mounted() {
    if(this.total <= 7) {
      for(let i = 0;i < this.total;i++) {
        this.pageList.push(i + 1);
      }
    } else {
      this.setState();
    }
  },
  methods: {
    // 跳页点击
    jumpPageClick() {
      this.jumpPage(this.$refs.jumpInput.value);
    },
    // 跳页
    jumpPage(index) {
      if(this.nowPage == index || index == '...') return;
      this.nowPage = index;
      this.$emit('changeSize', index);
      this.setState();
    },
    // 上页
    prev() {
      if(this.nowPage === 1) return;
      this.jumpPage(this.nowPage - 1);
    },
    // 下页
    next() {
      if(this.nowPage === this.total) return;
      this.jumpPage(this.nowPage + 1);
    },
    setState() {
      if(this.total <=7) return;
      this.pageList = [1];
      if(this.nowPage - 1 <= 3){
        this.pageList.push(...[2,3,4,5, '...', this.total]);
      } else if(this.nowPage - 1 > 3 && this.total - this.nowPage  > 3){
        this.pageList.push(...['...', this.nowPage - 1, this.nowPage, this.nowPage + 1, '...', this.total]);
      } else {
        this.pageList.push('...');
        for(let i = this.total - 4;i <= this.total;i++) {
          this.pageList.push(i);
        }
      }
    }
  }
}
</script>