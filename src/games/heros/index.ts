import { Heros } from '../interface';

export interface HerosType {
  [key: number]: Heros
}

const heros: HerosType = {
  1: {
    job: '1', // 职业
    power: '1', // 攻击力
    level: 1, // 等级
    name: '森林使者',
  },
  2: {
    job: '1',
    power: '1',
    level: 1,
    name: '骑兵'
  },
  3: {
    job: '1',
    power: '1',
    level: 1,
    name: '黑暗骑士'
  },
  4: {
    job: '1',
    power: '1',
    level: 1,
    name: '光能使者'
  },
  5: {
    job: '1',
    power: '1',
    level: 1,
    name: '白魔法师'
  },
}

export default class monster {

  name: string; // 名字
  power: string; // 攻击力
  level: number; // 等级
  index: number; // 英雄下标

  constructor(index: number) {
    // TODO 初始化英雄下标, 从localStroe获取
    
    this.index = index;
    this.name = heros[index].name;
    this.power = heros[index].power;
    this.level = heros[index].level;
  }
  get allHero(){
    return Object.values(heros).map(it=> it.name)
  }
  // 仅展示未解锁下一个英雄
  nextHero(){

  }
  // 升级英雄
  levelUp() {

    this.level = this.level + 1;
  }
  // 切换英雄
  switchHero() {

  }
  getMonster() {
  }
}
