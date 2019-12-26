console.log('开始生成 ICON name 列表...\n')

const fs = require('fs')
const path = require('path')
const data = fs.readFileSync(path.join(__dirname, '../../styles/common/iconfont/iconfont.svg'), 'utf8')

const re = /glyph-name="([a-z0-9-]+)"/g
const matchArr = data.match(re)

const resultArr = []
matchArr.forEach(e => {
  resultArr.push(e.replace(re, '$1'))
})

var file = fs.createWriteStream(path.join(__dirname, './iconNameList.js'))
file.on('error', function(err) {
  console.log(err)
})
file.write(`export default [\n`)
resultArr.forEach(function(v) {
  file.write(`"${v}",\n`)
})
file.write(`]`)
file.end()
console.log('ICON name 列表生成成功！\n')
