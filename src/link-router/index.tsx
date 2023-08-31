import * as React from 'react';
import { Link } from 'react-router-dom';
import beianIcon from 'assets/备案图标.png'
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
      <div style={{ position: 'fixed',fontSize: 16, left: 10, bottom: 5,display: 'flex'}}>
        <a  href='https://beian.miit.gov.cn/#/Integrated/index'>粤ICP备2023078446号</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div style={{  width: 600, margin: '0 auto'  }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602011882" 
          >
            <img src={beianIcon} style={{ float: 'left' }} />
            <p style={{  margin: '0 0 0 5px', color: '#939393' }}>粤公网安备 44010602011882号</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Index;