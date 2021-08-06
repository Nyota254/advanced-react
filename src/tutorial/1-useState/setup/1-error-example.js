import React from 'react';

//Why we need use state
//initial idea is to change the title after button click
//component doesnt rerender

const ErrorExample = () => {

  let title = "Just a title"

  const changeTitle = () => {
    title = "another title"
    console.log(title)
  }

  return (
    <div>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={changeTitle}>Change Title</button>
    </div>
  );
};

export default ErrorExample;
