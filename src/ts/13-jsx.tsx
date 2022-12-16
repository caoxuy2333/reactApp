import * as React from 'react';
// 使用装饰器 增加Form对象

let Form = function (fun: Function) {
  console.log('funccccccccccc', fun, fun.prototype);
  fun.prototype.form = new FormData();
  return function () {

  }
  // fun();
  // return function (a: object, b: string, d: PropertyDescriptor) {

  // }
}

// @Form()
class Index extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('ffffffffffffffffffffformdata=>', props);
    console.log(this);
    console.log(props);
  }

  render() {
    return (
      <div>1</div>
    )
  }
} 

let View = function () {
  return <Index />
}

export default Index;