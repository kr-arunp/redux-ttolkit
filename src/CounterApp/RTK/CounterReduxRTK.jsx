/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment,Decrement, UpdateByValue} from "./CounterSlice";
// import { actions } from "./Actions";
const CounterRedux = () => {
  /*
A hook to access the redux store's state.
This hook takes a selector function as an argument. 
The selector is called with the store state.
*/
  //useSelector Hook is responsible for updating the state value in the ui
  //it will be automatically called state is updates
  let Counter = useSelector((state) => console.log(state.Counter));
  useEffect(() => {
    console.log("Component is re-render");
  }, [Counter]);
  //it only dispatch the action to the redux store
  const dispatch = useDispatch();
  const [Input, setInput] = useState("");
  // const [Counter, setCounter] = useState(0);

  let IncrementHandler = () => {
    dispatch(Increment());
    setInput("");
  };

  let DecrementHandler = () => {
    dispatch(Decrement());
    setInput("");
  };
  let UpdateByValueHandler = () => {
    if (Input !== "") dispatch(UpdateByValue(parseInt(Input)));
    setInput("");
  };
  return (
    <div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <h2>Counter value : {Counter}</h2>
        <button onClick={DecrementHandler}>Decrement</button>
        <p>
          <input
            type="number"
            style={{ padding: "5px" }}
            placeholder="Update the Count By X"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
          />
          <p>
            <button onClick={UpdateByValueHandler}>UpdateBy {Input} </button>
          </p>
        </p>
      </div>
    </div>
  );
};

export default CounterRedux;
