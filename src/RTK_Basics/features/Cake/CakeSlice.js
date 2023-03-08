/** @format */

const { createSlice } = require("@reduxjs/toolkit");
let initialState = {
  numberOfCakes: 20,
};
 let CakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    Ordered: (state) => {
      state.numberOfCakes--;
    },
    CakeRestocked: (state, action) => {
      state.numberOfCakes=action.payload;
    },
  },
});
module.exports=CakeSlice.reducer;
module.exports.CakeActions=CakeSlice.actions;
