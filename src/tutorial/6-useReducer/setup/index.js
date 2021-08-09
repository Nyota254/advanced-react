import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import uuid from 'react-uuid';
// reducer function
import {reducer} from '../setup/reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent:''
}

const Index = () => {
  const [name,setName] = useState('');
  const [state,dispatch] = useReducer(reducer,defaultState)

  const submitHandler=(e)=> {
    e.preventDefault();
    if(name){
      const newPerson = {id:uuid(),name:name};
      dispatch({type:'ADD_PERSON',payload:newPerson});
      setName('');
    } else {
      dispatch({type:'BLANK_SUBMIT'})
    }
  }

  const modalTimer= () => {
    dispatch({type:'MODAL_TIMER',payload:false})
  }

  return (
    <>
      {state.isModalOpen && <Modal modalTimer={modalTimer} modalContent={state.modalContent}/>}
      <form className="form">
          <div>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <button type="submit" className="btn" onClick={submitHandler}>Add Name</button>
      </form>
      {
        state.people.map((person)=>{
          const {id,name} = person;
          return <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={()=>dispatch({type:'DELETE_ITEM',payload:id})}>Remove</button>
          </div>
        })
      }
    </>
  );
};

export default Index;
