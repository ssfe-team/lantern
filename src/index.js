/*
 * @Author: bianhao 
 * @Date: 2017-12-21 15:32:04 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-04 18:14:17
 */
import Message from '../packages/message/index.js';
import WaterFall from '../packages/water-fall/index.js';
import { Aside, Footer, Header, Layout, Main } from '../packages/layout/index.js';
//import test from '../packages/layout/index.js';

const prefix = 'Lt';

const packages = {
  Message,
  WaterFall,
  Aside,
  Footer,
  Header,
  Layout,
  Main
}

console.log(packages);

const install = function(Vue) {
  Object.keys(packages).forEach(key => {
    console.log(prefix + key);
    Vue.component(prefix + key, packages[key]);
  });
}

const API = {
  ...packages,
  install
}

module.exports.default = module.exports = API;