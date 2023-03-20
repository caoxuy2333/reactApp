import * as React from 'react';
import { useEffect, useReducer, useState } from 'react';
import Monster from './monster/index';
import Heros from './heros/index';
import { Monster as MonsterProps, Heros as HerosProps } from './interface';
import Ttk from './scene/ttk';
import Hero from './scene/heros';
import sty from './index.less';

// 当前状态
interface stateProp {
  monsterId?: number;// 当前怪物id
  hp?: number;
  monsterObj?: any; // new 的怪物对象
  herosObj?: any; // new 的英雄对象
  jb?: number; // 金币
  hero: any;
}

// 传递对象
interface actionProp {
  type?: string; // 操作类型
  monsterId?: number; // 当前怪物id
  hp?: number;
  jb?: number; // 金币
  hero?: any;
}
let initState = {
  monsterObj: new Monster(1),
  herosObj: new Heros(1),
  monsterId: 1,
  hp: 100,
  jb: 0,
  hero: {
    power: 1,
    level: 1
  }
}

const reducer = function (state: stateProp, action: actionProp) {
  switch (action.type) {
    case 'dljb': // 掉落金币
      return { ...state, jb: state.jb + action.jb }
    case 'hp':
      return { ...state }
    case 'levelUP':
      return { ...state }
    case 'hero':
      return { ...state, hero: action.hero }
  }
}

const Index = function () {
  const [state, dispatch] = useReducer(reducer, initState);
  const downMoney = function (m: number) {
    dispatch({
      type: 'dljb',
      jb: m
    })
  }
  const heroFn = function (st: any) {
    dispatch({ type: 'hero', hero: st })
  }
  return (
    <div>
      <div className={sty.border}>
        <div className={sty.header}>
          金币 {state.jb}
        </div>
        <Ttk hero={state.hero} fn={downMoney} />
        <Hero fn={heroFn} />
      </div>
    </div>
  )
}

export default Index;