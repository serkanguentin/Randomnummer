import "./styles.css";
import React, { useState } from "react";
function App() {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const [randomNum, setRandomNum] = useState(5);
  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="randomnum">
          <p>
            Randomnumber:<span>{randomNum}</span>{" "}
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min</p>
            <input type="number"  value={minVal}
              onChange={e => setMinVal(+e.target.value)} />
          </div>
          <div>
            <p>Max</p>
            <input type="number"  value={maxVal}
              onChange={e => setMaxVal(+e.target.value)} />
          </div>
        </div>

        <div>
          <button onClick={handleRandomNum}>Get Randomnumber</button>
        </div>
      </div>
    </div>
  );
}

export default App;
