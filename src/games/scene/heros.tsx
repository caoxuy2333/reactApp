import * as React from 'react';
import { useEffect, useReducer, useState } from 'react';
import Heros from '../heros/index';
import { Monster as MonsterProps, Heros as HerosProps } from '../interface';
import sty from '../index.less';

interface props{
  fn: Function;
}

// 当前状态
interface stateProp {
  herosObj?: any; // new 的英雄对象 
  fn: Function;
}

// 传递对象
interface actionProp {
  type: 'levelUP' | ''; // 等级   
}
let initState = {
  herosObj: new Heros(1),
}

const reducer = function (state: stateProp, action: actionProp) {
  switch (action.type) {
    case 'levelUP':
      state.herosObj.levelUp();
      state.fn(state.herosObj)
      return { ...state }
  }
}

const Index = function (props: props) {
  const [state, dispatch] = useReducer(reducer, initState, (init) => { return { ...init, fn: props.fn } });
  const heroUpLevel = function () {
    dispatch({ type: 'levelUP' })
  }
  return (
    <div className={sty.hero}>
      <div className={sty.heroAttr}>
        <div><button onClick={heroUpLevel}>升级</button></div>
        <div>level:{state.herosObj?.level}  name: {state.herosObj?.name} 攻击力: {state.herosObj?.power}</div>
        <div>img</div>
      </div>
      {state.herosObj.allHero.map((it: any) => (
        <div className={sty.heroName} key={it}>{it}</div>
      ))}
    </div>
  )
}

export default Index;