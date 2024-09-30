import { useState } from "react";

function App() {
  // let counter = 1;
  let[counter,setcounter] = useState(1)
  const addValue = () => {
      // setcounter(counter+1) if we want to increase the value from suppose from 4->7 the this method will not work then we need to do this via below approach
    // setcounter(counter+1)
    // setcounter(counter+1)
    setcounter((prevcounter)=>{
      return prevcounter = prevcounter+1;
    })
    setcounter((prevcounter)=>{
      return prevcounter = prevcounter+1;
    })
    setcounter((prevcounter)=>{
      return prevcounter = prevcounter+1;
    })
    setcounter((prevcounter)=>{
      return prevcounter = prevcounter+1;
    })
  
    console.log(counter);
  }
  const removeValue = () => {
    if(counter<1){
      counter = 1;
      alert("Number reached to 0")
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
