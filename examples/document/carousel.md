## Carousel 轮播图

### 概述

自动+手动循环播放多张图片。

### 代码示例

#### 基础用法


::: demo demo :::
```html
<lt-carousel :carousels="carousels" :inv="inv" :style="styleObject" :transitionBehavior="behavior" :target="target"></lt-carousel>
<script>
    export default {
        data () {
            return {
                carousels: [
                    {
                        src:'https://wallup.net/wp-content/uploads/2015/12/86881-anime-Hatsune_Miku-Vocaloid-cherry_blossom-748x421.jpg',
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
            styleObject: {
                width: '300px',
                height: '168px'
            },
            behavior: 'move',
            target: '_blank'
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

::::vuecode::::
<script>
     export default {
        data () {
            return {
                carousels: [
                    {
                        src:'https://wallup.net/wp-content/uploads/2015/12/86881-anime-Hatsune_Miku-Vocaloid-cherry_blossom-748x421.jpg',
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
            styleObject: {
                width: '748px',
                height: '421px'
            },
            behavior: 'move',
            target: '_blank'
            }
        },
        methods: {
           switchBehavior () {
               this.behavior = 'fade'
           },
           switchTarget () {
               this.target = '_parent'
           }
        }
    }
</script>