import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const increase = () => {
    // counter = counter + 1;
    setCounter(counter + 1); //default

    //---------------------/if/--------------------//
    // setCounter(counter + 1);    //-|counter is working:
    // setCounter(counter + 1);    //-|  as it is
    // setCounter(counter + 1);    //-|   Means counter is increase by 1
    // setCounter(counter + 1);    //-|

    //-----------------/if/-------------------//
    // setCounter((precounter) => precounter + 1);    //-|counter is working:
    // setCounter((precounter) => precounter + 1);    //-| diff direct +4:
    // setCounter((precounter) => precounter + 1);    //-|   Means counter is increase by 4
    // setCounter((precounter) => precounter + 1);    //-|
  };

  const decrease = () => {
    // counter = counter - 1;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>it is counter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={increase}>increase</button>
      &nbsp;
      <button onClick={decrease}>decrese</button>
    </>
  );
}

export default App;
