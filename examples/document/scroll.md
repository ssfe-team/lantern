### 实例

::: demo demo
```html
    <lt-scroll
      :barStyle="{wrapWidth: '300px', wrapHeight: '200px'}"
    >
      <p style="">1.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <br />
      <br />
      <span style="display:inline-block; width: 400px; height:100px; background: linear-gradient(to right, blue, white); border: 1px solid black;"></span>
      <br />
      <br />
      <br />
      <p>2.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <br />
      <br />
      <br />
      <p>3.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <br />
      <br />
      <br />
      <p>4.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
      <br />
      <br />
      <br />
      <br />
      <p>5.测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
    </lt-scroll>
```
:::

### lt-scroll 参数

参数|说明|类型|必选|默认值
--------|--------|--------|--------|--------
barStyle|滚动条配置(通过该对象传递滚动条所有的配置)|Object|否|{}

<br>
<br>
 
参数|说明|类型|必选|默认值
--------|--------|--------|--------|--------
barColor|滚动条的颜色|String|否|'#959595'
trackColor|滚动条轨道的颜色|String|否|'#eee'
barWidth|滚动条的宽度|Number|否|8
barHeight|滚动条的高度|Number|否|8
barOpacityInactive|滚动条的非活动时的透明度|Number|否|0.3
zIndex|滚动条的z-index|String|否|'auto'
wrapWidth|容器的宽度(带单位的字符串如'100%'、'100px')|String|否|'100%'
wrapHeight|容器的高度(带单位的字符串如'100%'、'100px')|String|否|'100%'
autoHide|是否自动隐藏滚动条|Bollen|否|true


::::vuecode::::
<style lang='less'>

</style>