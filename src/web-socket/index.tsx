import * as React from 'react';
import websocket from './socketComp';


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
      socket.close(); 
    }
  }, [])

  const sendSocket = function () {
    setProduct([]) 
    socket.send(input.current.valueAsNumber)
  }
  const closeSocket = function () { 
    socket.close(); 
  }
  return (
    <div>
      websocket测试:
      <div>
        输入乘积, 依次返回两数相乘的数字
        <br />
        <input type="number" defaultValue={1000} ref={input} />
        <button onClick={sendSocket}>点击</button>
        <button onClick={closeSocket}>断开连接</button>
      </div>
      <div>
        {product.map((item, k) => <div key={k}>{item}</div>)}
      </div>
    </div>
  )
}


export default Index;