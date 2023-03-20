import * as React from 'react';
import { useEffect, useReducer, useState, useContext } from 'react';
import Monster from '../monster/index';
import Heros from '../heros/index';
import { Monster as MonsterProps, Heros as HerosProps } from '../interface';
import sty from '../index.less'


// 当前状态
interface stateProp {
  monsterId?: number;// 当前怪物id
  hp?: number;
  monsterObj?: any; // new 的怪物对象 
  hero?: any
}

// 传递对象
interface actionProp {
  type?: string; // 操作类型
  monsterId?: number; // 当前怪物id
  hp?: number;
  callback?: Function;
  hero?: any
}

interface props {
  fn: Function;
  hero: any;
}

let initState = {
  monsterObj: new Monster(1),
  monsterId: 1,
  hp: 100, // 总血量
}

const reducer = function (state: stateProp, action: actionProp) {
  switch (action.type) {
    case 'add':
      state.monsterObj.nextMoster(); // 切换下一个怪兽
      let m = state.monsterObj.downMoney(); // 掉落金币
      console.log(m);
      action.callback(m);
      return { ...state, monsterId: action.monsterId, hp: state.monsterObj.hp }
    case 'hp':
      let injury = state.hero.power * state.hero.level;
      state.monsterObj.delHp(injury);
      return { ...state }
    case 'updateHero':
    
    return { ...state, hero: action.hero }
  }
}

let t: any = null;

const Index = function (props: props) {
  const [state, dispatch] = useReducer(reducer, initState, (init) => { return { ...init, hero: props.hero } });
  const stateRef = React.useRef(state); // 使用useRef获取state, 在useEffect中使用
  useEffect(() => {
    t = setInterval(() => {
      if (stateRef.current.monsterObj.hp <= 0) {
        dispatch({
          type: 'add', monsterId: stateRef.current.monsterId + 1, callback: (m: number) => {
            props.fn(m);
          }
        })
      }
      else dispatch({ type: 'hp' })
    }, 1150)
    return () => { clearInterval(t) }
  }, []);
  useEffect(() => {
    // 挂载state值
    stateRef.current = state;
  }, [state]);
  useEffect(()=>{
    // 更新英雄信息
    dispatch({
      type: 'updateHero',
      hero: props.hero
    })
  }, [props.hero])
  let h = state.monsterObj.hp * 100 / state.hp;

  return (
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
  )
}

export default Index;