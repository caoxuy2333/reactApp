import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
    <button {...props}>
      {children}
    </button>
  );
};

// 摇杆 属性
let joy = {
  direction: '', // 方向 
};

// canvas 尺寸
let size = {
  width: 326,
  height: 250
}

// 摇杆8个方向
let joy8: any = {
  left: [37],
  leftTop: [37, 38],
  top: [38],
  topRight: [38, 39],
  right: [39],
  rightBottom: [39, 40],
  bottom: [40],
  leftBottom: [40, 37],
}

let gba = new GameBoyAdvance();
gba.keypad.eatInput = true;

function run(file: any) {
  gba.loadRomFromFile(file, function (result: any) {
    if (result) {
      gba.runStable();
    }
  });
}

const Index = function (props: any) {
  let ref: React.RefObject<any> = useRef();
  useLayoutEffect(() => {
    canvas = ref.current.getContext('2d');
    canvasImageData = canvas.getImageData(0, 0, size.width, size.height);
    canvas.fillStyle = 'black';
    canvas.fillRect(0, 0, size.width, size.height);
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
    canvas.font = "20px Arial ";
    canvas.fillText("初次加载较慢, 请耐心等待", 10, 80);
    let p = '/gbaFile/' + games[e.target.value]; // 阿里云oss文件
    loadRom(p, (r: any) => {
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
    const { x, y } = e;
    let fx = e.direction; // 移动的方向
    if (e.direction === 'LEFT') fx = 'left';
    if (e.direction === 'RIGHT') fx = 'right';
    if (e.direction === 'FORWARD') fx = 'top';
    if (e.direction === 'BACKWARD') fx = 'bottom';
    // 右上  0.5 < x < 0.9  , 0.5 < y < 0.9 
    if (0.5 < x && x < 0.9 && 0.5 < y && y < 0.9) {
      fx = 'topRight';
    }
    // 左上  -0.9 < x < -0.5  , 0.5 < y < 0.9 
    if (-0.9 < x && x < -0.5 && 0.5 < y && y < 0.9) {
      fx = 'leftTop';
    }
    // 右下  0.5 < x < 0.9  , -0.9 < y < -0.5 
    if (0.5 < x && x < 0.9 && -0.9 < y && y < -0.5) {
      fx = 'rightBottom';
    }
    // 左下  -0.9 < x < -0.5  , -0.9 < y < -0.5 
    if (-0.9 < x && x < -0.5 && -0.9 < y && y < -0.5) {
      fx = 'leftBottom';
    }
    // 判断按下的方向和上次按下的方向是否相同
    if (fx === joy.direction) return;
    let dq = joy8[fx] || [];
    let scdq = joy8[joy.direction] || [];
    // 移除上次的操作方向
    for (let i = 0; i < scdq.length; i++) {
      gba.keypad.keyboardHandler({
        keyCode: scdq[i],
        type: 'keyup',
        preventDefault: e.preventDefault
      })
    }
    // 按下本次的操作方向
    for (let i = 0; i < dq.length; i++) {
      gba.keypad.keyboardHandler({
        keyCode: dq[i],
        type: 'keydown',
        preventDefault: e.preventDefault
      })
    }
    joy.direction = fx; // 记录本次的操作方向
    return;
  }
  // 松开摇杆键
  const handleStop = function (e: any) {
    let dir = joy8[joy.direction] || []; // 上一次移动的方向0
    dir.forEach((it: any) => {
      gba.keypad.keyboardHandler({
        keyCode: it,
        type: 'keyup',
        preventDefault: e.preventDefault
      })
    })
    joy.direction = '';
  }
  return (
    <div id='gbagame' className={sty.body}>
      <div style={{ marginLeft: '0.7rem' }}>
        <Link to={'/reward'} style={{ fontSize: '0.4rem' }}>支持作者</Link>
        <br />
        <select style={{ width: '3rem' }} onChange={changeGame}>
          {Object.keys(games).map(it => <option key={it} value={it}>{it}</option>)}
        </select>
        <Joy leftFn={leftFn} leftCall={leftCall} handleMove={handleMove} handleStop={handleStop} />
      </div>
      <div className={sty.canvas}>
        <canvas id='gbacanvas' ref={ref} width={size.width} height={size.height}></canvas>
      </div>
      <div className={sty.btnABLayer}>
        <Button keycode={13} className={sty.btnSelect} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>start</Button>
        &nbsp;&nbsp;
        <Button keycode={220} className={sty.btnSelect} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>select</Button>
        <br />
        <br />
        <Button keycode={65} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>L</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button keycode={83} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>R</Button>
        <br />
        <Button keycode={88} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>B</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button keycode={90} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>A</Button>
      </div>
    </div>
  )
}

export default (Index);