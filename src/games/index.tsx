import * as React from 'react';
import { useEffect, useReducer, useState } from 'react';
import Monster from './monster/index';
import Heros from './heros/index';
import {Monster as MonsterProps, Heros as HerosProps} from './interface'; 
import sty from './index.less'


const heros = [{
  key: 1,
  name: '森林使者'
}, {
  key: 2,
  name: '骑兵'
}, {
  key: 3,
  name: '黑暗骑士'
}, {
  key: 4,
  name: '光能使者'
}, {
  key: 5,
  name: '白魔法师'
}]


interface monsterProp {

}

// 当前状态
interface stateProp {
  monsterId?: number;// 当前怪物id
  hp?: number;
  monsterObj?: any; // new 的怪物对象
  herosObj?: any; // new 的英雄对象
}

// 传递对象
interface actionProp {
  type?: string; // 操作类型
  monsterId?: number; // 当前怪物id
  hp?: number;
}
let initState = {
  monsterObj: new Monster(1),
  herosObj: new Heros(1),
  monsterId: 1,
  hp: 100
}

const reducer = function (state: stateProp, action: actionProp) {
  switch (action.type) {
    case 'add':
      state.monsterObj.nextMoster(); // 切换下一个怪兽
      return { ...state, monsterId: action.monsterId, hp: state.monsterObj.hp }
    case 'hp':
      let injury = state.herosObj.power * state.herosObj.level;
      state.monsterObj.delHp(injury);
      return { ... state }
  }
}

let t: any = null;

const Index = function () {
  const [state, dispatch] = useReducer(reducer, initState);
  const stateRef = React.useRef(state); // 使用useRef获取state, 在useEffect中使用
  useEffect(() => {
    t = setInterval(() => {
      if (stateRef.current.monsterObj.hp <= 0) dispatch({ type: 'add', monsterId: stateRef.current.monsterId + 1 })
      else dispatch({ type: 'hp' })
    }, 1100)
    return () => { clearInterval(t) }
  }, []);
  useEffect(() => {
    // 挂载state值
    stateRef.current = state;
  }, [state]);
  let h = state.monsterObj.hp * 100 / state.hp; 
  
  const heroUpLevel = function(){
    state.herosObj.levelUp();
  }
  return (
    <div>
      <div className={sty.border}>
        <div className={sty.header}>
          金币 100
        </div>
        <div className={sty.body}>
          <div>等级</div>
          <div>森林 1/10</div>
          <div className={sty.background}>
            <div className={sty.person}>
              {state.monsterObj?.name || 'null'}
            </div>
          </div>
          <div>
             {state.monsterObj?.hp} HP
            <input type="range" readOnly value={h} />
          </div>
        </div>
        <div className={sty.hero}>
          <div>英雄信息 * <button onClick={heroUpLevel}>升级</button></div>
          {state.herosObj.allHero.map((it: any) => (
            <div className={sty.heroName} key={it}>{it}</div>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Index;