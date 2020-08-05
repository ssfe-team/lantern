/*
 * @Author: bianhao
 * @Date: 2017-12-21 16:28:31
 * @Last Modified by: JearyVon
 * @Last Modified time: 2020-07-29 15:34:17
 */
import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Lantern from '../src/index.js'
import routes from './route.config.js'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

Vue.use(Lantern)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

window.expandCode = function () {
  let btn = event.target
  let docHtml = btn.previousElementSibling
  docHtml.classList.toggle('expand')
  let text = '收起代码'
  if (!docHtml.classList.contains('expand')) {
    text = '显示代码'
  }
  // setTimeout(() => {
  //   btn.innerHTML = text
  // }, 0)
}
