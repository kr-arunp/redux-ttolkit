const store=require('./store');
// import store from './store';
const {CakeActions} = require("./features/Cake/CakeSlice");


console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(()=>{
   console.log("Updated state", store.getState());
})
store.dispatch(CakeActions.Ordered());
store.dispatch(CakeActions.Ordered());
store.dispatch(CakeActions.Ordered());
store.dispatch(CakeActions.Ordered());
store.dispatch(CakeActions.CakeRestocked(20));
store.dispatch(CakeActions.Ordered());
unsubscribe();
