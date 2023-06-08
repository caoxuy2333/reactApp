import React, { useEffect, useLayoutEffect, useRef } from 'react';
import nes from './comp/index';
import fly from 'flyio'

let n = new nes();
let p = require('./nes-file/maro.nes')

const Index = function (props: any) {
  let ref: React.RefObject<any> = useRef();
  console.log('ref', ref);
  fly.get(p).then((res: any) => {
    console.log('res', res)
    n.loadRom(res.data);
    // n.start(); // 死循环, 需解决
  }).catch((err: any) => {
    console.log(err);
  });

  useLayoutEffect(()=>{
    console.log(ref);
    let canvas = ref.current.getContext('2d');
    canvas.getImageData(0, 0, 256, 240);
    // canvas.resetCanvas();

    // canvas.putImageData(this.canvasImageData, 0, 0);
    // new nes();
  },[])

  return (
    <div>
      <canvas ref={ref} style={{ background: '#e9e9e9' }} width={600} height={600}></canvas>
    </div>
  )
}

export default (Index);