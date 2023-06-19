import React, { useEffect, useLayoutEffect, useRef } from 'react';
import nes from './comp/index';

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

  return (
    <div>
      <canvas ref={ref} width={256} height={240}></canvas>
      <div>
        <Button keycode={65} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>左</Button>
        <Button keycode={68} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>右</Button>
        <Button keycode={87} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>上</Button>
        <Button keycode={83} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>下</Button>
        <Button keycode={17} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>start</Button>
        <Button keycode={13} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>pause</Button>
        <Button keycode={75} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>A</Button>
        <Button keycode={74} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>B</Button>
      </div>
    </div>
  )
}

export default (Index);