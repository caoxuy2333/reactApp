import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Joystick } from 'react-joystick-component';
import GameBoyAdvance from './comp/gba';
import loadRom from './xhr';
import sty from './index.less';

let n ;
// let p = require('./nes-file/(W) Super Mario Bros.nes')
let canvas: any;
let canvasImageData: any;

interface games {
  [key: string]: string
}

let games: games = {
  '3': '(W) Super Mario Bros.nes',
  '1': '2'
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
	let dead = document.getElementById('loader');
	// dead.value = '';
	// let load = document.getElementById('select');
	// load.textContent = '加载中...';
	// load.removeAttribute('onclick');
	// let pause = document.getElementById('pause');
	// pause.textContent = "暂停";
	gba.loadRomFromFile(file, function(result:any) {
		if (result) {
			// for (let i = 0; i < runCommands.length; ++i) {
			// 	runCommands[i]();
			// }
			// runCommands = [];
			// fadeOut('preload', 'ingame');
			// fadeOut('instructions', null, true);
			gba.runStable();
		} else {
			// load.textContent = 'FAILED';
			// setTimeout(function() {
				// load.textContent = '读取游戏';
				// load.onclick = function() {
				// 	document.getElementById('loader').click();
				// }
			// }, 3000);
		}
	});
}

function reset() {
	gba.pause();
	gba.reset();
	let load = document.getElementById('select');
	load.textContent = '读取游戏';
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
	load.onclick = function() {
		document.getElementById('loader').click();
	}
	// fadeOut('ingame', 'preload');
}

function lcdFade(context:any, target:any, callback:any) {
	let i = 0;
	let drawInterval = setInterval(function() {
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
  // let xhr = new XMLHttpRequest();
  // xhr.open('GET', p, true);
  // xhr.overrideMimeType('text/plain; charset=x-user-defined');
  // xhr.onreadystatechange = function (e) {
  //   if (this.readyState == 4 && this.status == 200) {
  //     let binStr = this.responseText;
  //     // n.loadRom(binStr);
  //     // n.start();
  //   }
  // };
  // xhr.send();
  useLayoutEffect(() => {
    canvas = ref.current.getContext('2d');
    canvasImageData = canvas.getImageData(0, 0, 256, 240);
    canvas.fillStyle = 'black';
    canvas.fillRect(0, 0, 256, 240);
    for (let i = 3; i < canvasImageData.data.length - 3; i += 4) {
      canvasImageData.data[i] = 0xFF;
    }

    let f = async ()=>{
      if (gba && FileReader) {
        let canvas = document.getElementById('gbacanvas');
        gba.setCanvas(canvas);
    
        gba.logLevel = gba.LOG_ERROR;
    
        let p = await require('./bios.bin');
        loadRom(p, function(bios:any) {
          gba.setBios(bios);
        });
    
        if (!gba.audio.context) {
          // Remove the sound box if sound isn't available
          let soundbox = document.getElementById('sound');
          soundbox.parentElement.removeChild(soundbox);
        }
    
        if (window.navigator.appName == 'Microsoft Internet Explorer') {
          // Remove the pixelated option if it doesn't work
          let pixelatedBox = document.getElementById('pixelated');
          pixelatedBox.parentElement.removeChild(pixelatedBox);
        }
      } else {
        let dead = document.getElementById('controls');
        dead.parentElement.removeChild(dead);
      }
    }
      f();
    // window.onload = async function() {
      
    // }
    

  }, [])

  // 加载游戏
  const changeGame = async function (e: any) {
    // let v: string = e.target.value;
    let p = await require(`./1100260.gba`);
// fetch(p).then(r=>{
// console.log(r,'fetch file');})

        // loadRom(p, (r:any)=>{
        // console.log(r)
        // });
// let f = new File(p, 'a.gba', {type: 'text/plain'})
    console.log(p);


    loadRom(p, (r:any)=>{
      console.log(r)
      run(r);
      });

    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', p, true);
    // xhr.overrideMimeType('text/plain; charset=x-user-defined');
    // xhr.onreadystatechange = function (e) {
    //   if (this.readyState == 4 && this.status == 200) {
    //     let binStr = this.responseText;
    //     console.log(binStr);
    //     // n.loadRom(binStr);
    //     // n.start();
    //   }
    // };
    // xhr.send();
  }






  // 按下按钮
  const leftFn = function (e: any) {
    e.preventDefault();
    let keyCode = e.target.attributes['keycode'].value;
    // n.keyboard.keyDown({ keyCode: +keyCode });
  }

  // 松开按钮
  const leftCall = function (e: any) {
    e.preventDefault();
    let keyCode = e.target.attributes['keycode'].value;
    // n.keyboard.keyUp({ keyCode: +keyCode });
  }

  // 移动摇杆
  // TODO bug: 不能向右下射击
  const handleMove = function (e: any) {
    if (joy.direction !== e.direction) {
      // if (joy.keyCode) n.keyboard.keyUp({ keyCode: joy.keyCode });
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
      // n.keyboard.keyDown({ keyCode: joy.keyCode });
    }
    return;
  }
  // 松开摇杆键
  const handleStop = function (e: any) {
    // n.keyboard.keyUp({ keyCode: joy.keyCode });
    joy.direction = '';
    joy.keyCode = -1;
  }
  return (
    <div id='gbagame' className={sty.body}>
      <div style={{ margin: '0 1rem' }}>
        <select  style={{ width: '5rem' }} onChange={changeGame}>
          {Object.keys(games).map(it => <option key={it} value={it}>{it}</option>)}
        </select>
        <br />
        <br />
        <br /> 
        <Joystick size={135} sticky={false} move={handleMove} stop={handleStop}></Joystick>
      </div>
      <canvas id='gbacanvas' ref={ref} width={256} height={240}></canvas>
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