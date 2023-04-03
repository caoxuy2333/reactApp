import * as React from 'react';
import { connect, useDispatch } from "react-redux";
import { Monster as MonsterProps, Heros as HerosProps } from '../interface';
import sty from '../index.less';

interface props {
  dispatch: any;
  global: any;
}

const Index = function (props: props) {
  const { nextHero } = props.global;
  const heroUpLevel = function (val: any) {
    console.log(val, this)
    props.dispatch({ type: 'global/heroLevelUP', payload: this })
  }
  return (
    <div className={sty.hero}>
      {nextHero.map((it: any, i: any) => (
        <div className={sty.heroAttr} key={i}>
          <div>
            <button onClick={heroUpLevel.bind(it)}>
              升级
              需要 {it.levelUpMoney}
            </button>
          </div>
          <div>level:{it?.level}  name: {it?.name} 攻击力: {it?.power}</div>
          <div>img</div>
        </div>
      ))}
    </div>
  )
}

export default connect((state: any) => ({ global: state.global }))(Index);