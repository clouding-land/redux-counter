import React from "react";
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import { Increment,Decrement } from "./Redux/counterAction";

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter)
  return (
    <div className="counter_app">
      <h1>Counter Application</h1>
      <div className="counter">
        <button className="increment" onClick={()=>dispatch(Increment())}>Increment</button>
        <span>{counter}</span>
        <button className="decrement" onClick={()=>dispatch(Decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
