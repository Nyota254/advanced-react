import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value,setValue] = useState(0)

  const resetCounter = () => {
    return setValue(0)
  }

//Complex counter function set state method return
  const complexCounter = () => {
    setTimeout(()=> {
      setValue((prevState)=>{
      return prevState + 1
    });},2000);
    
  }

  return (
  <>
  <section style={{margin:'4rem 0'}}>
    <h2>Simple Counter</h2>
    <h1>{value}</h1>
    <button type="button" className="btn" onClick={()=>setValue(value - 1)}>- Decrease counter</button>
    <button type="button" className="btn" onClick={resetCounter}>Reset</button>
    <button type="button" className="btn" onClick={()=>setValue(value + 1)}>+ Increase counter</button>
    </section>

    <section style={{margin:'4rem 0'}}>
    <h2>Complex Counter</h2>
    <h1>{value}</h1>
    <button type="button" className="btn" onClick={complexCounter}>+ Increase counter</button>
    </section>
  </>

  );
};

export default UseStateCounter;
