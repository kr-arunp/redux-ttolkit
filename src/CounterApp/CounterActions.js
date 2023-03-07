/** @format*/

//Increment Action creator function
export let IncrementCounter = () => {
  return {
    type: "INCREMENT",
  };
};
//Decrement Action Creator function
export let DecrementCounter = () => {
  return {
    type: "DECREMENT",
  };
};
//Update the Counter value by X
export let UpdateCounterByX = (value) => {
  return {
    type: "UPDATE_BY_VALUE",
    payload: {
      value: value,
    },
  };
};
export const ResetCounter = () => {
  return {
    type: "RESET_COUNTER",
  };
};
