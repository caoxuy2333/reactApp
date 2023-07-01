import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Joystick } from 'react-joystick-component';
import GameBoyAdvance from './comp/gba';
import loadRom from './xhr';
import sty from './index.less';

let canvas: any;
let canvasImageData: any;

interface games {
  [key: string]: string
}

let games: games = {
  '选择游戏': '(W) Super Mario Bros.nes',
  '火纹': '2'
}

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

// 摇杆 属性
let joy = {
  direction: '', // 方向
  keyCode: -1, // 操作方向 对应编码
};

let gba = new GameBoyAdvance();
gba.keypad.eatInput = true;

function run(file: any) {
  gba.loadRomFromFile(file, function (result: any) {
    if (result) {
      gba.runStable();
    }
  });
}

function reset() {
  gba.pause();
  gba.reset();
  let crash = document.getElementById('crash');
  if (crash) {
    let context = gba.targetCanvas.getContext('2d');
    context.clearRect(0, 0, 480, 320);
    gba.video.drawCallback();
    crash.parentElement.removeChild(crash);
    let canvas = document.getElementById('screen');
    canvas.removeAttribute('class');
  } else {
    lcdFade(gba.context, gba.targetCanvas.getContext('2d'), gba.video.drawCallback);
  }
}

function lcdFade(context: any, target: any, callback: any) {
  let i = 0;
  let drawInterval = setInterval(function () {
    i++;
    let pixelData = context.getImageData(0, 0, 240, 160);
    for (let y = 0; y < 160; ++y) {
      for (let x = 0; x < 240; ++x) {
        let xDiff = Math.abs(x - 120);
        let yDiff = Math.abs(y - 80) * 0.8;
        let xFactor = (120 - i - xDiff) / 120;
        let yFactor = (80 - i - ((y & 1) * 10) - yDiff + Math.pow(xDiff, 1 / 2)) / 80;
        pixelData.data[(x + y * 240) * 4 + 3] *= Math.pow(xFactor, 1 / 3) * Math.pow(yFactor, 1 / 2);
      }
    }
    context.putImageData(pixelData, 0, 0);
    target.clearRect(0, 0, 480, 320);
    if (i > 40) {
      clearInterval(drawInterval);
    } else {
      callback();
    }
  }, 50);
}
const Index = function (props: any) {
  let ref: React.RefObject<any> = useRef();
  useLayoutEffect(() => {
    canvas = ref.current.getContext('2d');
    canvasImageData = canvas.getImageData(0, 0, 256, 240);
    canvas.fillStyle = 'black';
    canvas.fillRect(0, 0, 256, 240);
    for (let i = 3; i < canvasImageData.data.length - 3; i += 4) {
      canvasImageData.data[i] = 0xFF;
    }
    let f = async () => {
      if (gba && FileReader) {
        let canvas = document.getElementById('gbacanvas');
        gba.setCanvas(canvas);
        gba.logLevel = gba.LOG_ERROR;
        let p = await require('./bios.bin');
        loadRom(p, function (bios: any) {
          gba.setBios(bios);
        });
      }
    }
    f();
  }, [])

  // 加载游戏
  const changeGame = async function (e: any) {
    let p = await require(`./1100260.gba`);
    loadRom(p, (r: any) => {
      console.log(r)
      run(r);
    });
  }

  // 按下按钮
  const leftFn = function (e: any) {
    e.preventDefault && e.preventDefault();
    let keyCode = e.target.attributes['keycode'].value;
    // n.keyboard.keyDown({ keyCode: +keyCode });
    gba.keypad.keyboardHandler({
      keyCode: +keyCode,
      type: 'keydown',
      preventDefault: e.preventDefault
    })
  }

  // 松开按钮
  const leftCall = function (e: any) {
    e.preventDefault && e.preventDefault();
    let keyCode = e.target.attributes['keycode'].value;
    // n.keyboard.keyUp({ keyCode: +keyCode });
    gba.keypad.keyboardHandler({
      keyCode: +keyCode,
      type: 'keyup',
      preventDefault: e.preventDefault
    })
  }

  // 移动摇杆
  const handleMove = function (e: any) {
    console.log('e.')
    if (joy.direction !== e.direction) {
      if (joy.keyCode !== -1) {
        gba.keypad.keyboardHandler({
          keyCode: joy.keyCode,
          type: 'keyup',
          preventDefault: e.preventDefault
        })
      }
      joy.direction = e.direction
      switch (joy.direction) {
        case 'LEFT':
          joy.keyCode = 37;
          break;
        case 'RIGHT':
          joy.keyCode = 39;
          break;
        case 'FORWARD':
          joy.keyCode = 38;
          break;
        case 'BACKWARD':
          joy.keyCode = 40;
          break;
        default:
          break;
      }
      gba.keypad.keyboardHandler({
        keyCode: joy.keyCode,
        type: 'keydown',
        preventDefault: e.preventDefault
      })
    }
    return;
  }
  // 松开摇杆键
  const handleStop = function (e: any) {
    gba.keypad.keyboardHandler({
      keyCode: joy.keyCode,
      type: 'keyup',
      preventDefault: e.preventDefault
    })
    joy.direction = '';
    joy.keyCode = -1;
  }
  return (
    <div id='gbagame' className={sty.body}>
      <div style={{ marginLeft: '0.7rem' }}>
        <select style={{ width: '5rem' }} onChange={changeGame}>
          {Object.keys(games).map(it => <option key={it} value={it}>{it}</option>)}
        </select>
        <br />
        <br />
        <br />
        <div style={{ position: 'relative' }}>
          <Joystick disabled size={175} sticky={false} move={handleMove} stop={handleStop} />
          <Button keycode={38} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ top: 0, left: 0, right: 0 }}>上</Button>
          <Button keycode={37} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ top: 0, left: 0, bottom: 0 }}>左</Button>
          <Button keycode={39} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ right: 0, top: 0, bottom: 0 }}>右</Button>
          <Button keycode={40} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall} className={sty.joyBtn} style={{ right: 0, left: 0, bottom: 0 }}>下</Button>
        </div>
      </div>
      <canvas id='gbacanvas' ref={ref} width={256} height={240}></canvas>
      <div>
        <Button keycode={13} style={{ fontSize: '0.8rem' }} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>start</Button>
        &nbsp;&nbsp;
        <Button keycode={220} style={{ fontSize: '0.8rem' }} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>select</Button>
        <br />
        <br />
        <br />
        <Button keycode={65} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>L</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button keycode={83} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>R</Button>
        <br />
        <Button keycode={90} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>A</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button keycode={88} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>B</Button>
      </div>
    </div>
  )
}

export default (Index);