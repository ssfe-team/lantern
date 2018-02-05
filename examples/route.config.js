/*
 * @Author: bianhao 
 * @Date: 2018-01-05 11:19:37 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-02-05 15:27:43
 */
import color from './document/color.md';
import layout from './document/layout.md';
import menu from './document/menu.md';
import scroll from './document/scroll.md';
import message from './document/message.md';
import pagination from './document/pagination.md';
import iconfont from './document/iconfont.md';

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
    path: '/iconfont',
    component: iconfont
  }
]