import * as React from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC = ():JSX.Element=>{


  return (
    <div>
      <h3>我是首页</h3>
      点击跳转: <Link to={'/fileTransferProtocol'}>断点续传</Link>
      
      </div>
    
  )
}

export default Index;