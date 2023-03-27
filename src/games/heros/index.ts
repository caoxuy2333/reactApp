import { Heros } from '../interface';

export interface HerosType {
  [key: number]: Heros
}

// B，KB，MB，GB，TB，PB，EB，ZB，YB，BB
// 攻击 = 等级 * 基础攻击力
//英雄1  lv1 - 5秒伤
// lv2 10
// lv3 15
// lv4 20   
// hero2 lv1 22
// lv2 44
// lv3 66 
// hero3 lv1 40 
// hero4 lv1 74
const heros: HerosType = {
  1: {
    job: '1', // 职业
    power: '5', // 攻击力
    level: 0, // 等级
    potential: '1', // 成长潜力
    name: '豫山',
    alias: '鲁迅', // 别名
    levelUpMoney: 200,
  },
  2: {
    job: '1',
    power: '22',
    level: 0,
    name: '仲甫',
    alias: '陈独秀',
    levelUpMoney: 200,
  },
  3: {
    job: '1',
    power: '40',
    level: 0,
    name: '载之',
    alias: '孙中山',
    levelUpMoney: 200,
  },
  4: {
    job: '1',
    power: '74',
    level: 0,
    name: '广厦',
    alias: '康有为',
    levelUpMoney: 200,
  },
  5: {
    job: '1',
    power: '1',
    level: 0,
    name: '卓如',
    alias: '梁启超',
  },
  6: {
    job: '1',
    power: '1',
    level: 0,
    name: '渐甫',
    alias: '李鸿章',
  },
  7: {
    job: '1',
    power: '1',
    level: 0,
    name: '元抚',
    alias: '林则徐',
  },
  8: {
    job: '1',
    power: '1',
    level: 0,
    name: '长伯',
    alias: '吴三桂',
  },
  9: {
    job: '1',
    power: '1',
    level: 0,
    name: '明俨',
    alias: '郑成功',
  },
  10: {
    job: '1',
    power: '1',
    level: 0,
    name: '郑和',
    alias: '郑和',
  },
  11: {
    job: '1',
    power: '1',
    level: 0,
    name: '赵匡胤',
    alias: '赵匡胤',
  },
  12: {
    job: '1',
    power: '1',
    level: 0,
    name: '李渊',
    alias: '李渊',
  },
  13: {
    job: '1',
    power: '1',
    level: 0,
    name: '孙权',
    alias: '孙权',
  },
  14: {
    job: '1',
    power: '1',
    level: 0,
    name: '刘备',
    alias: '刘备',
  },
  15: {
    job: '1',
    power: '1',
    level: 0,
    name: '诸葛亮',
    alias: '诸葛亮',
  },
  16: {
    job: '1',
    power: '1',
    level: 0,
    name: '曹操',
    alias: '曹操',
  },
  17: {
    job: '1',
    power: '1',
    level: 0,
    name: '项羽',
    alias: '项羽',
  },
  18: {
    job: '1',
    power: '1',
    level: 0,
    name: '刘邦',
    alias: '刘邦',
  },
  19: {
    job: '1',
    power: '1',
    level: 0,
    name: '嬴政',
    alias: '嬴政',
  },
  20: {
    job: '1',
    power: '1',
    level: 0,
    name: '帝辛',
    alias: '帝辛',
  },
  21: {
    job: '1',
    power: '1',
    level: 0,
    name: '戎狄',
    alias: '戎狄',
  },
  22: {
    job: '1',
    power: '1',
    level: 0,
    name: '禹',
    alias: '禹',
  },
  24: {
    job: '1',
    power: '1',
    level: 0,
    name: '帝喾',
    alias: '帝喾',
  },
  25: {
    job: '1',
    power: '1',
    level: 0,
    name: '舜',
    alias: '舜',
  },
  26: {
    job: '1',
    power: '1',
    level: 0,
    name: '尧',
    alias: '尧',
  },
  27: {
    job: '1',
    power: '1',
    level: 0,
    name: '太昊',
    alias: '太昊',
  },
  28: {
    job: '1',
    power: '1',
    level: 0,
    name: '少昊',
    alias: '少昊',
  },
  29: {
    job: '1',
    power: '1',
    level: 0,
    name: '颛顼',
    alias: '颛顼',
  },
  30: {
    job: '1',
    power: '1',
    level: 0,
    name: '华胥',
    alias: '华胥',
  },
  31: {
    job: '1',
    power: '1',
    level: 0,
    name: '燧人氏',
    alias: '燧人氏',
  },
  32: {
    job: '1',
    power: '1',
    level: 0,
    name: '有巢氏',
    alias: '有巢氏',
  },
  33: {
    job: '1',
    power: '1',
    level: 0,
    name: '人皇氏',
    alias: '人皇氏',
  },
  34: {
    job: '1',
    power: '1',
    level: 0,
    name: '地皇氏',
    alias: '地皇氏',
  },
  35: {
    job: '1',
    power: '1',
    level: 0,
    name: '天皇氏',
    alias: '天皇氏',
  },
  36: {
    job: '1',
    power: '1',
    level: 0,
    name: '祝融',
    alias: '祝融',
  },
  37: {
    job: '1',
    power: '1',
    level: 0,
    name: '太一神',
    alias: '太一神',
  },
  38: {
    job: '1',
    power: '1',
    level: 0,
    name: '共工',
    alias: '共工',
  },
  39: {
    job: '1',
    power: '1',
    level: 0,
    name: '皇帝',
    alias: '皇帝',
  },
  40: {
    job: '1',
    power: '1',
    level: 0,
    name: '炎帝',
    alias: '炎帝',
  },
  41: {
    job: '1',
    power: '1',
    level: 0,
    name: '蚩尤',
    alias: '蚩尤',
  },
  42: {
    job: '1',
    power: '1',
    level: 0,
    name: '女希氏',
    alias: '女希氏',
  },
  43: {
    job: '1',
    power: '1',
    level: 0,
    name: '伏羲',
    alias: '伏羲',
  },
  44: {
    job: '1',
    power: '1',
    level: 0,
    name: '帝俊',
    alias: '帝俊',
  },
  45: {
    job: '1',
    power: '1',
    level: 0,
    name: '盘古',
    alias: '盘古',
  },
};


