import { Heros } from '../interface';
import _ from 'lodash';

export interface HerosType {
  [key: number]: Heros
}

// B，KB，MB，GB，TB，PB，EB，ZB，YB，BB
// 攻击 = 等级 * 基础攻击力 
const heros: HerosType = {
  1: {
    job: '1', // 职业
    power: '5', // 攻击力
    level: 0, // 等级
    potential: '1', // 成长潜力
    name: '豫山',
    alias: '鲁迅', // 别名
    levelUpMoney: 200,
    img: 'h001.png',
  },
  2: {
    job: '1',
    power: '22',
    level: 0,
    name: '仲甫',
    alias: '陈独秀',
    levelUpMoney: 300,
    img: 'h002.png',
  },
  3: {
    job: '1',
    power: '40',
    level: 0,
    name: '载之',
    alias: '孙中山',
    levelUpMoney: 400,
    img: 'h003.png',
  },
  4: {
    job: '1',
    power: '74',
    level: 0,
    name: '广厦',
    alias: '康有为',
    levelUpMoney: 500,
    img: 'h004.png',
  },
  5: {
    job: '1',
    power: '143',
    level: 0,
    name: '卓如',
    alias: '梁启超',
    levelUpMoney: 700,
    img: 'h005.png',
  },
  6: {
    job: '1',
    power: '199',
    level: 0,
    name: '渐甫',
    alias: '李鸿章',
    levelUpMoney: 900,
    img: 'h006.png',
  },
  7: {
    job: '1',
    power: '244',
    level: 0,
    name: '元抚',
    alias: '林则徐',
    levelUpMoney: 1500,
    img: 'h007.png',
  },
  8: {
    job: '1',
    power: '299',
    level: 0,
    name: '长伯',
    alias: '吴三桂',
    levelUpMoney: 2500,
    img: 'h008.png',
  },
  9: {
    job: '1',
    power: '366',
    level: 0,
    name: '明俨',
    alias: '郑成功',
    levelUpMoney: 4500,
    img: 'h009.png',
  },
  10: {
    job: '1',
    power: '411',
    level: 0,
    name: '郑和',
    alias: '郑和',
    levelUpMoney: 7500,
    img: 'h010.png',
  },
  11: {
    job: '1',
    power: '544',
    level: 0,
    name: '赵匡胤',
    alias: '赵匡胤',
    levelUpMoney: 9500,
    img: 'h011.png',
  },
  12: {
    job: '1',
    power: '688',
    level: 0,
    name: '李渊',
    alias: '李渊',
    levelUpMoney: 12500,
    img: 'h012.png',
  },
  13: {
    job: '1',
    power: '800',
    level: 0,
    name: '孙权',
    alias: '孙权',
    levelUpMoney: 14500,
    img: 'h013.png',
  },
  14: {
    job: '1',
    power: '944',
    level: 0,
    name: '刘备',
    alias: '刘备',
    levelUpMoney: 17500,
    img: 'h014.png',
  },
  15: {
    job: '1',
    power: '1122',
    level: 0,
    name: '诸葛亮',
    alias: '诸葛亮',
    levelUpMoney: 22500,
    img: 'h015.png',
  },
  16: {
    job: '1',
    power: '1355',
    level: 0,
    name: '曹操',
    alias: '曹操',
    levelUpMoney: 29500,
    img: 'h016.png',
  },
  17: {
    job: '1',
    power: '1488',
    level: 0,
    name: '项羽',
    alias: '项羽',
    levelUpMoney: 33500,
    img: 'h017.png',
  },
  18: {
    job: '1',
    power: '1600',
    level: 0,
    name: '刘邦',
    alias: '刘邦',
    levelUpMoney: 38500,
    img: 'h018.png',
  },
  19: {
    job: '1',
    power: '1800',
    level: 0,
    name: '嬴政',
    alias: '嬴政',
    levelUpMoney: 50500,
    img: 'h019.png',
  },
  20: {
    job: '1',
    power: '2001',
    level: 0,
    name: '帝辛',
    alias: '帝辛',
    levelUpMoney: 62500,
    img: 'h020.png',
  },
  21: {
    job: '1',
    power: '2334',
    level: 0,
    name: '戎狄',
    alias: '戎狄',
    levelUpMoney: 82500,
    img: 'h021.png',
  },
  22: {
    job: '1',
    power: '2666',
    level: 0,
    name: '禹',
    alias: '禹',
    levelUpMoney: 122500,
    img: 'h022.png',
  },
  23: {
    job: '1',
    power: '3000',
    level: 0,
    name: '帝喾',
    alias: '帝喾',
    levelUpMoney: 142500,
    img: 'h023.png',
  },
  24: {
    job: '1',
    power: '3888',
    level: 0,
    name: '舜',
    alias: '舜',
    levelUpMoney: 182500,
    img: 'h024.png',
  },
  25: {
    job: '1',
    power: '4433',
    level: 0,
    name: '尧',
    alias: '尧',
    levelUpMoney: 222500,
    img: 'h025.png',
  },
  26: {
    job: '1',
    power: '5544',
    level: 0,
    name: '太昊',
    alias: '太昊',
    levelUpMoney: 32500,
    img: 'h026.png',
  },
  27: {
    job: '1',
    power: '6888',
    level: 0,
    name: '少昊',
    alias: '少昊',
    levelUpMoney: 52500,
    img: 'h027.png',
  },
  28: {
    job: '1',
    power: '1',
    level: 0,
    name: '颛顼',
    alias: '颛顼',
    img: 'h028.png',
  },
  29: {
    job: '1',
    power: '1',
    level: 0,
    name: '华胥',
    alias: '华胥',
    img: 'h029.png',
  },
  30: {
    job: '1',
    power: '1',
    level: 0,
    name: '燧人氏',
    alias: '燧人氏',
    img: 'h030.png',
  },
  31: {
    job: '1',
    power: '1',
    level: 0,
    name: '有巢氏',
    alias: '有巢氏',
    img: 'h031.png',
  },
  32: {
    job: '1',
    power: '1',
    level: 0,
    name: '人皇氏',
    alias: '人皇氏',
    img: 'h032.png',
  },
  33: {
    job: '1',
    power: '1',
    level: 0,
    name: '地皇氏',
    alias: '地皇氏',
    img: 'h033.png',
  },
  34: {
    job: '1',
    power: '1',
    level: 0,
    name: '天皇氏',
    alias: '天皇氏',
    img: 'h034.png',
  },
  35: {
    job: '1',
    power: '1',
    level: 0,
    name: '祝融',
    alias: '祝融',
    img: 'h035.png',
  },
  36: {
    job: '1',
    power: '1',
    level: 0,
    name: '太一神',
    alias: '太一神',
    img: 'h036.png',
  },
  37: {
    job: '1',
    power: '1',
    level: 0,
    name: '共工',
    alias: '共工',
    img: 'h037.png',
  },
  38: {
    job: '1',
    power: '1',
    level: 0,
    name: '皇帝',
    alias: '皇帝',
    img: 'h038.png',
  },
  39: {
    job: '1',
    power: '1',
    level: 0,
    name: '炎帝',
    alias: '炎帝',
    img: 'h039.png',
  },
  40: {
    job: '1',
    power: '1',
    level: 0,
    name: '蚩尤',
    alias: '蚩尤',
    img: 'h040.png',
  },
  41: {
    job: '1',
    power: '1',
    level: 0,
    name: '女希氏',
    alias: '女希氏',
    img: 'h041.png',
  },
  42: {
    job: '1',
    power: '1',
    level: 0,
    name: '伏羲',
    alias: '伏羲',
    img: 'h042.png',
  },
  43: {
    job: '1',
    power: '1',
    level: 0,
    name: '帝俊',
    alias: '帝俊',
    img: 'h043.png',
  },
  44: {
    job: '1',
    power: '1',
    level: 0,
    name: '盘古',
    alias: '盘古',
    img: 'h044.png',
  },
};


export default class hero {
  index: number; // 英雄下标  
  ttkHeroIndex: Array<number>; // 可以攻击的英雄下标 
  soureHero: HerosType; // 常量, 所有英雄

  constructor(index: number) {
    // TODO 初始化英雄下标, 从localStroe获取 
    this.index = index;
    this.ttkHeroIndex = [1];
    this.soureHero = heros;
  }
  // 展示的英雄列表
  get nextHero() {
    const h = Object.keys(this.soureHero).reduce((res, item: any, i) => {
      if (i > _.max(this.ttkHeroIndex)) return res;
      res.push(Object.assign(this.soureHero[item], { id: item }));
      return res;
    }, [])
    return h;
  }
  // 升级英雄
  levelUp(id: any) {
    id = parseInt(id);
    let d = JSON.parse(JSON.stringify(this.soureHero));
    d[id].level = d[id].level + 1;
    this.soureHero = d;
    if (!this.ttkHeroIndex.includes(id)) {
      this.ttkHeroIndex = this.ttkHeroIndex.concat(id)
    }
  }
}
