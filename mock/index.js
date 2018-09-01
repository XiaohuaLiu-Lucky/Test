import data from '../data.json'
import Mock from 'mockjs'
// 商品
Mock.mock('/good',{
  code: 0,
  codeMsg: '成功',
  data: data.goods
})

Mock.mock('/ratings',{
  code: 0,
  codeMsg: '成功',
  data: data.ratings
})

Mock.mock('/seller',{
  code: 0,
  codeMsg: '成功',
  data: data.seller
})

