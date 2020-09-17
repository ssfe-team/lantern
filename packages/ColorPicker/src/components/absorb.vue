<template>
  <div></div>
</template>
<script>
import SeeColors from '../seeColors'
const _ct = (() => {
  return {
    fixHSB (hsb) {
      return {
        h: Math.min(360, Math.max(0, hsb.h)),
        s: Math.min(100, Math.max(0, hsb.s)),
        b: Math.min(100, Math.max(0, hsb.b))
      }
    },
    fixRGB (rgb) {
      return {
        r: Math.min(255, Math.max(0, rgb.r)),
        g: Math.min(255, Math.max(0, rgb.g)),
        b: Math.min(255, Math.max(0, rgb.b))
      }
    },
    fixHex (hex) {
      let len = 6 - hex.length
      if (len > 0) {
        let o = []
        for (let i = 0; i < len; i++) {
          o.push('0')
        }
        o.push(hex)
        hex = o.join('')
      }
      return hex
    },
    HexToRGB (hex) {
      hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16)
      return { r: hex >> 16, g: (hex & 0x00ff00) >> 8, b: hex & 0x0000ff }
    },
    HexToHSB (hex) {
      return this.RGBToHSB(this.HexToRGB(hex))
    },
    RGBToHSB (rgb) {
      let hsb = {
        h: 0,
        s: 0,
        b: 0
      }
      let min = Math.min(rgb.r, rgb.g, rgb.b)
      let max = Math.max(rgb.r, rgb.g, rgb.b)
      let delta = max - min
      hsb.b = max
      hsb.s = max != 0 ? 255 * delta / max : 0
      if (hsb.s != 0) {
        if (rgb.r == max) {
          hsb.h = (rgb.g - rgb.b) / delta
        } else if (rgb.g == max) {
          hsb.h = 2 + (rgb.b - rgb.r) / delta
        } else {
          hsb.h = 4 + (rgb.r - rgb.g) / delta
        }
      } else {
        hsb.h = -1
      }
      hsb.h *= 60
      if (hsb.h < 0) {
        hsb.h += 360
      }
      hsb.s *= 100 / 255
      hsb.b *= 100 / 255
      return hsb
    },
    HSBToRGB (hsb) {
      let rgb = {}
      let h = Math.round(hsb.h)
      let s = Math.round(hsb.s * 255 / 100)
      let v = Math.round(hsb.b * 255 / 100)
      if (s == 0) {
        rgb.r = rgb.g = rgb.b = v
      } else {
        let t1 = v
        let t2 = (255 - s) * v / 255
        let t3 = (t1 - t2) * (h % 60) / 60
        if (h == 360) h = 0
        if (h < 60) {
          rgb.r = t1
          rgb.b = t2
          rgb.g = t2 + t3
        } else if (h < 120) {
          rgb.g = t1
          rgb.b = t2
          rgb.r = t1 - t3
        } else if (h < 180) {
          rgb.g = t1
          rgb.r = t2
          rgb.b = t2 + t3
        } else if (h < 240) {
          rgb.b = t1
          rgb.r = t2
          rgb.g = t1 - t3
        } else if (h < 300) {
          rgb.b = t1
          rgb.g = t2
          rgb.r = t2 + t3
        } else if (h < 360) {
          rgb.r = t1
          rgb.g = t2
          rgb.b = t1 - t3
        } else {
          rgb.r = 0
          rgb.g = 0
          rgb.b = 0
        }
      }
      return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) }
    },
    RGBToHex (rgb) {
      let hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)]
      Array.prototype.map.call(hex, function(val, nr) {
        if (val.length == 1) {
          hex[nr] = '0' + val
        }
      })
      return hex.join('')
    },
    HSBToHex (hsb) {
      return this.RGBToHex(this.HSBToRGB(hsb))
    }
  }
})()
export default {
    name: 'absorb',
    props: {
      imgUrl: {
        type: String,
        required:true
      },
      color: {
        required: true
      },
      value: {
        required: true,
        type: Boolean
      }
    },
    data() {
      return {
      }
    },
    methods: {
      getColor(url, option) {
        new SeeColors(url, option).then(e => {
          let curHsb = {}
          if (e.rgbaColor) {
            curHsb = _ct.RGBToHSB(e.rgbaColor)
          }
          this.color.fromString('#'+_ct.HSBToHex(curHsb));
          this.$emit('input', false)
        })
      },
    },
    mounted() {
      const img = new Image();
      img.src = this.imgUrl;
      img.onload = ()=>{
        const WIDTH = 480
        const height = WIDTH / img.width * img.height
        this.getColor(this.imgUrl, {width: WIDTH, height})
      }
    },
};
</script>

<style lang='' scoped>

</style>
