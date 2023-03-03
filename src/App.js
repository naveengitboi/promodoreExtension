import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [sec, setSec] = useState(parseInt(0));
  let [min, setMin] = useState(0);
  let [hr, setHr] = useState(0);
  let [timer, setTimer] = useState(false);
  let [timeInSec, setTimeInSec] = useState(0);

  function handleTimerFunc() {
    setTimer(prev => !prev);
    setTimeInSec(
      (prev) =>
        (prev = parseInt(sec) + parseInt(min * 60) + parseInt(hr * 60 * 60))
    );
    
  }

  useEffect(()=> {
    function runTime(){
    if(timer && timeInSec >0){
      setTimeInSec(prev => prev -= 1)
      console.warn(timeInSec)
    }
  }
  let intervelId;
  intervelId = setTimeout(runTime, 1000);
  })


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
                value={hr}
                onChange={(event) =>
                  setHr((prev) => (prev = event.target.value))
                }
              />
            </div>
            <div>
              <label htmlFor="minutes">Min</label>
              <input
                type="number"
                min={"0"}
                max="60"
                placeholder="00"
                value={min}
                onChange={(event) =>
                  setMin((prev) => (prev = event.target.value))
                }
              />
            </div>
            <div>
              <label htmlFor="seconds">Sec</label>
              <input
                type="number"
                min={"0"}
                max="60"
                placeholder="00"
                value={sec}
                onChange={(event) =>
                  setSec((prev) => (prev = event.target.value))
                }
              />
            </div>
          </div>

          <div className="timeInSecMsg">
            <span>time in sec</span> <span className="time">{timeInSec}</span>
          </div>
        </div>
        <div className="buttonsDiv">
          <button
            className="reset"
            onClick={() => {
              setTimer((prev) => (prev = false));
              setHr((prev) => (prev = 0));
              setMin((prev) => (prev = 0));
              setSec((prev) => (prev = 0));
              setTimeInSec((prev) => (prev = 1));
            }}
          >
            Reset
          </button>
          <button className="stop" onClick={() => setTimer((prev) => !prev)}>
            Stop
          </button>
          <button className="start" onClick={handleTimerFunc}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
