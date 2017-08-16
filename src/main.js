import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'
import app from './app'
import router from './router'
import './mock/mockServer' // 引入此模块, 就可访问其映射路由接口
import "./common/stylus/index.styl"

Vue.use(VueResource)

// 注册一个全局过滤器
Vue.filter('date-string', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
