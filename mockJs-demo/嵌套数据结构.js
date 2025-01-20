const Mock = require('mockjs');

// 生成包含嵌套对象和数组的数据
let data4 = Mock.mock({
  'company': {
    'name': '明日科技',
    'address': '@city()',
    'employees|10': [{
      'id|+1': 1001,
      'name': '@cname',
      'age': '@integer(22, 55)',
      'position': '@pick(["前端开发", "后端开发", "测试工程师", "产品经理"])',
      'skills|2': ['@pick(["HTML", "CSS", "JavaScript", "Node.js", "Java", "Python"])']
    }]
  }
});

console.log('嵌套数据结构：');
console.log(JSON.stringify(data4.company,(key,value)=>{
  console.log(key,value,'----');
  return value
  
}, 2));
// console.log(data4.company.employees);