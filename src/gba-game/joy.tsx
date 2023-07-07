import React, { useState, Fragment } from 'react';
import { Joystick } from 'react-joystick-component';
import sty from './index.less';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  keycode: number;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button style={{ fontSize: '1.5rem' }} {...props}>
      {children}
    </button>
  );
};

const Index = function (props: any) {
  // 按下按钮   松开按钮    移动摇杆  松开摇杆键 
  const { leftFn, leftCall, handleMove, handleStop } = props;
  const [type, setType] = useState('direction');
  const switchJoy = function () {
    setType(type === 'direction' ? 'joy' : 'direction')
  }
  let colors: any = {};
  if (type === 'direction') {
    colors.baseColor = '#00000000'
    colors.stickColor = '#00000030'
    colors.disabled = true
  }else {
    colors.baseColor = '#ff000030'
    colors.stickColor = '#00ff0030'
    colors.disabled = false
  }
  return (
    <Fragment>
      <button onClick={switchJoy}>切换摇杆</button>
      <br />
      <br />
      <br />
      <div style={{ position: 'relative', width: 155 }}>
        <Joystick {...colors}   size={155} sticky={false} move={handleMove} stop={handleStop} />
        {type === 'direction' ? (
          <Fragment>
            <Button keycode={38} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ top: 0, left: 0, right: 0 }}>上</Button>
            <Button keycode={37} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ top: 0, left: 0, bottom: 0 }}>左</Button>
            <Button keycode={39} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ right: 0, top: 0, bottom: 0 }}>右</Button>
            <Button keycode={40} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ right: 0, left: 0, bottom: 0 }}>下</Button>
          </Fragment>
        ) : ''}
      </div>
    </Fragment>

  )
}

export default (Index);