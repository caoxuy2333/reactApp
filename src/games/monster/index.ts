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
  hp: string;
  name: string;

  constructor(index: number){ 
    this.hp = monster1[index].hp;
    this.name = monster1[index].name;
    
  }
  // 下一个怪物
  nextMoster(){

  }
  // 设置怪物属性
  setMonster(){
    this.attr = monster1[1];
    this.hp = this.attr.hp;
    this.name = this.attr.name;
  }
  getMonster(){
     return this.attr;
  }
}
 