import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>OOPS!!Weve vered off too far</h1>
      <Link to="/" className="btn">Back Home</Link>
    </div>
  );
};

export default Error;
