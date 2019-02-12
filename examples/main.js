/*
 * @Author: bianhao
 * @Date: 2017-12-21 16:28:31
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-08-12 17:52:18
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
  let text = '点击收起源代码'
  if (!docHtml.classList.contains('expand')) {
    text = '点击查看源代码'
  }
  setTimeout(() => {
    btn.innerHTML = text
  }, 400)
}
