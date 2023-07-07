import * as React from "react";
import sty from './index.less';
import wx5 from 'assets/wx-5.jpg';
import zfb5 from 'assets/zfb-5.jpg';
import reward from 'assets/reward.jpg';

const Index = () => {
  return (
    <div className={sty.reward}>
      <h3>作者留言: </h3>
      <p>
        感谢各位玩家的游玩
      </p>
      <p>
        本站是一个非商业性网站, 没有套路, 没有广告, 非常干净纯粹的一个网站, 本站追求舒适的游玩环境, 祝您玩的愉快~
      </p>
      <h3>赞赏: </h3>
      <p>创作不易, 网站也需要生存, 各位帅哥美女, 有钱的捧个钱场, 没钱的捧个人场, 谢谢您的支持~ </p>
      <div className={sty.money}> 
        <p>
          微信:
          <img className={sty.img} src={reward} alt="" />
        </p>
      </div>
      <h4>联系作者: </h4>
      <p>
        <a href="mailto:120170535@qq.com">120170535@qq.com</a>
      </p>
    </div>
  )
}

export default Index;
