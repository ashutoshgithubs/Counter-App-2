import "./App.css";
import React,{useState} from "react";

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
   <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-black gap-10">
      <h1 className="text-5xl text-[#0398d4] font-medium mb-12 font-serif">REACT APP</h1>
      <h1 className="text-3xl text-[#0398d4] font-medium font-mono">Increment & Decrement</h1>
      <div className="flex bg-white gap-12 justify-center items-center py-3  rounded-sm 
      text-[#344151]">
        <button onClick={decreaseHandler} className="text-center border-r-2 w-20 text-5xl border-[#bfbfbf]">-</button>
        <div className="font-medium text-5xl w-20 text-center gap-12">{count}</div>
        <button onClick={increaseHandler} className="text-center border-l-2 w-20 text-5xl border-[#bfbfbf]">+</button>
      </div>
      <button onClick={resetHandler} className="rounded-md bg-[#0398d4] text-xl font-medium text-white px-5 py-3">Reset</button>
   </div>
  );
}

export default App;
