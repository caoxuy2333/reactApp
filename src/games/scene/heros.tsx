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
  const heroUpLevel = function () {
    props.dispatch({ type: 'global/heroLevelUP', payload: this })
  }
  return (
    <div className={sty.hero}>
      {nextHero.map((it: any, i: any) => (
        <div className={sty.heroAttr} key={i}>
          <div>
            <button className={sty.levelUpBtn} onClick={heroUpLevel.bind(it)}>
              <span>LV UP</span>
              <span>$ {it.levelUpMoney}</span>
            </button>
          </div>
          <div className={sty.heroTxt}>{it?.name}  LV {it?.level} 攻击力: {it?.power}</div>
          <div className={sty.heroImg}>
            <img src={it.img ? require(`assets/hero/${it.img}`) : ''} alt="无" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default connect((state: any) => ({ global: state.global }))(Index);