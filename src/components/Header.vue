<template>
  <div class="Header">
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
    <div class="star-wrapper">
      <star :size="48" :score="3.7"></star>
    </div>
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
.Header {
  position: relative;
  width: 100vw;
  background-color: rgba(7, 17, 27, 0.5);
  overflow: hidden;
  font-size:0rem;
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
            /*background-image:url('../assets/images/decrease_1@2x.png');*/
            /*background-repeat: no-repeat;*/
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
    /*background-image: url('../assets/images/bulletin@3x.png');*/
    /*background-repeat: no-repeat;*/
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
</style>
