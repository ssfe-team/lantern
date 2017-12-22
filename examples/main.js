/*
 * @Author: bianhao 
 * @Date: 2017-12-21 16:28:31 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-22 17:39:43
 */
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import Lantern from '../src/index.js';  

Vue.use(VueRouter);
Vue.use(Lantern);

new Vue({
  el: '#app',
  render: h => h(App)
});