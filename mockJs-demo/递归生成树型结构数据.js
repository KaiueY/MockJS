const Mock = require('mockjs');

// 递归生成树形结构数据
function generateTree(level, maxLevel) {
  let children = [];
  if (level < maxLevel) {
    let childCount = Mock.Random.integer(1, 3);
    for (let i = 0; i < childCount; i++) {
      children.push(generateTree(level + 1, maxLevel));
    }
  }
  return {
    'id|+1': 1,
    'name': '@cword(2,4)',
    'children': children
  };
}

let data7 = Mock.mock({
  'tree': generateTree(1, 3)
});

console.log('递归生成树形结构数据：');
console.log(data7);