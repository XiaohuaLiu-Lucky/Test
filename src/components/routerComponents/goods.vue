<template>
  <div class="goods">
    <div class="menu">
        <div class="type-wrapper" v-for="good in goods">
            <div class="menu-content">
              <span v-if="good.type !== -1" class="icon" :class="classMap[good.type]"></span>
              <span class="good-name">{{good.name}}</span>
            </div>
        </div>
    </div>
    <div class="content-wrapper">
      <div class="foods-wrapper" v-for="good in goods" :key="good.name">
        <div class="title">{{good.name}}</div>
        <div class="food-wrapper">
          <div class="food"  v-for="food in good.foods" :key="food.name">
            <div class="icon-wrapper">
              <img :src="food.icon" alt="">
            </div>
            <div class="content">
              <div class="name">{{food.name}}</div>
              <div class="description" v-if="food.description">{{food.description}}</div>
              <div class="sell-rating">
                <span class="sellCount">月售{{food.sellCount}}份</span>
                <span class="rating">好评率{{food.rating}}%</span>
              </div>
              <div class="price-wrapper">
                <span class="price">¥{{food.price}}</span>
                <del class="oldPrice" v-if="food.oldPrice">¥{{food.oldPrice}}</del>
              </div>
            </div>
            <cartControl></cartControl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cartControl from "@/components/cartControl"
export default {
  name: "goods",
  data() {
    return {
      goods: [],
      classMap: []
    }
  },
  components: {
    cartControl
  },
  created() {
    axios.get('/good').then((res) => {
      if(res.data.code === 0) {
        this.goods = res.data.data;
      }
      console.log(this.goods);
    });
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
  }

}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "../../assets/less/index.less";
@grayColor: rgba(7,17,27,.1);
.goods {
  width: 100vw;
  height: 8.8rem;
  display: flex;
  overflow: hidden;
  font-size: 0px;
  .menu {
    width: 1.6rem;
    background-color: #f3f5f7;
    overflow-y: auto;
    .type-wrapper {
      height: 1.08rem;
      font-size: .24rem;
      color: #07111b;
      width: 1.12rem;
      margin: 0rem .24rem;
      display: table;
      .border-1px(@grayColor,0,0);
      .icon {
        .set-img(.24rem,.24rem);
        background-size: cover;
        vertical-align: top;
        margin-top: .06rem;
        &.special {
          .bg-image(special_3);
        }
        &.decrease {
          .bg-image(decrease_3);
        }
        &.discount {
          .bg-image(discount_3);
        }
        &.guarantee {
          .bg-image(guarantee_3);
        }
        &.invoice {
          .bg-image(invoice_3);
        }
      }
      .menu-content {
        // 多行文本垂直居中
        display: table-cell;
        vertical-align: middle;
      }
    }
  }
  .content-wrapper {
    flex: 1;
    overflow-y: auto;
    .title {
      height: .52rem;
      line-height: .52rem;
      background-color: #f3f5f7;
      padding-left: .28rem;
      border-left: 0.04rem solid #d9dde1;
      font-size: .24rem;
      color: #93999f;
    }
    .food-wrapper {
      padding: 0.36rem .36rem 0rem .36rem;
      .food {
        margin-bottom: .36rem;
        .border-1px(@grayColor,0,0);
        &:last-child {
          margin-bottom: 0rem;
          .border-1px(#fff,0,0);
        }
        .icon-wrapper {
          float: left;
          width: 1.14rem;
          height: 1.14rem;
          img {
            display: inline-block;
            width: 100%;
          }
        }
        .content {
          margin-left:1.14rem;
          padding-left: .18rem;
          .name {
            font-size: .28rem;
            height: .28rem;
            line-height: .28rem;
            color: #07111b;
            font-weight: 500;
          }
          .description,
          .sell-rating {
            margin-top: .17rem;
            font-size: .2rem;
            line-height: .18rem;
            color: #93999f;
          }
          .sell-rating {
            margin-top: .15rem;
            .sellCount {
              margin-right:.23rem;
            }
          }
          .price-wrapper {
            margin-top: .18rem;
            margin-bottom: .48rem;
            .price {
              font-size: .28rem;
              font-weight: bold;
              line-height: .21rem;
              color: #f01414;
              margin-right: .16rem;
            }
            .oldPrice {
              font-size: .2rem;
              color: #93999f;
            }
          }
        }
      }
    }
  }
}
</style>
