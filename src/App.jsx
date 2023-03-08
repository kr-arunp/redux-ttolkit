import { useState } from 'react'
import './App.css'
import CounterRedux from './CounterApp/CounterRedux'
import UserNote from './CRUD_APP/UserNote'
// import CounterReduxRTK from "./CounterApp/RTK/CounterReduxRTK";
import Users from "./Fetch-API/Users";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <CounterRedux/> */}
      <Users/>

      {/* <UserNote/> */}
    </div>
  );
}

export default App
