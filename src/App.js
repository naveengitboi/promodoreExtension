import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [sec,setSec] = useState(parseInt(0))
  const [min,setMin] = useState(parseInt(0))
  const [hr,setHr] = useState(parseInt(0))
  let [value, setValue] = useState(parseInt(0))

  let changeSec = (event)=> {
    let data = event.target.value
    setSec((prev) => prev = event.target.value)
  }
  let changeMin = (event)=> {
   setMin(prev => prev = event.target.value)
 }
   let changeHr = (event)=> {
    setHr((prev) => prev = event.target.value)
  }
  function checkFunc(intervelId, value) {
    if(parseInt(value) == 0){
      clearInterval(intervelId)
    } 
  }
    let timeFunction = (timeInSec) => {
    console.log(timeInSec)
    let intervelId = setInterval(() => {
      setValue(prev => prev = parseInt(prev) - 1)
      console.log(value)
    checkFunc(intervelId,value )
    }, 1000);
     
  }
  function timeData(){
    let timeInSec = parseInt(sec) + parseInt(min*60) + parseInt(hr*60*60)
    setValue(prev => prev = timeInSec)
    timeFunction(timeInSec)
  }

  return (
    <div className="App">
      <div className="container">
        <div className='heading'>Concentrate Kar Bro</div>
        <div className="content">
          <div className="timer">
            <div>
              <label htmlFor="hour">Hr</label>
              <input type="number" min="0" max="12" placeholder='00' 
              onChange={changeHr} value={hr} />
            </div>
            <div>
              <label htmlFor="minutes">Min</label>
              <input type="number" min={"0"} max="60" placeholder='00'
              onChange={changeMin} value={min} />
            </div>
            <div>
              <label htmlFor="seconds">Sec</label>
              <input type="number" min={"0"} max="60" placeholder='00'
              onChange={changeSec} value={sec} />
            </div>
          </div>

          <div className="timeInSecMsg"><span>time in sec</span> <span className='time'>{value}</span></div>
        </div>
        <div className="buttonsDiv">
          <button className='reset'>Reset</button>
          <button className='stop'>Stop</button>
          <button onClick={()=> timeData()} className='start'>Start</button>
        </div>
      </div>
    </div>
  );
}

export default App;
