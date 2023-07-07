import * as React from "react";
import wx5 from 'assets/wx-5.jpg';

const Index = () => {
  return (
    <div>
      <h3>作者留言: </h3>
      <p>
        感谢各位玩家的游玩
      </p>
      <p>
        本站是一个非商业性网站, 没有广告，没有光污染, 非常纯粹的一个网站, 本站追求舒适的游玩环境, 祝您玩的愉快~
      </p>
      <h3>赞赏: </h3>
      <p>创作不易, 各位帅哥美女, 有钱的捧个钱场, 没钱的捧个人场, 用于支持网站运营, 谢谢您的支持~ </p>
      <p>
        支付宝:
        <img style={{ width: '5rem' }} src={wx5} alt="" />
      </p>
      <p>
        微信:
        <img style={{ width: '5rem' }} src={wx5} alt="" />
      </p>
      <p></p>
    </div>
  )
}

export default Index;
