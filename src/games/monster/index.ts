import { Monster } from '../interface';


export interface monsterType {
  [key: number]: Monster
}
const monster1: monsterType = {
  1: {
    hp: '15',
    img: '',
    boss: false,
    name: '史莱姆',
    money: 100,
  },
  2: {
    hp: '25',
    img: '',
    boss: false,
    name: '小猪',
    money: 100,
  },
  3: {
    hp: '35',
    img: '',
    boss: false,
    name: '恶灵',
    money: 100,
  },
  4: {
    hp: '45',
    img: '',
    boss: false,
    name: '树妖',
    money: 100,
  },
  5: {
    hp: '55',
    img: '',
    boss: false,
    name: '黑衣人',
    money: 100,
  },
  6: {
    hp: '65',
    img: '',
    boss: false,
    name: '忍者',
    money: 100,
  },
  "7": {
    "hp": "77",
    "img": "",
    "boss": false,
    "name": "奈亚拉托提普",
    "money": 100
  },
  "8": {
    "hp": "88",
    "img": "",
    "boss": false,
    "name": "阿撒托斯",
    "money": 100
  },
  "9": {
    "hp": "99",
    "img": "",
    "boss": false,
    "name": "克苏鲁",
    "money": 100
  },
  "10": {
    "hp": "111",
    "img": "",
    "boss": false,
    "name": "犹格·索托斯",
    "money": 100
  },
  "11": {
    "hp": "123",
    "img": "",
    "boss": false,
    "name": "莎布·尼古拉丝",
    "money": 100
  },
  "12": {
    "hp": "145",
    "img": "",
    "boss": false,
    "name": "撒托古亚",
    "money": 100
  },
  "13": {
    "hp": "167",
    "img": "",
    "boss": false,
    "name": "伊塔库亚",
    "money": 100
  },
  "14": {
    "hp": "189",
    "img": "",
    "boss": false,
    "name": "加塔诺托亚",
    "money": 100
  },
  "15": {
    "hp": "221",
    "img": "",
    "boss": false,
    "name": "大衮",
    "money": 100
  },
  "16": {
    "hp": "245",
    "img": "",
    "boss": false,
    "name": "星之精",
    "money": 100
  },
  "17": {
    "hp": "278",
    "img": "",
    "boss": false,
    "name": "纳格",
    "money": 100
  },
  "18": {
    "hp": "311",
    "img": "",
    "boss": false,
    "name": "耶布",
    "money": 100
  },
  "19": {
    "hp": "334",
    "img": "",
    "boss": false,
    "name": "亚弗姆·扎",
    "money": 100
  },
  "20": {
    "hp": "390",
    "img": "",
    "boss": false,
    "name": "昌格纳·方庚",
    "money": 100
  },
  "21": {
    "hp": "434",
    "img": "",
    "boss": false,
    "name": "莎布·尼古拉丝",
    "money": 100
  },
  "22": {
    "hp": "490",
    "img": "",
    "boss": false,
    "name": "犹格·索托斯",
    "money": 100
  },
  "23": {
    "hp": "555",
    "img": "",
    "boss": false,
    "name": "奈亚拉托提普",
    "money": 100
  },
  "24": {
    "hp": "666",
    "img": "",
    "boss": false,
    "name": "克苏鲁",
    "money": 100
  },
  "25": {
    "hp": "777",
    "img": "",
    "boss": false,
    "name": "哈斯塔",
    "money": 100
  },
  "26": {
    "hp": "888",
    "img": "",
    "boss": false,
    "name": "诺登斯",
    "money": 100
  },
  "27": {
    "hp": "999",
    "img": "",
    "boss": false,
    "name": "阿撒托斯",
    "money": 100
  }
};
 
export default class monster {
  attr: Monster;
  hp: string; // hp
  name: string; // 名字
  index: number;
  money: number; // 进去

  constructor(index: number) {
    this.index = index;
    this.hp = monster1[index].hp;
    this.name = monster1[index].name;
    this.money = monster1[index].money;
  }
  // 下一个怪物
  nextMoster() {
    this.index = this.index + 1;
    this.setMonster()
  }
  // 设置怪物属性
  setMonster() {
    this.attr = monster1[this.index];
    this.hp = monster1[this.index]?.hp;
    this.name = monster1[this.index]?.name;
    this.money = monster1[this.index]?.money;
  }
  // 减少生命
  delHp(injury: number) {
    let nHp = parseInt(this.hp) - injury;
    if (nHp < 0) nHp = 0;
    this.hp = nHp.toString();
  }
  // 满血复活
  resetHp() {
    this.hp = monster1[this.index]?.hp;
  }
  downMoney() {
    return this.money;
  }
  getMonster() {
    return this.attr;
  }
}
