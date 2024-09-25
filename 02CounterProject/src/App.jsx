import { useState } from "react";

function App() {
  // let counter = 1;
  let[counter,setcounter] = useState(1)
  const addValue = () => {
    // counter =counter+1;
    setcounter(counter+1);
    console.log(counter);
  }
  const removeValue = () => {
    if(counter<1){
      counter = 1;
    }
    else{
    setcounter(counter-1);
    }
    console.log(counter);
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
