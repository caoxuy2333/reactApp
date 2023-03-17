import * as React from 'react';
import { useEffect, useReducer, useState } from 'react';
import Monster from './monster/index';
import Heros from './heros/index';
import { Monster as MonsterProps, Heros as HerosProps } from './interface';
import Ttk from './scene/ttk';
import sty from './index.less';

// 当前状态
interface stateProp {
  monsterId?: number;// 当前怪物id
  hp?: number;
  monsterObj?: any; // new 的怪物对象
  herosObj?: any; // new 的英雄对象
  jb?: number; // 金币
}

// 传递对象
interface actionProp {
  type?: string; // 操作类型
  monsterId?: number; // 当前怪物id
  hp?: number;
  jb?: number; // 金币
}
let initState = {
  monsterObj: new Monster(1),
  herosObj: new Heros(1),
  monsterId: 1,
  hp: 100,
  jb: 0
}

const reducer = function (state: stateProp, action: actionProp) {
  switch (action.type) {
    case 'dljb': // 掉落金币
      return { ...state, jb: state.jb + action.jb }
    case 'hp':
      return { ...state }
  }
}
  
const Index = function () {
  const [money, setMoney] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState); 
  const heroUpLevel = function () {
    state.herosObj.levelUp();
  }
  const downMoney = function(m: number){
    dispatch({
      type: 'dljb',
      jb: m
    })
  }
  return (
    <div>
      <div className={sty.border}>
        <div className={sty.header}>
          金币 {state.jb}
        </div>
        <Ttk fn={downMoney} />

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
      </div>
    </div>
  )
}

export default Index;