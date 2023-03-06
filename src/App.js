import React, {useState, useEffect} from "react";
import './App.css'
function App(){
  return(
    <div className="container">
      <div className="timeContainer">
      <h1 className="mainHeading">Concentrate Kar lo Bro</h1>
        <div className="timeDivBox">
          <input type="number" className="hours" placeholder="Hr" max={"24"}/>
        <input type="number" className="minutes" placeholder="Min" max={"60"}/>
        <h1 className="timer">00:00</h1>
        <div className="buttonDiv">
          <button className="resetBtn">Reset</button>
          <button className="stopBtn">STOP</button>
          <button className="startBtn">START</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App