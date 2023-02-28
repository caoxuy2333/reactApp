
class websocket {
  private ws: WebSocket; // websocket服务
  private callback: Function; // 回调函数

  constructor() {
    this.ws = new WebSocket('ws://localhost:8081')
    this.ws.onopen = function (event: any) {
      // 监听消息
      this.ws.onmessage = function (res: any) {
        let data = res.data;
        data = JSON.parse(data);
        console.log(data);
        this.callback(data);
      }.bind(this);
      // 监听Socket的关闭
      this.ws.onclose = function (e2: any) {
        console.log('Client notified socket has closed', e2);
      }
    }.bind(this);
  }
  send(number: number) {
    this.ws.send(JSON.stringify({ number }))
  }
  close(){
    this.ws.close();
  }
  message(fn: Function) {
    this.callback = fn;
  }
}

export default websocket;