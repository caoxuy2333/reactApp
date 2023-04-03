import React from 'react';
import { connect, useDispatch } from "react-redux";
import Ttk from './scene/ttk';
import Hero from './scene/heros';
import sty from './index.less';

const Index = function (props: any) {
  const { money } = props.global;
  return (
    <div className={sty.border}>
      <div className={sty.header}>
        金币: {money}
      </div>
      <Ttk />
      <Hero />
    </div>
  )
}

export default connect((state: any) => ({ global: state.global }))(Index);