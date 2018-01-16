/*
 * @Author: bianhao 
 * @Date: 2017-12-21 16:28:31 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-05 11:21:47
 */
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import Lantern from '../src/index.js';
import routes from './route.config.js';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

Vue.use(Lantern);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});