export default class hero {

  name: string; // 名字
  power: string; // 攻击力

  level: number; // 等级
  index: number; // 英雄下标
  ttkHeroIndex: Array<number>; // 可以攻击的英雄下标
  // openHero: Array<String>; // 展示的英雄列表
  soureHero: HerosType;

  constructor(index: number) {
    // TODO 初始化英雄下标, 从localStroe获取

    this.index = index;
    this.name = heros[index].name;
    this.power = heros[index].power;
    this.level = heros[index].level;
    this.ttkHeroIndex = [1,2];
    this.soureHero = heros;
  }
  get allHero() {
    return Object.values(heros).map(it => it.name)
  }
  get levelUpMoney() {
    return this.level * 100 * 1.2;
  }
  // 仅展示未解锁下三个英雄
  get nextHero() {
    const h = Object.keys(this.soureHero).reduce((res, item: any, i)=>{
      if(i > 3) return res;
      res.push(Object.assign(this.soureHero[item], {id: item}));
      return res;
    }, [])
    return h;
  }
  // 可攻击的英雄列表
  get ttkHero(){ 
    return this.ttkHeroIndex.map(it=>this.soureHero[it]);
  }
  // 升级英雄
  levelUp(id: any) {
    let d = JSON.parse(JSON.stringify(this.soureHero))  ;
    d[id].level = d[id].level + 1;
    this.soureHero  = d;
    
    // this.level = this.level + 1;
  }
  // 切换英雄
  switchHero() {

  }
  getMonster() {
  }
}
