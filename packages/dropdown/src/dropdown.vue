<template>
  <div class="dropdown"
       :class="[{disabled:dropDownDisabled},{hover:eventType==='hover'},{active}]"
       @click="(eventType==='click')&&(active=!active)"
  >
    <div class="dropdown-sel">
      <span :title="da.sel">{{da.sel}}</span>
    </div>
    <div class="dropdown-drop" :style="{width:optionWidth+'px'}">
      <div
        class="dropdown-drop-option"
        v-for="(e,i) in da.opt"
        :class="{disabled:e.dis,selected:e.sel}"
        @click.stop="!e.dis&&!e.sel&&test(i)"
        :title="e.des"
      >
        {{e.des}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dropdown',
    data () {
      return {
        da: {
          sel: '',
          opt: [],
        },
        active: false,
      }
    },
    props: {
      data: {
        required: true,
        default: {
          sel: '',
          opt: [],
          id: null,
        },
      },
      optionWidth: {
        default: 184,
      },
      dropDownDisabled: {},
      reSet: {},
      eventType: {
        default: 'hover',
      },
    },
    mounted () {
      let {sel, opt, id} = this.data
      this.da = {sel, opt, id}
    },
    watch: {
      data () {
        let {sel, opt, id} = this.data
        this.da = {sel, opt, id}
      },
      reSet () {
        let {sel, opt, id} = this.data
        this.da = {sel, opt, id}
      },
    },
    methods: {
      test (j) {
        let arr = []
        for (let i = 0; i < this.da.opt.length; i++) {
          arr[i] = {dis: this.da.opt[i].dis, des: this.da.opt[i].des, sel: i === j, id: this.da.opt[i].id}
        }
        this.$emit('select', arr[j])
        this.$set(this.da, 'opt', arr)
        this.$set(this.da, 'sel', arr[j].des)
        this.active = false
      },
    },
  }
</script>
<style lang="less" scoped>
  @import '../../../styles/packages/dropdown/dropdown';
</style>