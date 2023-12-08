import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  let color = count === 0 ? "black" : count > 0 ? "green" : "red";

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div className="btn-group">
        <button onClick={decrement} className="btn btn-dec">
          Decrease
        </button>
        <button onClick={reset} className="btn btn-res">
          Reset
        </button>
        <button onClick={increment} className="btn btn-inc">
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
