import React, { useState } from 'react';
//useState is a Function

//Hooks rules
//Start with use
//component must be uppercase where we use hooks
//hooks must be in the function/component body
//cannot be called conditionaly

//State usage
const UseStateBasics = () => {

  const [text,setText] = useState('just a heading')

  const changeHeading = () => {
    if(text === 'just a heading'){
      setText('Another Heading');
    } else {
      setText('just a heading');
    }
  }

  return(
    <div>
    <h1>{text}</h1>
    <button type="button" className="btn" onClick={changeHeading}>Change Heading</button>
    </div>
  ); 
};

export default UseStateBasics;
