export const reducer = (state,action) => {
  if(action.type === 'ADD_PERSON'){

    const newPerson = [...state.people,action.payload]
    return {
      ...state,
      people:newPerson,
      isModalOpen:true,
      modalContent:'Person Added Successfully'
    }
  } else if(action.type === 'MODAL_TIMER'){
    return {
      ...state,
      isModalOpen:false
    }
  } else if(action.type === 'BLANK_SUBMIT'){
    return {
      ...state,
      isModalOpen:true,
      modalContent:'Kindly add a value'
    }
  } else if(action.type === 'DELETE_ITEM'){
    const newPeople = state.people.filter((person)=>{
        return person.id !==  action.payload;
      });
    return {
      ...state,
      people:newPeople,
      isModalOpen:true,
      modalContent:'Value Deleted Succesfully'
    }
  }
};