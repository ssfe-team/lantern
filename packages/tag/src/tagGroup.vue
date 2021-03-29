<template>
  <div :class="classes">
    <lt-tag
      v-for="item in value"
      :key="item"
      :closable="isClosable(item)"
      :size="size"
      :color="color"
      @close="onClose(item)"
    >
      {{item}}
    </lt-tag>
    <div v-if="canAdd && value.length < maxLength" :style="{display: 'inline-block'}">
      <lt-input
        v-if="inputVisible"
        v-model="inputValue"
        ref="input"
        type="text"
        :style="{ width: '48px' }"
        @on-blur="handleInputConfirm"
        @keyup.enter="handleInputConfirm"
      />
      <lt-tag
        v-else
        color="transparent"
        :size="size"
        :style="{borderStyle: 'dashed', cursor: 'pointer'}"
        @click="showInput"
      >
        <lt-icon type="add-file" :size="12" />
        <span :style="{marginLeft: '4px'}">添加标签</span>
      </lt-tag>
    </div>
  </div>
</template>
<script>
import {colorType, sizetype} from './enum.js';
export default {
  name: 'tagGroup',
  data() {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    closable: {
      type: [Boolean, Array],
      default: false
    },
    canAdd: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
    },
    color: {
      default: 'gray',
      validator: (value) => (colorType.indexOf(value) !== -1)
    },
    size: {
      default: 'normal',
      validator: (value) => (sizetype.indexOf(value) !== -1)
    },
  },
  computed: {
    classes () {
      const prefixCls = 'lt-tag-group';
      let typeClass = {}
      if (colorType.indexOf(this.color) > -1) {
        typeClass = {...typeClass, [`${prefixCls}-${this.color}`]: true}
      }
      if (sizetype.indexOf(this.size) > -1) {
        typeClass = {...typeClass, [`${prefixCls}-${this.size}`]: true}
      }
      return [
        `${prefixCls}`,
        typeClass
      ]
    },
  },
  methods: {
    isClosable(item) {
      if(typeof this.closable === 'boolean') {
        return this.closable;
      }
      if(Array.isArray(this.closable)) {
        return this.closable.indexOf(item) > -1;
      }
      return false;
    },
    onClose(item) {
      const newValue = this.value.filter(value => value !== item)
      this.$emit('change', newValue)
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      this.inputVisible = false;
      if (this.inputValue) {
        const newValue = [...this.value, this.inputValue]
        this.$emit('change', newValue)
      }
      this.inputValue = ''
    }
  },
}
</script>
