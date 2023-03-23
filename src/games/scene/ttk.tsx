import * as React from 'react';
import { useEffect, useReducer, useState, useContext } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { Monster as MonsterProps, Heros as HerosProps } from '../interface';
import sty from '../index.less';
import img1 from 'assets/img/monster2.jpg'
import img2 from 'assets/img/map1.png'

let t: any = null;

const Index = function (props: any) {
  const { monster, countHp } = props.global;
  const stateRef = React.useRef(monster);
  useEffect(() => {
    stateRef.current = monster;
  }, [monster])
  useEffect(() => {
    t = setInterval(function () {
      if (stateRef.current.hp <= 0) {
        props.dispatch({ type: 'global/nextMoster' })
      } else {
        props.dispatch({ type: 'global/delHp' })
      }
    }, 1130)
    return () => { clearInterval(t) }
  }, []);
  return (
    <div className={sty.body}>
      <div>等级</div>
      <div>森林 1/10</div>
      <div className={sty.background}>
        <div className={sty.person}>
          {monster?.name || 'null'}
          {/* <img src={img1} alt="" /> */}
          <img src={img2} alt="" />
        </div>
      </div>
      <div>
        {monster?.hp} HP
        <input type="range" readOnly value={monster.hp * 100 / countHp} />
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch: any) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' })
  };
}
export default connect((state: any) => ({ global: state.global }))(Index);