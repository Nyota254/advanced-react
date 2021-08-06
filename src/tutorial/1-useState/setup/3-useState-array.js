import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
  
  const removeItem = (id) => {
    const newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      <h1>
        {
          people.map(person => {
            const {id,name} = person;
            return (
            <div key={id} className="item">
              <h4>
                {name}
              </h4>
              <button type="button" className="btn" onClick={()=>removeItem(id)}>
                  Remove Item
              </button>
            </div>
            );
          })
        }
      </h1>
      <button type="button" className="btn" onClick={()=>setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
