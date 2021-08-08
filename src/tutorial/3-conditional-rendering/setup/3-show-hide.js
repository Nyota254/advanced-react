import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show,setShow] = useState(false);

  return (
    <>
      <button type="button" className="btn" onClick={()=>setShow(!show)}>Show Information</button>
      {show && <HiddenSection/>}
    </>
    );
};

const HiddenSection = () => {

  const [width,setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize',changeWidth)
    return () => {
    window.removeEventListener('resize',changeWidth)
    }
  }, []);

  return(
    <>
      <h2 style={{margin:'2rem'}}>Window Width:{width}</h2>
    </>
  );
}

export default ShowHide;
