const {configureStore}=require('@reduxjs/toolkit')
let CakeActions= require("./features/Cake/CakeSlice");
// let {  } = require("./features/Cake/CakeSlice");
let store = configureStore({
  reducer: {
    cake: CakeActions,
  },
});
module.exports=store;
