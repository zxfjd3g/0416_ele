import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './app'
import router from './router'
import './mock/mockServer' // 引入此模块, 就可访问其映射路由接口
import "./common/stylus/index.styl"

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
