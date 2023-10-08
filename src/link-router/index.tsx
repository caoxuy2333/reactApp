import * as React from 'react';
import { Link } from 'react-router-dom';
import beianIcon from 'assets/备案图标.png'
import sty from './index.less';

const Index: React.FC = (): JSX.Element => {


  return (
    <div>
      {/* <h3>我是首页</h3> */}
      {/* <div>
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
      </div> */}
      <div className={sty.flex}>
        <Link className={sty.fc} to={'/fc'}>
          <div>fc-game</div>
        </Link>
        <Link className={sty.gba} to={'/gba'}>
          <div>gba-game</div>
        </Link>
      </div>
      <div className={sty.foot}>
        <a style={{paddingRight: 20}} href='https://beian.miit.gov.cn/#/Integrated/index'>粤ICP备2023078446号</a>
         
        <a
            target="_blank"
            rel="noreferrer"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602011882"
          >
            <img src={beianIcon} style={{ float: 'left' }} />
             粤公网安备 44010602011882号 
          </a>
      </div>
    </div>
  )
}

export default Index;