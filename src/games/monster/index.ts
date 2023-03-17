import {Monster} from '../interface';


export interface monsterType {
  [key: number]: Monster
} 
const monster1: monsterType = {
  1: {
    hp: '100',
    img: '',
    boss: false,
    name: '史莱姆'
  },
  2: {
    hp: '150',
    img: '',
    boss: false, 
    name: '小猪'
  },
  3: {
    hp: '200',
    img: '',
    boss: false, 
    name: '恶灵'
  },
  4: {
    hp: '250',
    img: '',
    boss: false, 
    name: '树妖'
  },
  5: {
    hp: '300',
    img: '',
    boss: false, 
    name: '黑衣人'
  },
  6: {
    hp: '350',
    img: '',
    boss: false, 
    name: '忍者'
  }
}

export default class monster{
  attr: Monster;
  hp: string; // hp
  name: string; // 名字
  index: number;

  constructor(index: number){ 
    this.index = index;
    this.hp = monster1[index].hp;
    this.name = monster1[index].name;
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
  }
  // 减少生命
  delHp (injury: number){
    console.log(this.hp)
    let nHp = parseInt(this.hp) - injury;
    this.hp = nHp.toString();
  }
  getMonster(){
     return this.attr;
  }
}
 