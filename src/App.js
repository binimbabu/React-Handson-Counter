import { useState } from "react";
var MAX = 10;
var MIN = 0;
function App() {
  var [count, setCount] = useState(0);
  function increment() {
    setCount((c) => c + 1);
  }
  function decrement() {
    setCount((c) => c - 1);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <p>{count}</p>
      <button disabled={count === MAX} onClick={increment}>
        Increment
      </button>
      <button disabled={count === MIN} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
