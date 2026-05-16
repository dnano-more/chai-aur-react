import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(10);

  const addValue = () => {
    count = count + 1;
    if(count > 20) {
      count = 20
    }

    setCount(count)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount(prevValue => prevValue + 1)
    setCount(prevValue => prevValue + 1)
    setCount(prevValue => prevValue + 1)
    setCount(prevValue => prevValue + 1)
  };
  
  const removeValue = () => {
    count = count - 1;
    if(count < 0) {
      count = 0
    }

    setCount(count)
  }

  return (
    <>
      <h1>dnano's react counter app</h1>
      <h3>Counter value: {count}</h3>
      <br />
      <button onClick={addValue} className="counter">
        Increase Value
      </button>
      <button onClick={removeValue} className="counter">Decrease Value</button>
    </>
  );
}

export default App;
