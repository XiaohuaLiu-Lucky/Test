<template>
  <div class="shopCart-wrapper">
    <div class="left-shopCart">
      <div class="shopCart">
        <span class="icon-shopping_cart"></span>
        <span class="num">99</span>
      </div>
      <span class="price">¥ 20</span>
      <span class="deliveryPrice">另需配送配¥20元</span>
    </div>
    <div class="right-send">¥20起送</div>
  </div>
</template>

<script>
import cartControl from "./cartControl"
export default {
  name: "Shopcart",
  components: {
    cartControl
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../assets/less/index.less';
@grayColor: rgba(255,255,255,0.1);
.shopCart-wrapper {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: .96rem;
  line-height: .96rem;
  font-size: 0;
  .left-shopCart {
    display: flex;
    flex: 1;
    background-color: rgb(20,29,39);
    .shopCart {
      position: relative;
      width: .88rem;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      background-color: #2b333b;
      border-radius: 50%;
      border: .12rem solid rgb(20,29,39);
      margin-left: .23rem;
      margin-top: -.2rem;
      margin-right: .25rem;
      .icon-shopping_cart {
        font-size: .5rem;
        height: .28rem;
        color: rgba(255,255,255,0.4);
        vertical-align:middle;
      }
      .num {
        position: absolute;
        right: -5px;
        line-height: 0.14rem;
        display: inline-block;
        padding: .09rem .13rem;
        color: #fff;
        font-weight: bold;
        font-size: .18rem;
        background-color: #f01414;
        border-radius: .16rem;
      }
    }
    .price {
      font-size: .32rem;
      color: rgba(255,255,255,0.4);
      font-weight: bold;
      display: inline-block;
      height: 0.52rem;
      line-height: 0.52rem;
      margin-top: 0.22rem;
      .border-1px-r(@grayColor,-0.2rem,0);
    }
    .deliveryPrice {
      margin-left: 0.4rem;
      font-size: .2rem;
      color: rgba(255,255,255, 0.4);
    }
  }
  .right-send {
    text-align: center;
    width:2.1rem;
    background-color: #2b333b;
    font-size: .24rem;
    font-weight: bold;
    color: rgba(255,255,255,0.4);
  }
}

</style>
