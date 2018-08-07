<template>
  <!-- item：head（icon、icon-inner、line）+ main（title、description） -->
  <div class="lt-step" :class="stepClass">
    <div class="lt-step__head" :class="headClass">
      <div class="lt-step__icon" :class="iconClass">
        {{ icon }}
        <span class="lt-step__icon-inner" :class="iconInnerClass">{{ iconinner }}</span>
          <!-- <span class="lt-step__icon-inner" :class="iconInnerClass">{{ status === -1 ? '' : iconinner }}</span> -->
      </div>
    </div>
    <div class="lt-step__main" :class="mainClass">
      <div class="lt-step__main-head" :class="mainHeadClass">
         <div class="lt-step__title" :class="titleClass">{{ title }}</div>
        <div class="lt-step__line" :class="lineClass"></div>
      </div>
      <div class="lt-step__description" :class="descriptionClass">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step',  
  props: {
    title: String,
    icon: String,
    iconinner: String,
    description: String,
    lticoncheckmark: String
  },
  data () {
    return {
      status: 1
    }
  },
  computed: {
    stepClass () {
      return {}
    },
    headClass () {
      return {}
    },
    iconClass () {
      return {
        preBg: this.status === -1,
        activeBg: this.status === 0
      }
    },
    iconInnerClass () {
      return {
        preInner: this.status === -1
      }
    },
    mainClass () {
      return {}
    },
    lineClass () {
      return {
        preBg: this.status === -1,
        activeBg: this.status === 0
      }
    },
    mainHeadClass () {
      return {}
    },
    titleClass () {
      return {
        preText: this.status === -1,
        activeText: this.status === 0
      }
    },
    descriptionClass () {
      return {
        preText: this.status === -1,
        activeText: this.status === 0,
      }
    }
  }
}
</script>
