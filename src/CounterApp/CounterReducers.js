/** @format */

let InitialState = {
  Counter: 0,
};
//we should not mutate the original state because it will crash the entire app
//we can copy the state abd update the Required property and return new state
export const CounterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        Counter: state.Counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        Counter: state.Counter - 1,
      };
    case "UPDATE_BY_VALUE":
      return {
        ...state,
        Counter: state.Counter + action.payload?.value,
      };
    case "RESET_COUNTER":
      return {
        ...state,
        Counter: 0,
      };
    default:
      return state;
  }
};
