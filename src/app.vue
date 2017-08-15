<template>
  <div>
    <ele-header></ele-header>

    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './components/header/header.vue'

  export default {
    
    created () {
      //使用vue-resource发送ajax请求express提供的模拟接口
      this.$http.get('/api/seller')
        .then(response => {
          const result = response.body
          console.log('vue-resource', result)
        })
      // 使用axios发送ajax请求mockjs提供的模拟接口
      axios.get('/api2/seller')
        .then(response => {
          const result = response.data
          console.log('axios', result)
        })
    },
    
    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display flex
    height 40px
    line-height 40px
    font-size 14px
    border-1px(rgba(7,17,27,.1))
    .tab-item
      width 0
      flex 1
      text-align center
      & > a
        display block
        color rgb(77,85,93)
      .active
        color rgb(240,20,20)
</style>
