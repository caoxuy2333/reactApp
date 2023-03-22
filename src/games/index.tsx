import * as React from 'react';
import { useEffect, useReducer, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import Ttk from './scene/ttk';
import Hero from './scene/heros';
import sty from './index.less';
import { increment } from '../store';

const Index = function (props: any) {
  console.log('index', props)
  const { money } = props.global;
  return (
    <div>
      <button onClick={() => {
        props.dispatch({ type: 'global/heroLevelUP' }) // => props.dispatch(increment())
      }}>123</button>
      <div className={sty.border}>
        <div className={sty.header}>
          金币 {money}
        </div>
        <Ttk />
        <Hero />
      </div>
    </div>
  )
}

export default connect((state: any) => ({ global: state.global }))(Index);