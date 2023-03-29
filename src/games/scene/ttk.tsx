import * as React from 'react';
import { useEffect, useState, Fragment } from 'react';
import { connect } from "react-redux";
import * as cx from 'classnames';
import sty from '../index.less';

let t: any = null;
let t2: any = null; 
const defaultTime = 10; // 10s内无法击败则无法进入下一层

function mapDispatchToProps(dispatch: any) {
  return {
    increment: () => dispatch({ type: 'global/increment' })
  };
}

const MoneyItem = function (val: any) {
  const [styles, setStyles] = useState([sty.jc])
  useEffect(() => {
    const t4 = setTimeout(() => {
      setStyles([sty.jc, sty.yidai])
    }, 10)
    return () => clearTimeout(t4);
  }, [])
  return (
    <span className={cx(styles)}>金币+{val}</span>
  )
}

const MoneyAnimation = connect((state: any) => ({ global: state.global }), mapDispatchToProps)(function (props: any) {
  const { monsterMoneyList } = props.global;
  const { increment } = props;
  useEffect(() => {
    // 600毫秒删除一次动画
    t2 = setInterval(() => {
      increment()
    }, 1000)
    return () => {
      clearInterval(t2);
    }
  }, [])

  return (
    <Fragment>{monsterMoneyList.map((it: any) => <MoneyItem key={it} />)}</Fragment>
  )
})

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
  try {
    img = require(`assets/monster/${monster?.img}`)
  } catch (e) {
    console.info(e);
  }
  return (
    <div className={sty.body}>
      <div>森林 等级 12</div>
      <div>1/10</div>
      <div>{endTime}</div>
      <div className={sty.background}>
        <div className={sty.person}>
          {monster?.name || 'null'}
          <img src={img} alt="无" />
        </div>
        <MoneyAnimation />
      </div>
      <div>
        {monster?.hp} HP
        <input type="range" readOnly value={monster.hp * 100 / countHp} />
      </div>
    </div>
  )
}

export default connect((state: any) => ({ global: state.global }))(Index);