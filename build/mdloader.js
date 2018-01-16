const hljs = require('highlight.js');

const md = require('markdown-it')({
  langPrefix: 'hljs-',
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return '';
  }
});

md.use(require('markdown-it-container'), 'demo', {

  validate: function(params) {
    return params.trim().match(/^demo\s+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      let content = tokens[idx + 1].content;
      return makeShowHtml(getDocHtml(content));

    } else {
      //closing tag
      return '</div><div class="demo-code-btn">点击查看源代码</div></div>\n';
    }
  }
});

function makeShowHtml(docHtml, escapeHtml) {
  return '<div class="demo-code-wrap"><div class="demo-code-result">' + docHtml + '</div>' + 
    '<div class="demo-code-content">\n';
}

// 提取用例中的html
function getDocHtml(content) {
  let htmlContent = content.replace(/\<script\>[\s\S]*\<\/script\>/, '').replace(/\n/g, '');
  return htmlContent;
}

module.exports = function(source) {
  let data = source.split('::::vuecode::::');
  let template = data[0];
  let vuecode = data[1];
  return '<template><section class="markdowndoc">' + md.render(template) + '</section></template>' + data[1];
}