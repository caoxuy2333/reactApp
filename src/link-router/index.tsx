import * as React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import beianIcon from 'assets/备案图标.png'
import sty from './index.less';

const Index: React.FC = (): JSX.Element => {
  // 判断是否是微信浏览器, 若是则使用replace跳转, 防止出现底部前进回退栏
  let iswx = navigator.userAgent.indexOf('MicroMessenger') > -1;
  return (
    <Fragment>
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
      <div className={sty.head}>
        选择平台游玩
      </div>
      <div className={sty.flex}>
        <Link replace={iswx} className={sty.fc} to={'/fc'}>
          fc-game
        </Link>
        <Link replace={iswx} className={sty.gba} to={'/gba'}>
          gba-game
        </Link>
      </div>
      <div className={sty.foot}>
        <a style={{ paddingRight: 20 }} href='https://beian.miit.gov.cn/#/Integrated/index'>粤ICP备2023078446号</a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602011882"
        >
          <img src={beianIcon} style={{ float: 'left' }} />
          粤公网安备 44010602011882号
        </a>
      </div>
    </Fragment>
  )
}

export default Index;