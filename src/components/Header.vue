<template>
  <div class="Header">
   <div class="abstract-content">
      <div class="avatar">
        <img :src="seller.avatar" alt="" class="set-img">
      </div>
      <div class="content">
        <div class="title">
          <span class="branch bd-image"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}} / {{seller.deliveryTime}}分钟送达</div>
        <div class="supports" v-if="seller.supports">
         <div>
           <span class="icon decrease" :class="classMap[seller.supports[0].type]"></span>
           <span>{{seller.supports[0].description}}</span>
         </div>
         <div class="num-wrapper">
           <span class="num">{{seller.supports.length}}个</span>
           <span class="icon-keyboard_arrow_right more"></span>
         </div>
        </div>
      </div>
   </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span>
      <span class="bulletin">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right more"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>
    {{type}}
  </div>
</template>

<script>
export default {
    name: "Header",
    data() {
      return {
        classMap: []
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease','discount','special','invoice','guarantee'];
      console.log('分数：',this.seller.score)
    },
    computed: {
      type() {
        return typeof this.seller;
      }
    }
}
</script>

<style lang="less" rel="stylesheet/less">
.Header {
  position: relative;
  width: 100vh;
  overflow: hidden;
  .abstract-content {
    padding: 1.5rem  1rem 1.5rem;
    border: 1px solid red;
    .avatar {
      float: left;
      img {
        border-radius: 2px;

      }
    }
  }
}
</style>
