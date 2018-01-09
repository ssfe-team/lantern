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
      // opening tag
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

    } else {
      // closing tag
      return '</details>\n';
    }
  }
});

module.exports = function(source) {
  let data = source.split('::::vuecode::::');
  let template = data[0];
  let vuecode = data[1];
  return '<template><section class="markdowndoc">' + md.render(template) + '</section></template>' + data[1];
}