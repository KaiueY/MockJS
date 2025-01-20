
const Mock = require('mockjs');
const Random = Mock.Random
// 生成包含随机数据的对象
let data2 = Mock.mock({
//   'name': Random.upper('@name'),//无法占位符和方法一起使用
'name': Random.upper(Random.name()),//
  'age': '@integer(18, 60)',
  'email': '@email',
  'region':'@region',
  'image':'@image'
});

console.log('使用占位符生成随机数据：');
console.log(data2);