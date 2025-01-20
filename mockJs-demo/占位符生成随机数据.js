
const Mock = require('mockjs');

// 生成包含随机数据的对象
let data2 = Mock.mock({
  'name': '@cname',
  'age': '@integer(18, 60)',
  'email': '@email'
});

console.log('使用占位符生成随机数据：');
console.log(data2);