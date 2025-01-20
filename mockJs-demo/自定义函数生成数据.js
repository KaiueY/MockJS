const Mock = require('mockjs');

// 自定义函数生成特定格式的数据
Mock.Random.extend({
  'customId': function () {
    let prefix = 'USER';
    let num = Mock.Random.integer(1000, 9999);
    return `${prefix}-${num}`;
  }
});

let data5 = Mock.mock({
  'user': {
    'id': '@customId',
    'name': '@cname',
    'birthday': '@date("yyyy-MM-dd")',
  }
});

console.log('自定义函数生成数据：');
console.log(data5);