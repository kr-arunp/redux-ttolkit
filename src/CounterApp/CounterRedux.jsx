/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DecrementCounter,
  IncrementCounter,
  ResetCounter,
  UpdateCounterByX,
} from "./CounterActions";
const CounterRedux = () => {
  /*
A hook to access the redux store's state.
This hook takes a selector function as an argument. 
The selector is called with the store state.
*/
  //useSelector Hook is responsible for updating the state value in the ui
  //it will be automatically called state is updates
  let Counter = useSelector((state) => state.Counter);
  useEffect(() => {
    console.log("Component is re-render");
  }, [Counter]);
  //it only dispatch the action to the redux store
  const dispatch = useDispatch();
  const [Input, setInput] = useState("");
  // const [Counter, setCounter] = useState(0);

  let IncrementHandler = () => {
    dispatch(IncrementCounter());
    setInput("");
  };

  let DecrementHandler = () => {
    dispatch(DecrementCounter());
    console.log(Counter)
    setInput("");
  };
  let UpdateByValueHandler = () => {
    if (Input !== "") dispatch(UpdateCounterByX(parseInt(Input)));
    setInput("");
  };
  let ResetCounterHandler = () => {
    dispatch(ResetCounter());
  };

  return (
    <div>
      <div>
        <button onClick={IncrementHandler}>Increment +1</button>
        <h2>Counter value : {Counter}</h2>
        <p>
          <button onClick={ResetCounterHandler}>Reset</button>
        </p>
        <button onClick={DecrementHandler}>Decrement -1</button>

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
