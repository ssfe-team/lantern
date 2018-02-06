/*
 * @Author: bianhao 
 * @Date: 2017-12-21 15:32:04 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-02-05 15:24:49
 */
import Message from '../packages/message/index.js';
import WaterFall from '../packages/water-fall/index.js';
import Scroll from '../packages/scroll/index.js';
import { Aside, Footer, Header, Layout, Main } from '../packages/layout/index.js';
import Dropdown from '../packages/dropdown/index.js';
import { Menu, MenuItem, MenuItemGroup, MenuItemSelect } from '../packages/menu/index.js';
import Pagination from '../packages/pagination/index.js'
import IconFont from '../packages/iconfont/index.js'
//import test from '../packages/layout/index.js';

const prefix = 'Lt';

const packages = {
  Message,
  WaterFall,
  Scroll,
  Aside,
  Footer,
  Header,
  Layout,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  MenuItemSelect,
  Dropdown,
  Pagination,
  IconFont
}

const install = function(Vue) {
  Object.keys(packages).forEach(key => {
    console.log(prefix + key);
    Vue.component(prefix + key, packages[key]);
  });
  Vue.prototype.$message = Message;

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

const API = {
  ...packages,
  install
}

module.exports.default = module.exports = API;