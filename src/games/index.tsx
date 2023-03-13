import * as React from 'react';
import sty from './index.less'

const Index = function () {
  const [count, setCount] = React.useState(0);
  const [left, setLeft] = React.useState(1);
  const [right, setRight] = React.useState(1);
  React.useEffect(() => {
    console.log(left, right)
    setCount(left * right)
  }, [left, right])

  const onLeft = async function () {
    const res: any = await new Promise((resolve) => {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 100);
        resolve(random)
      }, 200)
    }).catch(err => { })
    setLeft(res);
  }

  const onRight = async function () {
    const res: any = await new Promise((resolve) => {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 100);
        resolve(random)
      }, 200)
    }).catch(err => { })
    setRight(res);
  }
  console.log(sty)
  return (
    <div>
      <button onClick={onLeft}>增加left</button>
      <button onClick={onRight}>增加right</button>
      <div className={sty.red}>
        乘数 {left} × {right} = {count}
      </div>
    </div>
  )
}

export default Index;