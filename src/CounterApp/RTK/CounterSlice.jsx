import { createSlice } from "@reduxjs/toolkit";
 const initialState = {
  Counter: 0,
}
const CounterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    Increment:(state, action) => {
      state.Counter + 1;
    },
    Decrement: (state, action) => {
      state.Counter - 1;
    },
    UpdateByValue: (state, action) => {
      state.Counter+=0;
    },
  },
});
// Action creators are generated for each case reducer function
export const { Increment, Decrement, UpdateByValue } = CounterSlice.actions;
 
export default CounterSlice;
