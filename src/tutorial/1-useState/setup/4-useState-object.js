import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]= useState({
    name:'john',
    secondName: 'wick',
    profession: 'assasin',
    status:'retired'
  });

  const changeStatus = () => {
    if(person.status === 'retired'){
      //Spread Operator assists in prefilling the values 
      const newStatus = {...person,status:"Active"}
      return setPerson(newStatus)
    } else {
      const newStatus = {...person,status:"retired"}
      return setPerson(newStatus)
    }
    
  }

  return(
  <>
    <h2>Name: {person.name} {person.secondName}</h2>
    <h2>Proffesion: {person.profession}</h2>
    <h2>Status: {person.status}</h2>
    <button type="button" className="btn" onClick={changeStatus}>Change Status</button>
  </>
  
  );
};

export default UseStateObject;
