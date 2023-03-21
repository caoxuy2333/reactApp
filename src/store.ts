import { configureStore, createSlice, ThunkAction, Action } from '@reduxjs/toolkit'  

export const counterReducer  = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
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
})
 

export const { increment, decrement, incrementByAmount } = counterReducer.actions;
export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
  }, 
})


// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;