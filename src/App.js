import "./App.css";
import { useState } from "react";
import { INCREMENT,DECREMENT } from "./mianstore/statetype";

import { useDispatch,useSelector } from "react-redux";

function App() {
 
const counterStore = useSelector(state=>state)
console.log("counterStore",counterStore)

  return (<>
      <h1>sumit bhai</h1>
      <div className="App">
      {counterStore && <span className='operation'> {counterStore.counter}</span>}
      {counterStore.status !== '' && 
      <span className={counterStore.status == INCREMENT ? 'status-add' : 'status-sub' }>
        {counterStore.status}
        </span>}
      <button className='add-bt' onClick={() => {}}>addValue </button>
      <button className='sub-bt' onClick={() =>{} }>decrement </button>
      </div>
   
  
  </>
    
  );
}

export default App;
