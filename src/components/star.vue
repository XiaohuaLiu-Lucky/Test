<template>
  <div class="star">
    <div class="star-item" :class=""starType">
      <span v-for="itemClass in itemClasses" :class="star-item"></span>
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
        type: number
      },
      score: {
        type: number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size:
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2 ) / 2; // 要么为3，要么为3.5
        let hasDecimal = score % 1 !==0; // 不等于0=>true，有小数
        let integer =  Math.floor(score);
        for(let i = 0; i < integer; i++) {
            result.push(CLS_ON);
        }
        // true => 有小数
        if(hasDecimal){
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

<style scoped>

</style>
