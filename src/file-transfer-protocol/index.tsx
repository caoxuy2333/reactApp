import * as React from 'react';
import SparkMD5 from 'spark-md5';

const spark = new SparkMD5();
const splitNum = 10; // 一共切割的段数  *(作为除数, 应取2, 10, 20, 100的数字较好 )

// 将每段切割的文件的md5上传到后端, 每次上传是判断是否有md5以判断是否上传
// 切片上传 + 断点续传
// 先切割文件, 再发起异步请求, 再将切割后的文件转码base64, 再生成md5 
const Index: React.FC = function (): JSX.Element {
  const onChange = async function (event: any) {
    const f = event.target.files[0];
    let size = f.size / splitNum; // 每段的文件大小
    for (let i = 0; i < splitNum; i++) {
      let t = f.slice(i * size, (i + 1) * size)
      const reader = new FileReader();
      reader.readAsDataURL(t);//发起异步请求
      reader.onload = function (readRes) {
        console.log('加载完成', readRes.target.result)
        let m = readRes.target.result
        spark.appendBinary(m);
        let s = spark.end()
        console.log('md5', s);
      }
    }
  }
  return (
    <div>
      断点续传测试:
      <input type="file" onChange={onChange} />
    </div>
  )
}

export default Index;