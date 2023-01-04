const Mock = require('mockjs')

Mock.mock(/login/, () => {
  return {
    "data": {
      "roleCode": "APPMANAGER",
      "token": "RUz1FXoAJKc",
      "tokenValidTime": 5184000,
      "userId": "1229"
    },
    "code": "0",
    "msg": "success"
  }
})