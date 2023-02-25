import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {


  return (
    <div className="App">
      <div className="container">
        <div className="heading">Concentrate Kar Bro</div>
        <div className="content">
          <div className="timer">
            <div>
              <label htmlFor="hour">Hr</label>
              <input
                type="number"
                min="0"
                max="12"
                placeholder="00"
              />
            </div>
            <div>
              <label htmlFor="minutes">Min</label>
              <input
                type="number"
                min={"0"}
                max="60"
                placeholder="00"

              />
            </div>
            <div>
              <label htmlFor="seconds">Sec</label>
              <input
                type="number"
                min={"0"}
                max="60"
                placeholder="00"

              />
            </div>
          </div>

          <div className="timeInSecMsg">
            <span>time in sec</span> <span className="time">00</span> 
          </div>
        </div>
        <div className="buttonsDiv">
          <button className="reset">Reset</button>
          <button className="stop">Stop</button>
          <button className="start">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
