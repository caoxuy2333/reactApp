import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Joystick } from 'react-joystick-component';
import { Link } from 'react-router-dom';
import nes from './comp/index';
import sty from './index.less';

let n = new nes();
let p = '/fcFile/(W) Super Mario Bros.nes'; // 阿里云oss文件
let canvas: any;
let canvasImageData: any;

interface games {
  [key: string]: string
}

let games: games = {
  '超级马里奥1 (W) Super Mario Bros': '(W) Super Mario Bros.nes',
  '魂斗罗1(U)30': 'Contra1(U)30.nes',
  '纽约大拳猫': 'RockinCats.nes',
  '赤影战士 Kage': 'Kage.nes',
  '中国象棋': 'Zhong Guo Xiang Qi.nes',
  '吃豆精灵 (J) (V1.1) Pac-Man': 'Pac-Man.nes',
  '沙罗曼蛇 (U) Life Force': 'Life Force.nes',
  '1943 (U) 1943 - The Battle of Midway': '1943.nes',
  '脱狱 Cross Fire (J)': 'Cross Fire (J).nes',
  '撞球咖啡馆 Shufflepuck Cafe': 'Shufflepuck Cafe.nes',
  '功夫 (J) (V1.2) Yie Ar Kung-Fu': '(J) (V1.2) Yie Ar Kung-Fu.nes',
  '坦克 (Ch) Missile Tank': '(Ch) Missile Tank.nes',
  '坦克 (Ch) Tank 1990': '(Ch) Tank 1990.nes',
  '坦克 (J) Battle City': '(J) Battle City.nes',
  '超级马里奥2 (W) Super Mario Bros. 3 (U)': 'Super Mario Bros. 3 (U) (PRG1).nes',
  '马里奥拆屋工 (W) Wrecking Crew': '(W) Wrecking Crew.nes',
  '马里奥医生 Dr. Mario (JU)': 'Dr. Mario (JU).nes',
  '双截龙1 Double Dragon1': 'Double Dragon1.nes',
  '双截龙2 Double Dragon2': 'Double Dragon2.nes',
  '双截龙3 Double Dragon3': 'Double Dragon3.nes',
  '双截龙4 Double Dragon4': 'Double Dragon4.nes',
  '淘金者(汉化)': 'TaoJinZhe.nes',
  '淘金者(J)': 'Championship Lode Runner (J).nes',
  '俄罗斯方块LJ65': 'lj65.nes',
  '俄罗斯方块Tetris(U)': 'Tetris (U).nes',
  '俄罗斯方块Tetris 2(U)': 'Tetris 2 (U).nes',
  'F1赛车 (J) F-1 Race': '(J) F-1 Race.nes',
  '摩托车大赛 (JU) (PRG0) Mach Rider': '(JU) (PRG0) Mach Rider.nes',
  '越野机车 (JU) Excitebike': '(JU) Excitebike.nes',
  '火箭车 (J) Road Fighter': '(J) Road Fighter.nes',
  '五子棋 (5) 日版': '5.nes',
  'Concentration Room': 'croom.nes',
  '俄罗斯方块 (Tengen) Tetris': '(Tengen) Tetris.nes',
  '兵蜂1 (J) TwinBee': '(J) TwinBee.nes',
  '冒险岛1 (J) Takahashi Meijin no Bouken Shima': '(J) Takahashi Meijin no Bouken Shima.nes',
  '打砖块1 (J) Arkanoid': '(J) Arkanoid.nes',
  'Zelda II': 'Zelda II - The Adventure of Link (U).nes',
  // 不可用游戏 ↓
  // '忍者龙剑传1 (PC10) Ninja Gaiden': 'Ninja_Gaiden1.nes',
  // '忍者龙剑传2 (PC10) Ninja Gaiden II - The Dark Sword of Chaos': 'Ninja_Gaiden2.nes',
  // '忍者龙剑传3 (PC10) Ninja Gaiden III - The Ancient Ship of Doom': 'Ninja_Gaiden3.nes',
  // '小蜜蜂 (J) Galaxian': '(J) Galaxian.nes',
  // '赤色要塞 (KC) Jackal': 'Jackal.nes',
  // '花式撞球 (U) Side Pocket': 'Side Pocket.nes',
  // '彩虹岛 (U) Rainbow Islands': 'Rainbow Islands.nes',
  // '快打旋风 (U) Mighty Final Fight': 'Mighty Final Fight.nes',
  // '七宝奇谋1 (J) Goonies, The': '(J) Goonies, The.nes',
  // '南极大冒险 (J) Antarctic Adventure': '(J) Antarctic Adventure.nes',
  // '叮当1 (J) Dig Dug': '(J) Dig Dug.nes',
  // '影之传说 (J) Kage no Densetsu': '(J) Kage no Densetsu.nes',
  // 'fire': 'fire.nes'

}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  keycode: number;
}

