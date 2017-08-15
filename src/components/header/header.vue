<template>
  <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
          <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="64" height="64">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">粥品香坊（回龙观）</span>
          </div>
          <div class="description">
            蜂鸟专送/38分钟送达
          </div>
          <div class="supports">
            <span class="icon special" ></span>
            <span class="text">在线支付满28送晓飞张</span>
          </div>
        </div>
        <div class="support-count">
          <span>5个</span>
          <span class="icon-keyboard_arrow_right"></span>
        </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="100%" height="100%">
    </div>
    <div class="mask">
      <div class="mask-wrapper">
        <div class="mask-main">
            <h1 class="title">粥品香坊（大运村）</h1>
            <div class="stars-wrapper">
              <div class="stars stars-48">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
              </div>
            </div>
            <div class="info">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="list">
              <li>
                <span class="icon decrease"></span>
                <span class="text">在线支付满28减2个晓飞张</span>
              </li>
              <li>
                <span class="icon discount"></span>
                <span class="text">晓飞张全场8折</span>
              </li>
              <li>
                <span class="icon guarantee"></span>
                <span class="text">单人晓飞张</span>
              </li>
              <li>
                <span class="icon invoice"></span>
                <span class="text">该商家支持发票,请下单写好晓飞张</span>
              </li>
              <li>
                <span class="icon special"></span>
                <span class="text">已加入“晓飞张”计划,食品安全保障</span>
              </li>
            </ul>
            <div class="info">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="content">
              <p class="text">
                粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
              </p>
            </div>
        </div>
      </div>
      <div class="mask-footer">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position relative
    color rgb(255,255,255)
    background rgba(7,17,27,.5)
    overflow hidden
    font-size 0
    .content-wrapper
      position relative
      margin 24px 12px 18px 24px
      .avatar
        display inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            background-size 100% 100%
            background-repeat no-repeat
            bg-image(brand)
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px
        .description
          font-size 12px
          line-height 12px
          font-weight 200
          margin-bottom 10px
        .supports
          margin-bottom 2px
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            background-size 100% 100%
            background-repeat no-repeat
            &.decrease
              bg-image(decrease_1)
            &.discount
              bg-image(discount_1)
            &.guarantee
              bg-image(guarantee_1)
            &.invoice
              bg-image(invoice_1)
            &.special
              bg-image(special_1)
          .text
            margin-left 4px
            font-size 10px
            line-height 12px
            font-weight 200
      .support-count
        position absolute
        right 0
        bottom 0
        border-radius 16px
        width 48px
        height 24px
        background-color rgba(0,0,0,0.2)
        font-size 10px
        line-height 12px
        font-weight 200
        text-align center
        span
          line-height 24px
    .bulletin-wrapper
      position relative
      background-color rgba(7,17,27,.2)
      padding 0 28px 0 12px
      font-size 10px
      font-weight 200px
      height 28px
      line-height 28px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      .bulletin-title
        margin-top 8px
        vertical-align top
        display inline-block
        width 22px
        height 12px
        background-repeat no-repeat
        background-size 100% 100%
        bg-image(bulletin)
      .icon-keyboard_arrow_right
        position absolute
        right 12px
        line-height 28px
        bottom 0

    .background
      position absolute
      left 0
      top 0
      z-index -1
      width 100%
      height 100%
      filter blur(10px)
    .mask
      position fixed
      left 0
      top 0
      z-index 99
      width 100%
      height 100%
      background-color rgba(7,17,27,.8)
      overflow auto
      .mask-wrapper
        min-height 100%
        .mask-main
          padding-top  64px
          padding-bottom 64px
          .title
            font-size 16px
            line-height 16px
            font-weight 700
            text-align center
          .stars-wrapper
            height 24px
            margin 16px 0 28px 0
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
          .info
            display flex
            width 80%
            margin 0 auto 24px
            .line
              flex 1
              position relative
              top 8px
              height 1px
              background-color rgba(255,255,255,.2)
            .text
              margin 0 12px
              font-size 16px
              line-height 16px
              font-weight 700
          .list
            width 80%
            margin 0 auto 28px
            li
              margin-bottom 12px
              margin-left 12px
              &:last-child
                margin-bottom 0
              .icon
                display inline-block
                vertical-align top
                width 16px
                height 16px
                background-repeat no-repeat
                background-size 100% 100%
                &.decrease
                  bg-image(decrease_2)
                &.discount
                  bg-image(discount_2)
                &.guarantee
                  bg-image(guarantee_2)
                &.invoice
                  bg-image(invoice_2)
                &.special
                  bg-image(special_2)
              .text
                margin-left 6px
                font-size 12px
                line-height 12px
                font-weight 200

          .content
            width 80%
            margin 0 auto
            .text
              padding 0 12px
              font-size 12px
              line-height 24px
              font-weight 200
      .mask-footer
        text-align center
        font-size 32px
        color rgba(255,255,255,.5)
        margin-top -64px
</style>
