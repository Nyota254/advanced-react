import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [isError,setIsError] = useState(false);


  return(
    <>
      {
      isError && <h1>Error...From and ShortCircuit</h1>
      }
      {
        isError || <h1>No Error...From || ShortCircuit</h1>
      }
      {
        isError ? <h1>Error...Ternery</h1> : <h1>No Error...From Ternery</h1>
      }
      <button type="button" className="btn" onClick={()=>setIsError(!isError)}>Toggle Error</button>
    </>
    );
};

export default ShortCircuit;
