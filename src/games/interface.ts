// 英雄对象
// 造成伤害 : level * 0.4 + potential * 0.6 (等级 * 潜力)
export interface Heros {
  job: string; // 职业
  img?: string; // 贴图
  power: string; // 攻击力
  potential?: string; // 成长潜力
  level: number; // 等级
  name: string; // 名字
  alias?: string; // 别名
  levelUpMoney? :any; //升级需要的金币
}

// 小怪兽对象
export interface Monster{
  hp: string; // 血量
  img: string; // 贴图
  boss: boolean; // 是否boss
  name: string; // 名字
  money?: number; // 掉落金钱
}

