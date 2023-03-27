import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import sty from '../index.less';
 


let t: any = null;
const defaultTime = 10;
// 30s内无法击败则无法进入下一层
const Index = function (props: any) {
  const { monster, countHp } = props.global;
  const [endTime, setEndTime] = useState(defaultTime);
  const stateRef = React.useRef(monster);
  const timeRef = React.useRef(endTime);
  useEffect(() => {
    stateRef.current = monster;
    timeRef.current = endTime;
  }, [monster, endTime])
  useEffect(() => {
    t = setInterval(function () {
      if (timeRef.current <= 0) {
        // 剩余时间到, 未杀死小怪兽
        props.dispatch({ type: 'global/resetHp' })
        setEndTime(defaultTime)
      } else {
        setEndTime(v => Math.round((v - 0.1) * 100) / 100)
        if (stateRef.current.hp <= 0) {
          props.dispatch({ type: 'global/nextMoster' })
          setEndTime(defaultTime)
        } else {
          props.dispatch({ type: 'global/delHp' })
        }
      }
    }, 100)
    return () => { clearInterval(t) }
  }, []);
  let img = '';
  try{
    img = require(`assets/monster/${monster?.img}`)
  }catch(e){ 
    console.info(e);
  }
  return (
    <div className={sty.body}>
      <div>森林 等级 12</div>
      <div>1/10</div>
      <div>{endTime}</div>
      <div className={sty.background}>
        <div>金币+10</div>
        <div className={sty.person}>
          {monster?.name || 'null'}
          {/* <img src={img1} alt="" /> */}
          <img src={img} alt="无" />
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