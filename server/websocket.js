const WebSocket = require('ws');


var wsServer = new WebSocket.Server({ port: 8081 });
wsServer.on('connection', function (ws) {
  console.log('client connected');
  // 接收消息
  ws.on('message', function (data) {
    const obj = JSON.parse(data);
    console.log(obj)
    const number = parseFloat(obj.number);
    let f = async function (index, num) {
      let i = index;
      let c = num / index;
      let t;
      await new Promise((reject) => {
        let msg = '';
        if (i > c) msg = '结束';
        if (Number.isInteger(c)) msg = i + '×' + c
        if (msg) {
          t = setTimeout(() => {
            if (i > c) return ws.send(JSON.stringify({ 'msg': msg }));
            if (Number.isInteger(c)) {
              ws.send(JSON.stringify({ 'msg': msg }))
              console.log(i, c)
            }
            i++;
            reject(true)
          }, 100)
        } else {
          i++;
          reject(true)
        }
      })
      clearTimeout(t);
      f(i, num);
    }
    f(1, number);
  });

  ws.on('close', function () {
    console.log('websocket关闭了')
  })


  // 发现连接服务器后 1s后发送文案
  let t = setTimeout(() => {
    ws.send(JSON.stringify({ 'msg': '已连接websocket' }))
    clearTimeout(t)
  }, 1000)
})

module.exports = wsServer;
