import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size,setSize] = useState(window.innerWidth)

  let newWidth = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize',newWidth);
    return () => {
      window.removeEventListener('resize',newWidth)
    }
  },)

  return(
    <>
      <h1>Window Width</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
