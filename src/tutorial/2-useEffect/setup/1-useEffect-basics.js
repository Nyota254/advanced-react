import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {

  const [value,setValue] = useState(0)

  useEffect(() => {
    console.log('Use Effect called')
    document.title = `Document Title ${value}`
  });

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value+1)} >Click Me</button>
    </>
  );
};

export default UseEffectBasics;
