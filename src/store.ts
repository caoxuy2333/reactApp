import { configureStore, createSlice } from '@reduxjs/toolkit'
import hero from './games/heros';
import monster from './games/monster';

const newhero = new hero(1);
const newMonster = new monster(1);

export const counterReducer = createSlice({
  name: 'global',
  initialState: {
    value: 0,
    hero: Object.assign({}, newhero), // redux不推荐使用 new对象实例, 故转换为普通object
    monster: Object.assign({}, newMonster),
    countHp: parseInt(newMonster.hp),
    allHero: newhero.allHero,
    money: 0
  },
  reducers: {
    // 英雄等级提升
    heroLevelUP: (state) => {
      newhero.levelUp();
      state.hero.level = newhero.level;
    },
    // 造成伤害
    delHp: (state, action) => {
      let h = state.hero.level * parseInt(state.hero.power);
      newMonster.delHp(h);
      state.monster.hp = newMonster.hp;
    },
    // 怪兽死亡, 切换下一个怪兽
    nextMoster: (state): any => {
      newMonster.nextMoster();
      state.money += newMonster.downMoney();
      state.countHp = parseInt(newMonster.hp);
      state.monster = Object.assign({}, newMonster);
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