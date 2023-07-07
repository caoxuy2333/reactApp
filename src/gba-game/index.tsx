import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Joystick } from 'react-joystick-component';
import { Link } from 'react-router-dom';
import Joy from './joy';
import GameBoyAdvance from './comp/gba';
import loadRom from './xhr';
import sty from './index.less';

let canvas: any;
let canvasImageData: any;

interface games {
  [key: string]: string
}

let games: games = {
  '选择游戏': '',
  '塞尔达传说:缩小帽': 'Zelda no Densetsu - Fushigi no Boushi.gba',
  '火焰之纹章:烈火之剑': 'Fire Emblem - Rekka no Ken.gba',
  '火焰之纹章:封印之剑': 'Fire Emblem - Fuuin no Tsurugi.gba',
  '火焰之纹章:圣魔之光石': 'Fire Emblem - The Sacred Stones.gba',
  '恶魔城：晓月之圆舞曲': 'Castlevania - Aria of Sorrow.gba',
  '星之卡比：镜之迷宫': 'Kirby - The Amazing Mirror.gba',
  '龙珠大冒险': 'Dragon Ball - Advanced Adventure.gba',
  '超级马里奥1': 'Super Mario Advance.gba',
  '超级马里奥2': 'Super Mario Advance 2.gba',
  '马里奥与路易RPG': 'Mario & Luigi - Superstar Saga.gba'
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
    if (!games[e.target.value]) return;
    gba.pause();
    gba.reset();
    canvas.fillStyle = 'red'
    canvas.font = "30px Arial ";
    canvas.fillText("加载中, 请稍后...", 10, 50);
    // let p = 'https://hck-oms-uat.obs.cn-south-1.myhuaweicloud.com/hck-oms-uat/Zelda no Densetsu - Fushigi no Boushi.gba';
    let p = await require('./gba-file/' + games[e.target.value]);
    loadRom(p, (r: any) => {
      console.log(r)
      run(r);
    });
  }

  // 按下按钮
  const leftFn = function (e: any) {
    // e.preventDefault && e.preventDefault();
    let keyCode = e.target.attributes['keycode'].value;
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
    gba.keypad.keyboardHandler({
      keyCode: +keyCode,
      type: 'keyup',
      preventDefault: e.preventDefault
    })
  }

  // 移动摇杆
  const handleMove = function (e: any) {
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
    <div className={sty.layer}>
      <div id='gbagame' className={sty.body}>
        <div style={{ marginLeft: '0.7rem' }}>
          <Link to={'/'} style={{ fontSize: '0.4rem' }}>支持作者</Link>
          <br />
          <select style={{ width: '4rem' }} onChange={changeGame}>
            {Object.keys(games).map(it => <option key={it} value={it}>{it}</option>)}
          </select>
          <Joy leftFn={leftFn} leftCall={leftCall} handleMove={handleMove} handleStop={handleStop} />
        </div>
        <div className={sty.canvas}>
          <canvas id='gbacanvas' ref={ref} width={256} height={240}></canvas>
        </div>
        <div className={sty.btnABLayer}>
          <Button keycode={13} style={{ fontSize: '0.8rem' }} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>start</Button>
          &nbsp;&nbsp;
          <Button keycode={220} style={{ fontSize: '0.8rem' }} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>select</Button>
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
      <div className={sty.beian} >
        <a href="">备案号: 11000002000001</a>
      </div>
    </div>
  )
}

export default (Index);