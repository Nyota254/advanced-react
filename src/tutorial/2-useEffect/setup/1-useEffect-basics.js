import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {

  const [value,setValue] = useState(0)

  useEffect(() => {
    console.log('Use Effect called');
    //To render conditionally the conditional must be inside due to hooks rules
    if(value >= 2){
      document.title = `Document Title ${value}`
    }
    //creating a blank parameter makes it render on first occasion only
    //Adding a parameter makes it render when there is a change in it
  },[value]);

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value+1)} >Click Me</button>
    </>
  );
};

export default UseEffectBasics;
