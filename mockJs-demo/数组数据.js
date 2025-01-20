const Mock = require('mockjs');

// 生成一个包含多个对象的数组
let data3 = Mock.mock({
  'users|5': [{
    'id|+1': 1,
    'name': '@cname',
    'age': '@integer(18, 60)',
    'email': '@email'
  }]
});

console.log('生成数组数据：');
console.log(data3);