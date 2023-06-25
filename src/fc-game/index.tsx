import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Joystick } from 'react-joystick-component';
import nes from './comp/index';
import sty from './index.less';

let n = new nes();
let p = require('./nes-file/Contra1(U)30.nes')
let canvas: any;
let canvasImageData: any;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  keycode: number;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button style={{ fontSize: 85 }} {...props}>
      {children}
    </button>
  );
};

// 渲染canvas
n.ui.writeFrame = function (buffer: any, prevBuffer: any) {
  let imageData = canvasImageData.data;
  let pixel, i, j;
  for (i = 0; i < 256 * 240; i++) {
    pixel = buffer[i];
    if (pixel != prevBuffer[i]) {
      j = i * 4;
      imageData[j] = pixel & 0xFF;
      imageData[j + 1] = (pixel >> 8) & 0xFF;
      imageData[j + 2] = (pixel >> 16) & 0xFF;
      prevBuffer[i] = pixel;
    }
  }
  canvas.putImageData(canvasImageData, 0, 0);
}

// 摇杆 属性
let joy = {
  direction: '', // 方向
  keyCode: -1, // 操作方向 对应编码
};

const Index = function (props: any) {
  let ref: React.RefObject<any> = useRef();
  let xhr = new XMLHttpRequest();
  xhr.open('GET', p, true);
  xhr.overrideMimeType('text/plain; charset=x-user-defined');
  xhr.onreadystatechange = function (e) {
    if (this.readyState == 4 && this.status == 200) {
      let binStr = this.responseText;
      n.loadRom(binStr);
      n.start();
    }
  };
  xhr.send();
  useLayoutEffect(() => {
    canvas = ref.current.getContext('2d');
    canvasImageData = canvas.getImageData(0, 0, 256, 240);
    canvas.fillStyle = 'black';
    canvas.fillRect(0, 0, 256, 240);
    for (let i = 3; i < canvasImageData.data.length - 3; i += 4) {
      canvasImageData.data[i] = 0xFF;
    }
  }, [])

  // 按下按钮
  const leftFn = function (e: any) {
    e.preventDefault();
    let keyCode = e.target.attributes['keycode'].value;
    n.keyboard.keyDown({ keyCode: +keyCode });
  }

  // 松开按钮
  const leftCall = function (e: any) {
    e.preventDefault();
    let keyCode = e.target.attributes['keycode'].value;
    n.keyboard.keyUp({ keyCode: +keyCode });
  }

  const handleMove = function (e: any) {
    if (joy.direction !== e.direction) {
      if (joy.keyCode) n.keyboard.keyUp({ keyCode: joy.keyCode });
      joy.direction = e.direction
      switch (joy.direction) {
        case 'LEFT':
          joy.keyCode = 65;
          break;
        case 'RIGHT':
          joy.keyCode = 68;
          break;
        case 'FORWARD':
          joy.keyCode = 87;
          break;
        case 'BACKWARD':
          joy.keyCode = 83;
          break;
        default:
          break;
      }
      n.keyboard.keyDown({ keyCode: joy.keyCode });
    }
    return;
  }
  // 松开摇杆键
  const handleStop = function (e: any) {
    n.keyboard.keyUp({ keyCode: joy.keyCode });
    joy.direction = '';
    joy.keyCode = -1;
  }

  return (
    <div className={sty.body}>
      <div>
        <Joystick size={100} sticky={false} move={handleMove} stop={handleStop}></Joystick>
      </div>
      <canvas ref={ref} width={256} height={240}></canvas>
      <div>
        <Button keycode={13} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>start</Button>
        <Button keycode={17} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>select</Button>
        <Button keycode={74} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>A</Button>
        <Button keycode={75} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>B</Button>
      </div>
    </div>
  )
}

export default (Index);