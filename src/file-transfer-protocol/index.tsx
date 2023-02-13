import * as React from 'react';
import SparkMD5 from 'spark-md5';

const spark = new SparkMD5();

// 切片上传 + 断点续传
// 先切割文件, 再发起异步请求, 再将切割后的文件转码base64, 再生成md5 
const Index: React.FC = function (): JSX.Element {
  console.log(spark);
  const onChange = function (event: any) {
    const f = event.target.files[0];
    let t = f.slice(0, 1000)
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
  return (
    <div>
      断点续传测试: 
      <input type="file" onChange={onChange} />
    </div>
  )
}

export default Index;