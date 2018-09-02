<template>
  <div class="star">
   <div class="star-item" :class="starType">
     <span class="star-item" v-for="itemClass in itemClasses" :class="itemClass"></span>
   </div>
  </div>
</template>

<script>
 const LENGTH = 5;
 const CLS_ON = 'on';
 const CLS_HALF = 'half';
 const CLS_OFF = 'off';
  export default {
    name: "star",
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0; // 不能被1整除的，代表有小数
        let integer = Math.floor(score);
        for(let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if(hasDecimal) {
          result.push(CLS_HALF);
        }
        while(result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
@import '../assets/less/index.less';
.star {
  font-size: 0;
  .star-item {
    display: inline-block;
    &.star-48 {
      .star-item {
        width: .4rem;
        height: .38rem;
        margin-right: .41rem;
        background-size: .4rem .38rem;
        &.last-child {
          margin-right: 0;
        }
        &.on {
          .bg-image(star48_on)
        }
        &.half {
          .bg-image(star48_half)
        }
        &.off {
          .bg-image(star48_half)
        }
      }
    }
    &.star-36 {
      .star-item {
        width: .15rem;
        height: .15rem;
        margin-right: .03rem;
        background-size: .15rem .15rem;
        &.last-child {
          margin-right: 0;
        }
        &.on {
          .bg-image(star36_on)
        }
        &.half {
          .bg-image(star36_half)
        }
        &.off {
          .bg-image(star36_off)
        }
      }
    }
    &.star-24 {
      .star-item {
        width: .01rem;
        height: .01rem;
        margin-right: .03rem;
        background-size: .4rem .38rem;
        &.last-child {
          margin-right: 0;
        }
        &.on {
          .bg-image(star24_on)
        }
        &.half {
          .bg-image(star24_half)
        }
        &.off {
          .bg-image(star24_off)
        }
      }
    }
  }
}
</style>
