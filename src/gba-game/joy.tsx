import React, { useState, Fragment, useCallback, useLayoutEffect } from 'react';
import sty from './index.less';

interface direEnum {
  [key: string]: string
}

const directionEnum: direEnum = {
  left: 'LEFT',
  right: 'RIGHT',
  top: 'FORWARD',
  bottom: 'BACKWARD',
  topRight: 'topRight',
  leftTop: 'leftTop',
  rightBottom: 'rightBottom',
  leftBottom: 'leftBottom',
}


const Index = function (props: any) {
  // 按下按钮   松开按钮    移动摇杆  松开摇杆键 
  const { handleMove, handleStop } = props;
  const [down, setDown] = useState(false)
  const [moveStyle, setMoveStyle] = useState({ transform: 'translate(0, 0)' })

  // x1 按下坐标相对于中间点的 x轴
  // y1 
  // x 按下坐标的x值 相对于半径的百分比
  // y
  let onPointerMove = function (e: any) {
    if (down) {
      let direction: string;
      let width = e.currentTarget.offsetWidth / 2;
      let height = e.currentTarget.offsetHeight / 2;
      let x1 = e.clientX - e.currentTarget.offsetLeft - width;
      let y1 = e.clientY - e.currentTarget.offsetTop - height;
      let sqrt: number = Math.sqrt(x1 * x1 + y1 * y1);
      let x = x1 / width;
      let y = y1 / height;
      // 移出圆的半径外情况
      if (sqrt > width) {
        // 直角三角形, 斜边/直边 = 斜边/直边
        x1 = width * x1 / sqrt;
        y1 = height * y1 / sqrt;
      }
      if(x>1) x=1;
      if(x<-1) x=-1;
      if(y>1) y=1;
      if(y<-1) y=-1;
      // 左
      if (x < 0 && Math.abs(y) <= Math.abs(x)) direction = 'left'
      // 右 
      if (x > 0 && Math.abs(y) <= Math.abs(x)) direction = 'right'
      // 上
      if (y < 0 && Math.abs(x) <= Math.abs(y)) direction = 'top'
      // 下
      if (y > 0 && Math.abs(x) <= Math.abs(y)) direction = 'bottom'

      setMoveStyle({
        transform: `translate(${x1}px, ${y1}px)`
      })
      handleMove({
        direction: directionEnum[direction],
        x,
        y
      })
    }
  }
  let onPointerDown = function (e: any) {
    let direction: string;
    e.stopPropagation();
    setDown(true)
    let width = e.currentTarget.offsetWidth / 2;
    let height = e.currentTarget.offsetHeight / 2;
    let x1 = e.clientX - e.currentTarget.offsetLeft - width;
    let y1 = e.clientY - e.currentTarget.offsetTop - height;
    let sqrt: number = Math.sqrt(x1 * x1 + y1 * y1);
    let x, y;
    x = x1 / width;
    y = y1 / height;
    // 移出圆的半径外情况
    if (sqrt > width) {
      // 直角三角形, 斜边/直边 = 斜边/直边
      x1 = width * x1 / sqrt;
      y1 = height * y1 / sqrt;
    }
    // 左
    if (x < 0 && Math.abs(y) <= Math.abs(x)) direction = 'left'
    // 右 
    if (x > 0 && Math.abs(y) <= Math.abs(x)) direction = 'right'
    // 上
    if (y < 0 && Math.abs(x) <= Math.abs(y)) direction = 'top'
    // 下
    if (y > 0 && Math.abs(x) <= Math.abs(y)) direction = 'bottom'
    setMoveStyle({
      transform: `translate(${x1}px, ${y1}px)`
    })
    handleMove({
      direction: directionEnum[direction],
      x,
      y
    })
  }
  let onPointerUp = function (e: any) { 
    setDown(false)
    setMoveStyle({
      transform: `translate(0px, 0px)`
    })
    handleStop(e)
   }
  return (
    <Fragment>
      <br />
      <br />
      <div
        className={sty.joyBase}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
      >

        <div style={moveStyle} className={sty.joy}></div>
      </div>
    </Fragment>

  )
}

export default (Index);