/*
 * @Author: bianhao 
 * @Date: 2017-12-21 15:32:04 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-22 18:03:47
 */
import message from '../packages/message/index.js';

const packages = {
  message
}

const install = function(Vue) {
  Object.keys(packages).forEach(key => {
    Vue.component(key, packages[key]);
});
}

const API = {
  ...packages,
  install
}

module.exports.default = module.exports = API;