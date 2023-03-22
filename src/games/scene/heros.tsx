import * as React from 'react'; 
import { connect, useDispatch } from "react-redux";
import { Monster as MonsterProps, Heros as HerosProps } from '../interface';
import sty from '../index.less';

interface props { 
  dispatch: any;
  global: any;
}

const Index = function (props: props) {
  const { hero, allHero } = props.global;
  const heroUpLevel = function () {
    props.dispatch({ type: 'global/heroLevelUP' })
  }
  return (
    <div className={sty.hero}>
      <div className={sty.heroAttr}>
        <div><button onClick={heroUpLevel}>升级</button></div>
        <div>level:{hero?.level}  name: {hero?.name} 攻击力: {hero?.power}</div>
        <div>img</div>
      </div>
      {allHero.map((it: any) => (
        <div className={sty.heroName} key={it}>{it}</div>
      ))}
    </div>
  )
}

export default connect((state: any) => ({ global: state.global }))(Index);