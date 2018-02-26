/*
 * @Author: bianhao 
 * @Date: 2018-01-05 11:19:37 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-02-26 17:42:29
 */
import color from './document/color.md';
import layout from './document/layout.md';
import menu from './document/menu.md';
import scroll from './document/scroll.md';
import message from './document/message.md';
import pagination from './document/pagination.md';
import dropdown from './document/dropdown.md';
import iconfont from './document/iconfont.md';
import classstandard from './document/classstandard.md';

export default [
  {
    path: '/color',
    component: color
  },
  {
    path: '/layout',
    component: layout
  },
  {
    path: '/menu',
    component: menu
  },
  {
    path: '/scroll',
    component: scroll
  },
  {
    path: '/message',
    component: message
  },
  {
    path: '/pagination',
    component: pagination
  },
  {
    path: '/dropdown',
    component: dropdown
  },
  {
    path: '/iconfont',
    component: iconfont
  },
  {
    path: '/classstandard',
    component: classstandard
  }
]