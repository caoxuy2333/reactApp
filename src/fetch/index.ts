interface request {
  headers?: object;
  method?: 'post' | 'get' | 'delete'
}

interface response {
  resultCode: string;
  resultData: any;
  resultMessage: string;
}

let xhr = async function (url: string, init: RequestInit) {
  console.log(init);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json;charset=UTF-8')
  init.method = 'post';
  init.headers = headers;
  init.body = JSON.stringify(init.body)
  let res: any = await fetch(url, init).catch(err => console.log(err))
  if (res.resultCode !== '0') console.warn('模拟接口错误: ', res.resultMessage)
  // alert(res.resultMessage)
  return res;
}

export { xhr };