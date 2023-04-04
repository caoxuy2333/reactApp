import * as React from 'react';
import { useEffect, useState, Fragment } from 'react';
import { connect } from "react-redux";
import cx from 'classnames';
import sty from '../index.less';

let t: any = null;
let t2: any = null;
const defaultTime = 10; // 10s内无法击败则无法进入下一层

function mapDispatchToProps(dispatch: any) {
  return {
    dispatch,
    increment: () => dispatch({ type: 'global/increment' })
  };
}

// 单个伤害数值动画
const MoneyItem = (function (props: any) {
  const [styles, setStyles] = useState([sty.jc]);
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t5 = setTimeout(() => {
      setShow(false);
    }, 1000)
    const t4 = setTimeout(() => {
      setStyles([sty.jc, sty.yidai])
    }, 10) // 增加延时 显示动画效果
    return () => {
      clearTimeout(t5);
      clearTimeout(t4);
    }
  }, [])
  return (
    show ? <span className={cx(styles)}>金币+{props.val}</span> : null
  )
})

// 怪兽伤害列表
const MoneyAnimation = connect((state: any) => ({ global: state.global }), mapDispatchToProps)(function (props: any) {
  const { monsterMoneyList } = props.global;
  return (
    <Fragment>{monsterMoneyList.map((it: any, i: any) => <MoneyItem key={i} val={it} />)}</Fragment>
  )
})

const Index = function (props: any) {
  const { monster, countHp, mapIndex } = props.global;
  const [endTime, setEndTime] = useState(defaultTime);
  const [anime, setAnime] = useState(0);
  const [style, setStyle] = useState({})
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
  const clickTtk = function () {
    // 点击攻击特效
    setAnime(v => v + 1);
    setStyle({
      left: Math.random() * (3 + 7 + 1) - 7 + 'rem',
      bottom: Math.random() * (3 + 7 + 1) - 7 + 'rem',
    })
    const t6 = setTimeout(() => {
      setAnime(0);
      clearTimeout(t6);
    }, 100)
    props.dispatch({ type: 'global/delHp', payload: { point: true } })
  }
  return (
    <div className={sty.body}>
      {/* <div>森林 等级 12</div> */}
      <div>关卡: {mapIndex}</div>
      <div>{endTime}</div>
      <div className={sty.background} onClick={clickTtk}>
        <div className={sty.person}>
          {monster?.name || 'null'}
          <img src={monster.img ? require(`assets/monster/${monster?.img}`) : ''} alt="无" />
        </div>
        <div className={sty.animeFaster}>
          <img className={cx(sty.animeInit, anime ? sty.ttkAmine : '')} style={style} src={require(`assets/img/anime.png`)} alt="无" />
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