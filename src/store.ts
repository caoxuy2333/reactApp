import { configureStore, createSlice } from '@reduxjs/toolkit'
import hero from './games/heros';
import monster from './games/monster';

const newhero = new hero(1);
const newMonster = new monster(1);


// redux不推荐使用 new对象实例, 需转换为普通object
export const counterReducer = createSlice({
  name: 'global',
  initialState: {
    money: 500, // 金币
    monster: Object.assign({}, newMonster), // 怪兽属性
    countHp: parseInt(newMonster.hp), // 怪兽总血量 
    nextHero: newhero.nextHero, // 英雄列表
    monsterMoneyList: [], // 怪兽商品动画栈
    mapIndex: 1, // 关卡, 地图场景
  },
  reducers: {
    // 英雄等级提升
    heroLevelUP: (state, action) => {
      if (action.payload.levelUpMoney <= state.money) {
        state.money = state.money - action.payload.levelUpMoney; // 扣减金币
        // 升级英雄
        newhero.levelUp(action.payload.id);
        state.nextHero = newhero.nextHero;
      }
    },
    // 造成伤害  计算所有英雄的攻击, 并相加
    delHp: (state, action) => {
      const {payload = {} } = action;
      let h = state.nextHero.reduce((res, it) => {
        return res + it.level * parseInt(it.power);
      }, 0)
      if (payload.point) h = 3 * h;
      newMonster.delHp(h);
      state.monster.hp = newMonster.hp;
    },
    // 怪兽死亡, 切换下一个怪兽
    nextMoster: (state) => {
      state.monsterMoneyList.push(newMonster.downMoney());
      state.money += newMonster.downMoney();
      // 切换下一个怪兽
      newMonster.nextMoster();
      state.countHp = parseInt(newMonster.hp);
      state.monster = Object.assign({}, newMonster);
      state.mapIndex = state.mapIndex + 1;
    },
    // 规定时间内 未杀死怪兽 还原血量
    // 返回上一个怪兽
    resetHp: (state) => {
      newMonster.lastMoster();
      newMonster.resetHp();
      state.monster = Object.assign({}, newMonster);
      state.countHp = parseInt(newMonster.hp);
    },
    // 去除 怪兽伤害数值动画
    increment: (state) => {
      state.monsterMoneyList.shift()
    }
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


export const { increment } = counterReducer.actions;


export const store = configureStore({
  reducer: {
    global: counterReducer.reducer,
  },
})

// setInterval(() => {
//   store.dispatch(increment())
// }, 1000)
console.log(store);
console.log(store.dispatch);
console.log(store.getState());
// console.log(store);



// setInterval(() => {
//   store.dispatch(increment())
// }, 1000)