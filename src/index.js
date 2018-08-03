/*
 * @Author: bianhao
 * @Date: 2017-12-21 15:32:04
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-06-21 21:10:52
 */
import Message from '../packages/message/index.js';
import WaterFall from '../packages/water-fall/index.js';
import Scroll from '../packages/scroll/index.js';
import { Aside, Footer, Header, Layout, Main } from '../packages/layout/index.js';
import Select from '../packages/select/index.js';
import { Menu, MenuItem, MenuItemGroup, MenuItemSelect } from '../packages/menu/index.js';
import Pagination from '../packages/pagination/index.js'
import Icon from '../packages/icon/index.js'
import Input from '../packages/input/index.js'
import InputNumber from '../packages/input-number/index.js'
import Poptip from '../packages/poptip/index.js'
import Checkbox from '../packages/checkbox/index.js'
import CheckboxGroup from '../packages/checkbox-group/index.js'
import Button from '../packages/button/index.js'
import ButtonGroup from '../packages/button-group/index.js'
import Radio from '../packages/radio/index.js'
import RadioGroup from '../packages/radio-group/index.js'
import Slider from '../packages/slider/index.js'
import Tooltip from '../packages/tooltip/index.js'
import Switch from '../packages/switch/index.js'
import Breadcrumb from '../packages/breadcrumb/index.js'
import BreadcrumbItem from '../packages/breadcrumb-item/index.js'
import Dropdown from '../packages/dropdown/index.js'
import DropdownItem from '../packages/dropdown-item/index.js'
import DropdownMenu from '../packages/dropdown-menu/index.js'
import Modal from '../packages/modal/index.js'
import Steps from '../packages/steps/index.js'
import Step from '../packages/step/index.js'
import Carousel from '../packages/carousel/index.js'

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
  Select,
  Pagination,
  Icon,
  Input,
  InputNumber,
  Poptip,
  Checkbox,
  CheckboxGroup,
  Button,
  ButtonGroup,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Modal,
  Steps,
  Step,
  Carousel
}

const install = function(Vue) {
  Object.keys(packages).forEach(key => {
    Vue.component(prefix + key, packages[key]);
  });
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

const API = {
  ...packages,
  install
}

module.exports.default = module.exports = API;
