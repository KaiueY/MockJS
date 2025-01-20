const Mock = require('mockjs');

// 根据条件生成不同的数据
let data6 = Mock.mock({
  'product': {
    'name': '@csentence(5, 10)', // 随机生成5到10个汉字的句子
    'price': '@float(100, 1000, 2, 2)', // 随机生成100到1000之间的浮点数，保留2位小数
    'stock|1-100': 50, // 随机生成1到100之间的整数
    'status|1': ['正常', '缺货', '已下架'], // 随机选择一个状态
    'category': function () {
      if (this.status === '缺货') {
        return '紧急补货';
      } else {
        return '日常销售';
      }
    }
  }
});

console.log('条件生成数据：');
console.log(data6);