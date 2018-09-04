<template>
  <div class="Header">
    <div class="header-content">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" alt="">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">{{seller.description}} / {{seller.deliveryTime}}分钟到达</div>
          <div class="supports-wrapper" v-if="seller.supports">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="support">{{seller.supports[0].description}}</span>
          </div>
          <div class="num-wrapper" v-if="seller.supports" @click="showMore">
            <span class="num">{{seller.supports.length}}个</span>
            <span class="icon-keyboard_arrow_right more"></span>
          </div>
        </div>
      </div>
      <div class="bulletin-wrapper" @click="showMore">
        <span class="bulletin-icon"></span>
        <span class="bulletin">{{seller.bulletin}}</span>
        <span class="icon-keyboard_arrow_right more"></span>
      </div>
      <div class="blur-bg">
        <img :src="seller.avatar" alt="">
      </div>
    </div>
    <!--点击显示更多-->
    <transition name="fade">
      <div class="showMore-wrapper" v-show="show">
        <div class="showMore-content">
          <div class="store-name">{{seller.name}}</div>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="supports-detail-wrapper" v-if="seller.supports">
            <div class="supports-detail-title">
              <span class="border-1px"></span>
              <span class="subtitle">优惠信息</span>
              <span class="border-1px"></span>
            </div>
            <div class="supports-content">
              <div class="supports-item" v-for="item in seller.supports" :key="item.type">
                <span class="item-icon" :class="classMap[item.type]"></span>
                <span class="item">{{item.description}}</span>
              </div>
            </div>

          </div>
          <div class="bulletin-detail-wrapper">
            <div class="supports-detail-title">
              <span class="border-1px"></span>
              <span class="subtitle">商家公告</span>
              <span class="border-1px"></span>
            </div>
            <div class="bulletin-content">{{seller.bulletin}}</div>
          </div>
        </div>
        <div class="close icon-close" @click="showMore"></div>
      </div>
    </transition>

  </div>
</template>

<script>
import star from './star'
export default {
    name: "Header",
    data() {
      return {
        classMap: [],
        show: false
      }
    },
    components: {
      star
    },
    props:['seller'],
    created() {
      this.classMap = ['decrease','discount','special','invoice','guarantee'];
      console.log('分数：',this.seller.score)
    },
    computed: {
      type() {
        return typeof this.seller;
      }
    },
    methods: {
      showMore() {
        this.show = !this.show;
      }
    }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '../assets/less/index.less';
@import '../assets/style.css';
.font-size-24 {
  font-size: .24rem;
  color: #fff;
  opacity: 0.7;
}
.Header {
  width: 100vw;
  font-size:0rem;
  overflow: hidden;
  .header-content {
    width: 100vw;
    position: relative;
    background-color: rgba(7, 17, 27, 0.5);
    overflow: hidden;
  }
  .content-wrapper {
    position: relative;
    padding: .48rem 0rem .36rem .48rem;
    box-sizing: border-box;
    .avatar {
      float: left;
      img {
        /*display: inline-block;*/
        /*width: 1.28rem;*/
        /*height: 1.28rem;*/
        .set-img(1.28rem,1.28rem);
        border-radius: 2px;
      }
    }
    .content {
      margin-left:1.28rem;
      padding-left: .32rem;
      .brand {
        display: inline-block;
        width: .6rem;
        height: .36rem;
        /*background-image: url('../assets/images/brand@2x.png');*/
        /*background-repeat: no-repeat;*/
        .bg-image(brand);
        background-size: cover;
        vertical-align: top;
        margin-top: .04rem;
      }
      .name {
        padding-left: .12rem;
        font-size: .32rem;
        font-weight: bold;
        color: #fff;
      }
      .description {
        margin-top: .17rem;
        font-size: .24rem;
        color: #e7e7e7;
      }
      .supports-wrapper {
        margin-top:.14rem;
        color: #e7e7e7;
        .icon {
          display: inline-block;
          width: .24rem;
          height: .24rem;
          background-size: .24rem .24rem;
          margin-right: .08rem;
          &.decrease {
            .bg-image(decrease_1);
          }
          margin-top: .02rem;
          vertical-align: top;
        }
        .support {
          font-size: .2rem;
        }
      }
      .num-wrapper {
        position: absolute;
        right: .24rem;
        bottom: .3rem;
        width: .86rem;
        height: .48rem;
        line-height: .48rem;
        background-color: rgba(57,56,57,.5);
        border-radius: 24px;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        .num ,.more {
          font-size: .2rem;
          vertical-align: middle;
        }
      }
    }
  }
}
.bulletin-wrapper {
  width: 100vw;
  position: relative;
  background-color: rgba(7, 17, 27, 0.2);
  height: .56rem;
  line-height: .56rem;
  padding: 0rem .54rem 0rem .24rem;
  box-sizing: border-box;
  font-size: .2rem;
  color: #fff;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
  .bulletin-icon {
    display: inline-block;
    width: .44rem;
    height: .24rem;
    .bg-image(bulletin);
    background-size: cover;
    vertical-align: top;
    margin-top: .16rem;
  }
  .more {
    position: absolute;
    right: .3rem;
    bottom: .16rem;
    font-size: .2rem;
    vertical-align: middle;
  }
}
.blur-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  filter: blur(10px);
  img {
    width: 100%;
    height: 100%;
  }
}

.showMore-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(7, 17, 27, 0.8);
  z-index: 100;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  overflow: hidden;
  .showMore-content {
    padding: 1.28rem  .72rem 0rem .72rem;
    .store-name {
      &:extend(.center);
      font-size: .32rem;
      font-weight: bold;
      .color(#fff);
      margin-bottom: .37rem;
    }
    .star-wrapper {
      &:extend(.center);
      padding-bottom: .62rem;
    }

  }
}
.supports-content {
  padding: .47rem 0rem .56rem .24rem;
  .supports-item {
    height: .32rem;
    line-height: .32rem;
    margin-bottom: .24rem;
    &:last-child {
      margin-bottom: 0;
    }
    .item-icon {
      .set-img(.32rem,.32rem);
      margin-right: .12rem;
      background-size: cover;
      vertical-align: top;
      &.decrease {
        .bg-image(decrease_3)
      }
      &.discount {
        .bg-image(discount_3)
      }
      &.special {
        .bg-image(special_3)
      }
      &.guarantee {
        .bg-image(guarantee_3)
      }
      &.invoice {
         .bg-image(invoice_3)
       }

    }
    .item {
      &:extend(.font-size-24 );
    }
  }
}
.bulletin-content {
  padding: .58rem 0rem 0rem .24rem;
  &:extend(.font-size-24);
  line-height: .48rem;
}
.supports-detail-title{
  display: flex;
  &:extend(.center);
  .color(#fff);
  .border-1px {
    width: 2.24rem;
    height: 0.02rem;
    opacity: 0.2;
    .border-1px(#fff,0,-0.18rem);
  }
  .subtitle {
    flex: 1;
    display: inline-block;
    font-size: .27rem;
  }
}
.close {
  width: .38rem;
  height: .38rem;
  color: #fff;
  font-size: .52rem;
  opacity: 0.5;
  position: fixed;
  bottom: .79rem;
  left: 50%;
  transform: translateX(-50%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

