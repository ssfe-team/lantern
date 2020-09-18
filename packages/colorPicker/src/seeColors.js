'use strict'
import cursorImg from './pick.png'

class SeeColors {
  //构造器，需要传入元素或一个css样子的选择器，一个option（可选）

  constructor (imgUrl, option, fc) {
    this.fc = fc

    function getImgWH (imgUrl) {
      return new Promise(resolve => {
        let img = new Image
        img.src = imgUrl
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          resolve({
            width: img.width,
            height: img.height,
            img,
          })
        }
      })
    }

    return getImgWH(imgUrl).then(e => {
      this.scroller = this.$('body').scrollTop
      let {width, height, img} = e
      console.log(width,height,option);
      this.img = img
      this.option = option || {
        width,
        height,
        left: 0,
        top: 0,
      }

      return new Promise((resolve) => {
        this.controller().then((it) => {
          this.exit()
          resolve(it)
        })

      })
    })
  }

  //控制函数，链接渲染、生成图片和创建响应的函数。返回一个被选中的像素点颜色
  controller () {
    // let onload=this.waiting()
    // document.body.appendChild(onload)

    return this.createImage().then(function (can) {
      // onload.remove()

      let react = this.createSeeColorContainer(can.canvas)
      let canvas = can.canvas,
        width = canvas.width,
        height = canvas.height

      return this.addListener(this.$('.seeColors-temp-container'),
        (x, y) => {
          if (this.$('.seeColors-follow-cooky') == null) {
            this.createFollowCookies()
          }
          if (x < react.left || y < react.top || x > react.left + react.width ||
            y > react.top + react.height) {
            this.removeFollowCookies()
            return
          }
          let top = canvas.offsetTop,
            left = canvas.offsetLeft,
            mX = x - left,
            mY = y - top,
            pixel = mY * width + mX
          this.setFollowCookies(x, y + this.$('body').scrollTop, can, pixel,
            width, height)
          this.fc && this.fc({
            r: can.imgData[(pixel - 1) * 4],
            g: can.imgData[(pixel - 1) * 4 + 1],
            b: can.imgData[(pixel - 1) * 4 + 2],
            a: can.imgData[(pixel - 1) * 4 + 3] / 255,
          })
        },
        (x, y) => {
          if (x < react.left || y < react.top || x > react.left + react.width ||
            y > react.top + react.height) {
            this.removeFollowCookies()
            return {
              pixelX: undefined,
              pixelY: undefined,
              colorString: undefined,
              rgbaColor: undefined,
            }
          }

          let top = canvas.offsetTop - this.$('body').scrollTop,
            left = canvas.offsetLeft - this.$('body').scrollLeft,
            mX = x - left,
            mY = y - top,
            pixel = mY * width + mX

          return {
            pixelX: mX,
            pixelY: mY,
            colorString: 'rgba(' +
            can.imgData[(pixel - 1) * 4] + ',' +
            can.imgData[(pixel - 1) * 4 + 1] + ',' +
            can.imgData[(pixel - 1) * 4 + 2] + ',' +
            can.imgData[(pixel - 1) * 4 + 3] / 255 + ')',
            rgbaColor: {
              r: can.imgData[(pixel - 1) * 4],
              g: can.imgData[(pixel - 1) * 4 + 1],
              b: can.imgData[(pixel - 1) * 4 + 2],
              a: can.imgData[(pixel - 1) * 4 + 3] / 255,
            },
          }

        }).then((it) => {
        return it
      })

    }.bind(this)).then((it) => {
      return it
    }).catch((e) => {
      console.log(e + '渲染失败!')
      return null
    })
  }

  $ (sele) {
    return document.querySelector(sele)
  }

  $s (sele) {
    return document.querySelectorAll(sele)
  }

  //获取鼠标坐标
  getMouseLocation (e) {
    // let e=e|| window.event
    return {
      mouseX: e.clientX,
      mouseY: e.clientY,
    }
  }

  //获取ele的样式
  getStyle (ele) {
    return window.getComputedStyle
      ? window.getComputedStyle(ele, null)
      : ele.currentStyle
  }

  //为container添加响应，fn为mousemove的响应，fin为click的响应
  addListener (container, fn, fin) {

    container.addEventListener('mousemove', (e) => {
      let mouseLocation = this.getMouseLocation(e)
      fn(mouseLocation.mouseX, mouseLocation.mouseY)
    }, false)

    // container.addEventListener("mouseover",()=>{
    //     let mouseLocation=this.getMouseLocation()
    //     this.createFollowCookies()
    // },false)
    // container.addEventListener("mouseout",
    //     this.removeFollowCookies.bind(this)
    //     ,false)

    return new Promise((resolve) => {

      container.addEventListener('click', (e) => {
        let mouseLocation = this.getMouseLocation(e)
        resolve(fin(mouseLocation.mouseX, mouseLocation.mouseY))
      }, false)

    })

  }

  //根据传入的节点生成图片，返回一个Promise为当图片成功加载后的响应
  createImage () {

    return new Promise((resolve) => {
      let canvas = document.createElement('canvas')
      let {width, height} = this.option
      // canvg(c, this.svg, {
      // 	log: true, ignoreMouse: true, renderCallback: e => {
      // 		let ctx = c.getContext('2d')
      // 		let imgData = ctx.getImageData(0, 0, this.option.width, this.option.height).data
      // 		console.log(imgData)
      // 		resolve({
      // 			canvas: c,
      // 			ctx: ctx,
      // 			imgData: imgData
      // 		})
      // 	}
      // })
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(this.img, 0, 0, width, height)
      let imgData = ctx.getImageData(0, 0, width, height).data
      resolve({
        canvas,
        ctx,
        imgData,
      })
    })
  }

  //创建一个div标签，这个标签覆盖整个body体并为白色半透明，并为canvas设置位置。效果为：截屏时，this.dom以外的其他元素有模糊效果
  createSeeColorContainer (canvas) {

    let container = document.createElement('div')
    container.classList.add('seeColors-temp-container')
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.position = 'fixed'
    container.style.zIndex = '9999999'
    container.style.top = '0'
    container.style.left = '0'
    container.style.backgroundColor = 'rgba(0,0,0,.24)'
    container.style.boxSizing = 'content-box'
    container.appendChild(canvas)
    canvas.style.position = 'absolute'
    canvas.classList.add('seeColors-temp-canvas')
    canvas.style.zIndex = '1000'
    canvas.style.boxSizing = 'content-box'
    this.$('body').appendChild(container)
    canvas.style.left = (container.offsetWidth - this.option.width) / 2 + 'px'
    canvas.style.top = (container.offsetHeight - this.option.height) / 2 + 'px'
    canvas.style.cursor = `url(${cursorImg}) 0 28, default`

    return {
      left: parseFloat(canvas.style.left),
      top: parseFloat(canvas.style.top),
      width: parseFloat(canvas.width),
      height: parseFloat(canvas.height),
    }
  }

  //创建一个跟随鼠标的div
  createFollowCookies () {

    if (!this.$('.seeColors-follow-cooky')) {

      let cooky = document.createElement('div')
      cooky.classList.add('seeColors-follow-cooky')
      cooky.style.position = 'absolute'
      cooky.style.border = '1px black solid'
      cooky.style.width = '122px'
      cooky.style.height = '122px'
      cooky.style.borderRadius = '61px'
      cooky.style.overflow = 'hidden'
      cooky.style.boxSizing = 'content-box'
      cooky.style.cursor = 'none'
      //cooky.style.cursor = `url(${cursorImg}) 0 28, default`

      for (let i = 0; i < 121; i++) {

        let cc = document.createElement('div')
        cc.style.width = '10px'
        cc.style.height = '10px'
        cc.style.borderLeft = '1px #ccc solid'
        cc.style.borderTop = '1px #ccc solid'
        cc.style.float = 'left'
        cc.style.boxSizing = 'content-box'
        cooky.appendChild(cc)

      }

      this.$('.seeColors-temp-container').appendChild(cooky)
      this.$(
        '.seeColors-follow-cooky > div:nth-child(61)').style.borderLeft = '1px red solid'
      this.$(
        '.seeColors-follow-cooky > div:nth-child(61)').style.borderTop = '1px red solid'
      this.$(
        '.seeColors-follow-cooky > div:nth-child(61)').style.borderRight = '1px red solid'
      this.$(
        '.seeColors-follow-cooky > div:nth-child(62)').style.borderLeft = '0px'
      this.$(
        '.seeColors-follow-cooky > div:nth-child(72)').style.borderTop = '1px red solid'
      this.$('.seeColors-follow-cooky').style.transition = 'all 0 linear'
      this.$(
        '.seeColors-follow-cooky > div').style.transition = 'all 0.1s linear'

    } else {
      this.$('.seeColors-follow-cooky').style.display = 'block'

    }
  }

  //删除跟随鼠标的div
  removeFollowCookies () {
    if (this.$('.seeColors-follow-cooky'))
      this.$('.seeColors-follow-cooky').remove()

  }

  //为那个跟随鼠标的div提供位置和选中的颜色
  setFollowCookies (l, t, can, p, w, h) {

    // let left = (w - l > 110) ? l : l - 110,
    //   top = t > 20 ? (h - t > 110 ? t : t - 110) : t + 30,
    //   canvas = can.canvas
    let left = l - 61,//(w - l > 110) ? l + 61 : l - 110 + 61,
      top = t - 61,// t > 20 ? (h - t > 110 ? t + 61 : t - 110 + 61) : t + 30 + 61,
      canvas = can.canvas

    return new Promise((resolve) => {
      // this.$('.seeColors-follow-cooky').display='none'
      this.$('.seeColors-follow-cooky').style.zIndex = '1001'
      this.$('.seeColors-follow-cooky').style.top = top + 'px'
      this.$('.seeColors-follow-cooky').style.left = left + 'px'

      for (let i = 0; i < 121; i++) {

        let ci = p - (5 * canvas.width + 5) + (Number.parseInt(i / 11)) *
          canvas.width + i % 11,
          n = i + 1

        this.$('.seeColors-follow-cooky > div:nth-child(' + n +
          ')').style.backgroundColor = 'rgba(' +
          can.imgData[(ci - 1) * 4] + ',' +
          can.imgData[(ci - 1) * 4 + 1] + ',' +
          can.imgData[(ci - 1) * 4 + 2] + ',' +
          can.imgData[(ci - 1) * 4 + 3] / 255 + ')'
      }
      this.$('.seeColors-follow-cooky').display = 'block'
      resolve()

    })

  }

  //退出处理，删除生成的类
  exit () {

    if (this.$('.seeColors-follow-cooky')) {
      this.$('.seeColors-follow-cooky').remove()
    }

    this.$('body').style.overflowY = 'auto'
    this.$('.seeColors-temp-canvas').remove()
    this.$('.seeColors-temp-container').remove()

  }

}

export default SeeColors