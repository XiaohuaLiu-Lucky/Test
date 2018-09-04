<template>
  <div id="app">
    <!--header头部-->
    <sellHeader :seller="seller"></sellHeader>
    <!--内容区-->
    <div class="content-wrapper">
      <div class="router-wrapper">
        <div class="router-item">
          <router-link to="/good">商品</router-link>
        </div>
        <div class="router-item">
          <router-link to="/rating">评价</router-link>
        </div>
        <div class="router-item">
          <router-link to="/seller">商家</router-link>
        </div>
      </div>
      <router-view />
    </div>
    <!--购物车底部-->
    <shopCart></shopCart>
    <!--{{$route.name}}-->

    <!--<div @click="changePath('/good')">跳转到商家页面</div>-->

  </div>
</template>

<script>
import axios from 'axios'
import sellHeader from '@/components/Header'
import shopCart from '@/components/Shopcart'
export default {
  name: 'App',
  data() {
    return {
     seller: [],
      goods: {}
    }
  },
  components: {
    sellHeader,
    shopCart
  },
  created() {
    axios.get('/seller').then(res => {
      if(res.data.code === 0) {
        this.seller = res.data.data
        console.log(this.seller)
      }
    })
  },
  methods: {
    changePath(path) {
      this.$router.push({path})
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import './assets/less/index.less';
.router-wrapper {
  width: 100vw;
  height: .82rem;
  line-height: .82rem;
  overflow: hidden;
  display: flex;
  font-size: .28rem;
  text-align: center;
  .border-1px(rgba(0,0,0,0.1), 0, 0);
  .router-item {
    flex: 1;
    &>a {
      font-weight: 600;
      color: #4d555d;
      &.active-link {
      color: #f01414;
      font-weight: 700;
    }
    }
  }
}
</style>
