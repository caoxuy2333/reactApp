import * as React from 'react';
import { useState } from 'react';
import SparkMD5 from 'spark-md5';
import fly from 'flyio'

// 接口返回参数
interface partRes {
  current: string; // 返回当前上传到第几段
  partEnd: boolean; // 是否完成合并
}

// 切片片段
interface partFileProps {
  current?: number; // 当前段数
  fileMd5?: string; // 完整文件的md5
  fileName?: string; // 文件名
  partFile?: Blob; // 剪切的文件片段
  file: File; // 完整文件
  splitNum: number; // 切割的段数
}

const ws = new WebSocket('ws://localhost:8081')

ws.onopen = function (event: any) {
  // 监听消息
  ws.onmessage = function (e1: any) {
    let data = e1.data;
    data = JSON.parse(data);
    console.log(data);
  }
  // 监听Socket的关闭
  ws.onclose = function (e2: any) {
    console.log('Client notified socket has closed', e2);
  }
}

const spark = new SparkMD5();
const splitNum = 100; // 一共切割的段数  *(作为除数, 应取2, 10, 20, 100的数字较好 )

// 将每段切割的文件的md5上传到后端, 每段上传后返回断点位置
const Index: React.FC = function (): JSX.Element {
  const [range, setRange] = useState(0)
  // 上传函数
  const partUpload = async function (part: partFileProps, callback: Function): Promise<boolean> {
    let index = part.current || 0;
    let fileMd5 = part.fileMd5;
    let fileName = part.file.name;
    let size = part.file.size / part.splitNum;
    let partFile = part.file.slice(index * size, (index + 1) * size)
    const res: partRes = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(partFile);//发起异步请求
      reader.onload = function (readRes) {
        let result = readRes.target.result;
        spark.appendBinary(result);
        let partMd5 = spark.end()
        if (index === 0) fileMd5 = partMd5;
        const formData = new FormData();
        formData.append('current', index.toString());
        formData.append('count', part.splitNum.toString());
        formData.append('file', partFile);
        formData.append('fileName', fileName);
        formData.append('fileMd5', fileMd5);
        formData.append('partMd5', partMd5);
        const headers = { 'Content-Type': 'multipart/form-data' };
        fly.post('socket/uploadFilePart', formData, { headers }).then(function (data: partRes) {
          console.log(data);
          resolve(data);
        })
      }
    })
    if (callback) {
      callback({ ...res, current: parseInt(res.current) + 1 });
    }
    if (res.partEnd === false) {
      let curs = parseInt(res.current) + 1; // 当前切片数+1
      return await partUpload({
        current: curs,
        fileMd5,
        fileName,
        splitNum: part.splitNum,
        file: part.file
      }, callback)
    }
    return res.partEnd;
  }

  const onChange = async function (event: any) {
    const file = event.target.files[0];
    // 传入文件 和 切割的段数 即可;
    partUpload({ file, splitNum }, (res: partRes) => {
      // 每个片段上传后的回调
      const percent = parseInt(res.current) * 100 / splitNum;
      setRange(percent)
    })
  }

  const concatFile = function () {
    fly.post('socket/concatFilePart', { md5: '1111' })
  }
  return (
    <div>
      断点续传测试:
      <input type="file" onChange={onChange} />
      <div>
        <button onClick={concatFile}>合并文件</button>
      </div>
      <input type="range" value={range} />
    </div>
  )
}

export default Index;