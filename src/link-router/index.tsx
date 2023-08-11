import * as React from 'react';
import { Link } from 'react-router-dom';
import sty from './index.less';

const Index: React.FC = (): JSX.Element => {


  return (
    <div>
      {/* <h3>我是首页</h3> */}
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
      <div>
        <Link to={'/react'}>react测试</Link>
      </div>
      <div>
        <Link to={'/game'}>game</Link>
      </div>
      <div>
        <Link to={'/fc'}>fc-game</Link>
      </div>
      <div>
        <Link to={'/gba'}>gba-game</Link>
      </div>
      <a style={{ position: 'fixed', bottom: 0 }} href='https://beian.miit.gov.cn/#/Integrated/index'>粤ICP备2023078446号</a>
    </div>
  )
}

export default Index;