let isPc = navigator.userAgent.includes('Windows');

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button style={{ fontSize: '1.5rem' }} {...props}>
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

// 播放声音
window.AudioContext = window.AudioContext;
let audio = new AudioContext();

let intToFloatSample = function (value: any) {
  return value / 32767; // from -32767..32768 to -1..1 range
};

n.ui.writeAudio = function (samples: any) {
  let buffer = audio.createBuffer(2, samples.length, audio.sampleRate);
  let channelLeft = buffer.getChannelData(0);
  let channelRight = buffer.getChannelData(1);
  let j = 0;
  for (let i = 0; i < samples.length; i += 2) {
    channelLeft[j] = intToFloatSample(samples[i]);
    channelRight[j] = intToFloatSample(samples[i + 1]);
    j++;
  }
  let source = audio.createBufferSource();
  source.buffer = buffer;
  source.connect(audio.destination); // Output to sound
  source.start();
}

// 摇杆 属性
let joy = {
  direction: '', // 方向
  keyCode: -1, // 操作方向 对应编码
};

const Index = function () {
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
    
    // windows系统 监听键盘事件
    if (isPc) {
      let keyeumn: any = {
        87: 87, // 上
        83: 83, // 下
        65: 65, // 左
        68: 68, // 右
        74: 75, // B
        75: 74, // A
        49: 13, // start
        50: 17 // select
      }
      document.onkeydown = function (k: any) {
        if ([87, 65, 83, 68, 74, 75, 85, 73, 49, 50].includes(k.keyCode)) {
          n.keyboard.keyDown({ keyCode: +keyeumn[k.keyCode] }); 
        }
      }
      document.onkeyup = function (k: any) {
        if ([87, 65, 83, 68, 74, 75, 85, 73, 49, 50].includes(k.keyCode)) {
          n.keyboard.keyUp({ keyCode: +keyeumn[k.keyCode] });
        }
      }
    }
    return function(){
      n.stop();
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

  // 移动摇杆
  // TODO bug: 不能向右下射击
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
  // 加载游戏
  const changeGame = async function (e: any) {
    let v: string = e.target.value;
    if (!games[v]) return;
    let p = '/fcFile/' + games[v]; // 阿里云oss文件
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
  }
  let iswx = navigator.userAgent.indexOf('MicroMessenger') > -1;
  return (
    <div id='fcgame' className={sty.body}>
      <div style={{ margin: '0 1rem' }}>
        
        {isPc ? <div className={sty.tip}>
          操作说明: <br />上下左右: WSAD <br />AB: KJ <br />START: 数字键1 <br />SELECT: 数字键2
        </div> : ''}
        <select  style={{ width: '5rem' }} onChange={changeGame}>
          {Object.keys(games).map(it => <option key={it} value={it}>{it}</option>)}
        </select>
        {iswx && <Link replace={true} to={'/'} style={{ fontSize: '0.4rem', marginLeft: '0.4rem' }}>后退</Link>}
        <br />
        <br />
        <br /> 
        <Joystick size={115} sticky={false} move={handleMove} stop={handleStop}></Joystick>
      </div>
      <canvas ref={ref} width={256} height={240}></canvas>
      <div>
        <Button keycode={13} style={{ fontSize: '0.8rem' }} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>start</Button>
        <Button keycode={17} style={{ fontSize: '0.8rem' }} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>select</Button>
        <br />
        <br />
        <br />
        <Button keycode={74} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>A</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button keycode={75} className={sty.btnAB} onMouseDown={leftFn} onMouseUp={leftCall} onTouchStart={leftFn} onTouchEnd={leftCall}>B</Button>
      </div>
    </div>
  )
}

export default (Index);