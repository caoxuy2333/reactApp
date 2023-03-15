import * as React from 'react';
import { useEffect, useReducer, useState } from 'react';
import sty from './index.less'

interface monsterType {
  [key: number]: { key: number, name: string }
}

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

const monster: monsterType = {
  1: {
    key: 1,
    name: '史莱姆'
  },
  2: {
    key: 2,
    name: '小猪'
  },
  3: {
    key: 3,
    name: '恶灵'
  },
  4: {
    key: 4,
    name: '树妖'
  },
  5: {
    key: 5,
    name: '黑衣人'
  },
  6: {
    key: 6,
    name: '忍者'
  }
}

interface monsterProp {

}

// 当前状态
interface stateProp {
  monsterId?: number;// 当前怪物id
  hp?: number;
}

// 传递对象
interface actionProp {
  type?: string; // 操作类型
  monsterId?: number; // 当前怪物id
  hp?: number;
}
let initState = {
  monsterId: 1,
  hp: 0
}

const reducer = function (state: stateProp, action: actionProp) {
  switch (action.type) {
    case 'add':
      return { ...state, monsterId: action.monsterId, hp: 0 }
    case 'hp':
      return { ...state, hp: state.hp + 1 }
  }
}

let t: any = null;

const Index = function () {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log('view', state);
  useEffect(() => {
    console.log('重新注册定时器')
    t = setInterval(() => {
      console.log(state);
      if (state.hp >= 100) dispatch({ type: 'add', monsterId: state.monsterId + 1 })
      else dispatch({ type: 'hp' })
    }, 110)
    return () => {
      console.log('销毁事件')
      clearInterval(t);
    }
  }, [state.hp]); // 观察 hp 值

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
              {monster[state.monsterId]?.name}
            </div>
          </div>
          <div>
            <input type="range" readOnly value={state.hp} />
          </div>
        </div>
        <div className={sty.hero}>
          {heros.map(it => (
            <div className={sty.heroName} key={it.key}>{it.name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index;