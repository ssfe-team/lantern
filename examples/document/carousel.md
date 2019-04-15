## Carousel 轮播图

### 概述

自动+手动循环播放多张图片。

### 代码示例

#### 基础用法


::: demo demo :::
```html
<lt-carousel 
  :carousels="carousels" 
  :inv="inv" 
  :imgStyle="imgStyle" 
  :visualStyle="visualStyle" 
  :behavior="behavior" 
  :target="target" 
  :showTurnBtn="showTurnBtn"
  :handleType="handleType"
>
</lt-carousel>
<script>
    export default {
        data () {
            return {
                carousels: [
                    {
                        src:'https://i.loli.net/2018/08/07/5b6951694a660.jpg',
                        href: '#'
                    },
                    {
                        src: 'http://dwz.cn/ov3FVVOf',
                        href: '#'
                    },
                    {
                        src:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/03/ChMkJlbKx2qIKPxiAAlXILFmr4gAALHzQFig2UACVc4500.jpg',
                         href: '#'
                    },
                    {
                        src: 'http://old.bz55.com/uploads/allimg/140616/1-140616095126.jpg',
                        href: '#'
                    },
                    {
                        src: 'https://pbs.twimg.com/media/C68yLK2XAAAcz8r.jpg',
                        href: '#'
                    }
                ],
            inv: 3000,
            imgStyle: {
                width: '100%',
                height: '420px'
            },
            visualStyle: {
                width: '100%',
                maxWidth: '1366px',
                height: '420px'
            },
            behavior: 'move',
            target: '_blank',
            showTurnBtn: true,
            handleType: 'click'
          }
        }
    }
</script>
```
:::

### API

#### Carousel props

属性|说明|类型|默认值
---|---|---|---
carousels | 图片列表 | Array | -
inv | 自动轮播速度 | Number | 1000
behavior | 图片过渡行为`move`、`fade` | String | move
target | 图片打开方式,可选值为`_blank`、`_parent` | String | _blank
visualStyle | 可视区的宽度 | Object | 1920px
imgStyle | 图片的宽高 | Object | -
showTurnBtn | 是否显示左右翻页按钮 | Boolean | true
handelType | 底部页码图标执行跳页操作方式 | String | hover

::::vuecode::::
<script>
     export default {
        data () {
            return {
                carousels: [
                    {
                        src:'https://i.loli.net/2018/08/07/5b6951694a660.jpg',
                        href: '#'
                    },
                    {
                        src: 'http://dwz.cn/ov3FVVOf',
                        href: '#'
                    },
                    {
                        src:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/03/ChMkJlbKx2qIKPxiAAlXILFmr4gAALHzQFig2UACVc4500.jpg',
                         href: '#'
                    },
                    {
                        src: 'http://old.bz55.com/uploads/allimg/140616/1-140616095126.jpg',
                        href: '#'
                    },
                    {
                        src: 'https://pbs.twimg.com/media/C68yLK2XAAAcz8r.jpg',
                        href: '#'
                    }
                ],
            inv: 3000,
            imgStyle: {
                width: '100%',
                height: '420px'
            },
            visualStyle: {
                width: '100%',
                maxWidth: '1366px',
                height: '420px'
            },
            behavior: 'move',
            target: '_blank',
            showTurnBtn: true,
            handleType: 'click'
          }
        },
    }
</script>
