import fly from 'flyio';
 
let token = '';

//添加请求拦截器
fly.interceptors.request.use((config: any) => { 
  //可以通过promise.reject／resolve直接中止请求
  //promise.resolve("fake data")
  console.log('拦截请求')
  config.headers['token'] = token;
  return config;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response: any, promise: any) => {
  //只将请求结果的data字段返回
  console.log(response, promise)
  if(response.status === 200) promise.reject(-1);
  return response.data
}, (err: any) => {
  //发生网络错误后会走到这里
  //promise.resolve("ssss")
  console.log(err);
})


 