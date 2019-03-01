<template>
  <div
    class="lt-input-wrap"
    :class="{maxlength: this.maxlength}"
  >
    <input
      v-if="this.type !== 'textarea'"
      class="lt-input"
      :class="{disabled: this.disabled}"
      :type="type"
      :disabled="this.disabled"
      :readonly="this.readonly"
      :maxlength="this.maxlength"
      v-model="inputValue"
      @change="$emit('change', $event.target.value)"
      :placeholder="this.placeholder"
    >
    <textarea
      v-else
      class="lt-textarea"
      :class="{disabled: this.disabled}"
      :disabled="this.disabled"
      :readonly="this.readonly"
      :maxlength="this.maxlength"
      :placeholder="this.placeholder"
      :rows="this.rows"
      v-model="inputValue"
      @change="$emit('change', $event.target.value)"
    />
    <span
      v-if="this.maxlength"
      class="maxlengthtips"
    >
      {{ this.maxlengthtips }}
    </span>
  </div>
</template>
<script>
import { oneOf } from 'lantern/src/utils/assist'

export default {
  data () {
    return {
      inputValue: this.value
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // input类型
    type: {
      validator (value) {
        return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date'])
      },
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    maxlength: {
      type: [Number, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    rows: {
      type: [Number, String],
      default: 4
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    maxlengthtips () {
      return (this.inputValue ? this.inputValue.length : '0') + '/' + this.maxlength
    }
  }
}
</script>
