const Mock1 = require('mockjs')

Mock1.mock(/login/g, () => {
  return {
    status: 200,
    message: "获取数据成功2"
  }
}) 