/*
 * @Author: bianhao 
 * @Date: 2018-01-04 11:55:21 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-08 17:00:56
 */

/**
 * 生成waterFall测试数据
 * 
 * @param {Number} num 数据条目
 */
exports.waterFallRandomList = (num) => {
  let list = [];
  // 随机颜色
  let backgroundColor = [
    'FDC098', '9CDEDE', '97D797', 'D7B1FD', 'AFFCFC', 'D68E7C', 'FED980', '8FE3F9', 'F6A66B', 'AA805D', 'DDA690',
    'E3B37A', 'EEB785', 'FECC57', 'FC9861', 'D582C6', '3190F7', 'C9E992', 'FC8C88', '6A73AD', 'FD938B', 'FEB0C4',
    'D19595', '7286FF', 'C7867D', 'FDB4B4', 'FDCDA3', 'AAB8FC', 'FEB7A7', '85B7FE', '83BBBB', 'FDDB9C', 'EAC39C',
    'B2B2FE', 'CBCB7C', 'E36655', '76A1FE', 'D5FDAE', 'C080C0', 'FDB0B0', '97C6FD', 'DAB275', 'A0CEFD', '79B1ED',
    'E9A297'
  ];
  for(let i = 0;i < num;i++) {
    let each = {
      width : 100 + Math.random() * 100,
      height : 100 + Math.random() * 100,
      backgroundColor: '#' + backgroundColor[Math.floor((Math.random() * backgroundColor.length))]
    }
    list.push(each);
  }

  return list;
}