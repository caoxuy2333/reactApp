import * as React from 'react';

class websocket {
  private ws: WebSocket; // websocket服务
  private callback: Function; // 回调函数

  constructor() {
    this.ws = new WebSocket('ws://localhost:8081')
    this.ws.onopen = function (event: any) {
      // 监听消息
      this.ws.onmessage = function (e1: any) {
        let data = e1.data;
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
  message(fn: Function) {
    this.callback = fn;
  }
}

const Index: React.FC = function (): JSX.Element {
  const [socket, setSocket] = React.useState(undefined);
  const input = React.useRef<HTMLInputElement>(null);
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    const socket = new websocket();
    socket.message((data: any) => {
      console.log('websocket回调', data)
      setProduct(product => product.concat([data.msg]))
    })
    setSocket(socket)
    return () => {
      console.log('卸载websocket')
    }
  }, [])

  const sendSocket = function () {
    setProduct([])
    socket.send(input.current.valueAsNumber)
  }
  return (
    <div>
      websocket测试:
      <div>
        输入乘积, 依次返回两数相乘的数字
        <input type="number" defaultValue={1000} ref={input} />
        <button onClick={sendSocket}>点击</button>
      </div>
      <div>
        {product.map((item, k) => <div key={k}>{item}</div>)}
      </div>
    </div>
  )
}


export default Index;