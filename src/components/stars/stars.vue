<template>
  <div class="stars" :class="`stars-${size}`">
    <span class="star" v-for="sc in starClasses" :class="sc"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

  export default {
    props: {
      score: Number,
      size: Number
    },

    computed: {
      starClasses () {
        const scs = []
        /*
        3.6: 3个全星, 1个半星, 1个灰星
          小数部分大于等于5就有一个半星
         */
        const score = this.score
        const scoreInterger = Math.floor(score)

        // 向数组中添加CLASS_ON
        for (let i = 0; i < scoreInterger; i++) {
          scs.push(CLASS_ON)
        }
        // 向数组中添加CLASS_HALF
        if(score-scoreInterger>=0.5) {
          scs.push(CLASS_HALF)
        }
        // 向数组中添加CLASS_OFF
        while(scs.length<5) {
          scs.push(CLASS_OFF)
        }

        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .stars
    text-align center
    .star
      display inline-block
      background-repeat no-repeat
      background-size 100% 100%
    &.stars-48
      .star
        width 20px
        height 19px
        margin-right 20px
        &:last-child
          margin-right 0
        &.on
          bg-image("../stars/star48_on")
        &.half
          bg-image("../stars/star48_half")
        &.off
          bg-image("../stars/star48_off")
    &.stars-36
      .star
        width 15px
        height 15px
        margin-right 15px
        &:last-child
          margin-right 0
        &.on
          bg-image("../stars/star36_on")
        &.half
          bg-image("../stars/star36_half")
        &.off
          bg-image("../stars/star36_off")
    &.stars-24
      .star
        width 10px
        height 10px
        margin-right 10px
        &:last-child
          margin-right 0
        &.on
          bg-image("../stars/star24_on")
        &.half
          bg-image("../stars/star24_half")
        &.off
          bg-image("../stars/star24_off")
</style>