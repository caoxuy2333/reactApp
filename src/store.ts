import { configureStore, createSlice } from '@reduxjs/toolkit'
import hero from './games/heros';
import monster from './games/monster';

const newhero = new hero(1);
const newMonster = new monster(1);

export const counterReducer = createSlice({
  name: 'global',
  initialState: {
    value: 0,
    hero: Object.assign({ levelUpMoney: newhero.levelUpMoney }, newhero), // redux不推荐使用 new对象实例, 故转换为普通object
    monster: Object.assign({}, newMonster),
    countHp: parseInt(newMonster.hp),
    allHero: newhero.allHero,
    nextHero: newhero.nextHero,
    ttkHero: newhero.ttkHero,
    money: 200
  },
  reducers: {
    // 英雄等级提升
    heroLevelUP: (state, action) => {
      console.log(action, state)
      if (action.payload.levelUpMoney <= state.money) {
        state.money = state.money - action.payload.levelUpMoney; // 扣减金币
        // 升级英雄
        newhero.levelUp(action.payload.id);
        state.ttkHero = newhero.ttkHero;
        state.nextHero = newhero.nextHero; 
      }
    },
    // 造成伤害  计算所有英雄的攻击, 并相加
    delHp: (state, action) => { 
      let h = state.ttkHero.reduce((res, it) => {
        return res + it.level * parseInt(it.power);
      }, 0)
      newMonster.delHp(h);
      state.monster.hp = newMonster.hp;
    },
    // 怪兽死亡, 切换下一个怪兽
    nextMoster: (state) => {
      newMonster.nextMoster();
      state.money += newMonster.downMoney();
      state.countHp = parseInt(newMonster.hp);
      state.monster = Object.assign({}, newMonster);
    },
    // 规定时间内 未杀死怪兽 还原血量
    resetHp: (state) => {
      newMonster.resetHp();
      state.monster.hp = newMonster.hp;
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    'mySlice/reverseItems': (state): any => {
      return '1';
    },
    'mySlice/clearItems': (): any => {
      return [];
    }
  }
})


export const { increment, decrement, incrementByAmount } = counterReducer.actions;
export const store = configureStore({
  reducer: {
    global: counterReducer.reducer,
  },
})