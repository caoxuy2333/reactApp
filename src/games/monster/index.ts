import {Monster} from '../interface';


export interface monsterType {
  [key: number]: Monster
} 
const monster1: monsterType = {
  1: {
    hp: '100',
    img: '',
    boss: false,
    name: '史莱姆',
    money: 100,
  },
  2: {
    hp: '150',
    img: '',
    boss: false, 
    name: '小猪',
    money: 100,
  },
  3: {
    hp: '200',
    img: '',
    boss: false, 
    name: '恶灵',
    money: 100,
  },
  4: {
    hp: '250',
    img: '',
    boss: false, 
    name: '树妖',
    money: 100,
  },
  5: {
    hp: '300',
    img: '',
    boss: false, 
    name: '黑衣人',
    money: 100,
  },
  6: {
    hp: '350',
    img: '',
    boss: false, 
    name: '忍者',
    money: 100,
  }
}

export default class monster{
  attr: Monster;
  hp: string; // hp
  name: string; // 名字
  index: number;
  money: number; // 进去

  constructor(index: number){ 
    this.index = index;
    this.hp = monster1[index].hp;
    this.name = monster1[index].name;
    this.money =  monster1[index].money;
  }
  // 下一个怪物
  nextMoster(){
    this.index = this.index + 1;
    this.setMonster()
  }
  // 设置怪物属性
  setMonster(){
    this.attr = monster1[this.index];
    this.hp = monster1[this.index]?.hp;
    this.name = monster1[this.index]?.name;
    this.money =  monster1[this.index]?.money;
  }
  // 减少生命
  delHp (injury: number){
    let nHp = parseInt(this.hp) - injury;
    this.hp = nHp.toString();
  }
  downMoney(){
    return this.money;
  }
  getMonster(){
     return this.attr;
  }
}
 