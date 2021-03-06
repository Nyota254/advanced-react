import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople] = useState(data);

const removeItem = (id) => {
  const newItems = people.filter((person)=>{
    return person.id !== id
  })
  setPeople(newItems);
}

  return (
    <section>
      <h2>prop drilling</h2>
      <List people={people} removeItem={removeItem}/>
    </section>
  );
};

const List = ({people,removeItem}) => {
  return (
    <>
    {people.map((person)=>{return <SinglePerson key={person.id} {...person} removeItem={removeItem}/>})}
    </>
  );
}

const SinglePerson = ({id,name,removeItem}) => {
  return(
    <div className="item">
      <h4>{name}</h4>
      <button type="button" className="btn" onClick={()=>removeItem(id)}>Remove Item</button>
    </div>
  );
}

export default PropDrilling;
