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
      <router-view/>
    </div>
    <!--购物车底部-->
    <shopCart></shopCart>
    {{$route.name}}

    <div @click="changePath('/good')">跳转到商家页面</div>

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
     seller: []
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active-link {
    background-color: #765d5a;
    color: red;
  }
</style>
