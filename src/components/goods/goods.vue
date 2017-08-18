<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <!--current-->
          <li class="menu-item" v-for="(good, index) in goods"
              :class="{current:currIndex===index}"
              @click="clickMenuItem(index, $event)">

            <span class="text border-1px">
              <span class="icon" v-if="good.type>=0" :class="supportClasses[good.type]"></span>{{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list food-list-hook" v-for="good in goods">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item border-1px" v-for="food in good.foods"
                  @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopcart :min-price="seller.minPrice"
                :delivery-price="seller.deliveryPrice"
                :foods="cartFoods"
                :update-food-count="updateFoodCount"
                :clear-cart="clearCart"
                ref="shopcart"></shopcart>
    </div>
    <food ref="food" :food="selectFood" :update-food-count="updateFoodCount"></food>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'

  import cartcontrol from '../cartcontrol/cartcontrol.vue'
  import shopcart from '../shopcart/shopcart.vue'
  import food from '../food/food.vue'

  export default {

    props: ['seller'],

    data () {
      return {
        goods: [],
        supportClasses: ["decrease", "discount", "guarantee", "invoice", "special"],
        tops: [],
        scrollY: 0,
        selectFood: null
      }
    },

    created () {
      axios.get('/api2/goods')
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            this.goods = result.data

            //将回调延迟到下次 DOM 更新循环之后执行
            this.$nextTick(() => {
              // 初始化scroll
              this._initScroll()
              // 收集所有li的top值
              this._initTops()
            })
          }
        })
    },

    methods: {
      _initScroll () {
        // 创建左侧的菜单列表Scroll
        new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        // 创建右侧的食物列表Scroll
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3  // 接收scroll事件
        })

        // 监视scroll
        this.enable = true // 标识是否自动接收最新scrollY
        this.foodsScroll.on('scroll', (pos) => {
          console.log(pos.y)
          if(this.enable) {
            this.scrollY = Math.abs(pos.y) // 滑动过程中自动收集scrollY
          }
        })
      },

      _initTops () {
        const tops = []
        let top = 0
        tops.push(top) // 第一个li的top值
        // 找到所有li
        const lis = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        // 遍历计算top并保存到tops
        ;[].slice.call(lis).forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        console.log(tops)
        this.tops = tops
      },

      clickMenuItem (index, e) {
        // 过滤原生事件的回调
        if(!e._constructed) {
          return
        }
        console.log('clickMenuItem()', e)
        // 得到对应的li
        const li = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')[index]

        //移除scroll监听
        this.enable = false
        // 通过foodsScroll来平滑滚动li处
        this.foodsScroll.scrollToElement(li, 300)
        // 滚动完成后, 指定scrollY, 添加滚动监听
        setTimeout(() => {
          this.enable = true
          this.scrollY = this.tops[index]
        }, 300)
      },

      updateFoodCount (food, isAdd, event) {
        console.log('updateFoodCount()')
        if(isAdd) {
          if(food.count) {
            food.count++
          } else { // 第一次加
            // food.count = 1 // 给food对象新增属性, 没有数据绑定, 界面不会更新
            this.$set(food, 'count', 1)
          }
          // 让一个开始drop动画
          this.$refs.shopcart.startDrop(event.target)

        } else {
          if(food.count) { // 只有count>=1时才能减
            food.count--
          }
        }
      },

      clearCart () { // 将cartFoods中所有food的count属性值指定为0
        this.cartFoods.forEach(food => {
          food.count = 0
        })
      },

      showFood (food) {
        // 指定选择的food
        this.selectFood = food
        // 得到food组件对象, 显示food组件
        this.$refs.food.show(true)
      }
    },

    computed: {
      currIndex () {
        const {tops, scrollY} = this
        // scrollY的值等于或大于当前下标的值, 且小于下一个值
        return tops.findIndex((top, index) =>{
          return scrollY>=top && scrollY<tops[index+1]
        }) // 返回第一个回调函数的结果为true的index值
      },
      cartFoods () { // 所有count>0的food的数组计算属性
        const foods = []
        this.goods.forEach(good => {
          good.foods.forEach(food => {
            if(food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },

    components: {
      cartcontrol,
      shopcart,
      food
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>