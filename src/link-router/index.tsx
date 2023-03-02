import * as React from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC = (): JSX.Element => {


  return (
    <div>
      <h3>我是首页</h3>
      点击跳转:
      <div>
        <Link to={'/fileTransferProtocol'}>断点续传</Link>
      </div>
      <div>
        <Link to={'/WebSocketTest'}>websocket连接</Link>
      </div>
      <div>
        <Link to={'/form'}>仿antd-form表单实现</Link>
      </div> 
      <div>
      <Link to={'/login'}>登录页</Link>
      </div>  
    </div>
  )
}

export default Index;