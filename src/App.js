import { findAllByDisplayValue } from "@testing-library/react";
import React, {useState, useEffect} from "react";
import './App.css'
function App(){

  const [timeInSec, setTimeInSec] = useState(0)
  const [hr, setHr] =  useState(0)
  const [min, setMin] =  useState(0)

  let [runTimer, setRunTimer] = useState(findAllByDisplayValue)
  useState(() => {
    if(runTimer){
      let intervalId = setInterval(() => {
        
      }, 1000);
    }
  }, [runTimer])
  return(
    <div className="container">
      <div className="timeContainer">
      <h1 className="mainHeading">Concentrate Kar lo Bro</h1>
        <div className="timeDivBox">
          <input type="number" className="hours" placeholder="Hr" max={"24"} onChange={(e)=> setHr(e.target.value)} />
        <input type="number" className="minutes" placeholder="Min" max={"60"} onChange={(e)=> setMin(e.target.value)}  />
        <h1 className="timer">{hr<10 ?`0${hr}` : hr} :
        {min < 10? `0${min}` : min}</h1>
        <div className="buttonDiv">
          <button className="resetBtn">Reset</button>
          <button className="stopBtn">STOP</button>
          <button className="startBtn" onClick={{}}>START</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App