## Dropdown 下拉菜单

:::demo demo
```html
<template>
  <div style="height:600px;"></div>
  <lt-dropdown :d-data="dData" :height="height"></lt-dropdown>
</template>

<script>
  export default {
    data() {
      return {
        dData: [
          {
            des: '测试1'
          },
          {
            des: '测试2',
            dis: true // 禁用
          }
        ]
      }
    }
  }
</script>
```
:::

::::vuecode::::
<script>
  export default {
  data() {
  return {
  dData: [{
                        des: '测试1'
                      },{
                                      des: '测试1'
                                    },{
                                                    des: '测试1'
                                                  },{
                                                                  des: '测试1'
                                                                },{
                                                                                des: '测试1'
                                                                              },{
                                                                                              des: '测试1'
                                                                                            },{
                                                                                                            des: '测试1'
                                                                                                          },{
                                                                                                                          des: '测试1'
                                                                                                                        },
            {
              des: '测试1'
            },
            {
              des: '测试2',
              dis: true
            }
          ]
  }
  }
  };
</script>