import React, { useState } from 'react';
import uuid from 'react-uuid';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName] = useState('');
  const [email,setEmail] = useState('');
  const [people,setPeople] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(firstName && email){
      const person = { id:uuid(),firstName,email };
      console.log(person)
      setPeople((people)=>{
        return [...people,person];
      })
      setFirstName('');
      setEmail('');
    } else {
      console.log('Kindly fill value')
    }
  }
  
  return(
    <>
    <article>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <button type="submit">add person</button>
      </form>
    </article>
    {
    people.map((person)=>{
      const {id,firstName,email} = person;
        return(<div className="item" key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>)
    })
    }

    </>
  );
};

export default ControlledInputs;
