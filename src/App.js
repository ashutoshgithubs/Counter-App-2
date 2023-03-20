import {useState} from 'react';
import "./App.css";

function App() {
  const [Count, setCount]=useState(0);
  function decrementHandler(){
    setCount(Count-1);
  }
  function incrementHandler(){
    setCount(Count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
   <section className="h-[100vh] w-[100vw] flex flex-col items-center justify-center gap-10 bg-[#344151]">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
      <div className="flex justify-center gap-12 py-3 text-[25px] rounded-sm bg-white">
        <button onClick={decrementHandler} className="w-20 border-r-2 text-5xl border-[#bfbfbf] ">-</button>
        <div className='font-cold text-5xl gap-12 w-20 text-center'>{Count}</div>
        <button onClick={incrementHandler}  className="w-20 border-l-2 text-5xl border-[#bfbfbf] ">+</button>
      </div>
      <button onClick={resetHandler} className="text-lg px-5 py-2 bg-[#0398d4] text-white rounded-sm">Reset</button>
   </section>
  );
}

export default App;
