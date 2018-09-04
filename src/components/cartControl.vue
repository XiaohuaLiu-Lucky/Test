<template>
  <div class="cartControl">
    <span class="icon-remove_circle_outline"></span>
    <span class="count">1</span>
    <span class="icon-add_circle"></span>
  </div>
</template>

<script>
  export default {
    name: "cartControl"
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .cartControl {
    display: inline-block;
    font-size: 0;
    .icon-remove_circle_outline,
    .icon-add_circle {
      font-size: .48rem;
      vertical-align: middle;
      color: #00a0dc;
    }
    .count {
      font-size: .2rem;
      margin: 0 .13rem;
      vertical-align: middle;
      color: #93999f;
    }
  }
</style>
