<template>
  <div class="lt-input-wrap" :class="{maxlength: this.maxlength}">
    <input v-if="this.type === 'input'"
      class="lt-input"
      :class="{disabled: this.disabled}"
      type="text" 
      :disabled="this.disabled"
      :readonly="this.readonly"
      :maxlength="this.maxlength"
      v-model="inputValue"
      :placeholder="this.placeholder"
      @focus="this.$emit('focus', eve)"
      @blur="this.$emit('blur', eve)"
      @change="this.$emit('change', this.inputValue)"
    />
    <textarea v-else-if="this.type === 'textarea'" 
      class="lt-textarea"
      :class="{disabled: this.disabled}"
      :disabled="this.disabled"
      :readonly="this.readonly"
      :maxlength="this.maxlength"
      v-model="inputValue"
      :placeholder="this.placeholder"
      :rows="this.rows"
      @focus="this.$emit('focus', eve)"
      @blur="this.$emit('blur', eve)"
      @change="this.$emit('change', this.inputValue)"
    ></textarea>
    <span v-if="this.maxlength" class="maxlengthtips">{{this.maxlengthtips}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: this.value
    }
  },
  props: {
    // input类型
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    maxlength: {
      type: Number | String
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
      type: Number | String,
      default: 4
    }
  },
  computed: {
    maxlengthtips() {
      return this.inputValue.length + '/' + this.maxlength;
    }
  }
}
</script>