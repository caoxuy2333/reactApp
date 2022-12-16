const Mock = require('mockjs')

Mock.mock(/login/, () => {
  return {
    status: 200,
    message: "获取数据成功2"
  }
})