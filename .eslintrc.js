module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'browser':true
  },
  'extends': 'eslint:recommended',
  'parser': 'babel-eslint',
  'plugins': [
    // 此插件用来识别.html 和 .vue文件中的js代码
    'html',
  ],
  'parserOptions': {
    'sourceType': 'module',
  },
  'globals': {
    //允许的全局变量
    'window': true,
    'define': true,
  },
  'rules': {
    //缩进
    'indent': [
      2,
      2,
      {'SwitchCase': 1},
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    //禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 0,
    //允许 console
    'no-console': 0,
    //允许 case 语句落空
    'no-fallthrough': 0,
    'no-case-declarations': 0,
    //不检查分号
    'semi': 0,
    //允许在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations':0,
    //禁止不必要的布尔类型转换
    'no-extra-boolean-cast':0
  },
}
