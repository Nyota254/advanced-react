import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [loading,setLoading] = useState(true)
  const [user, setUser] = useState('default user');

  useEffect(()=>{
    fetch(url)
      .then((response)=>{
        if(response.status === 200){
          setLoading(false)
          return response.json()
        }
        
      })
      .then((user)=>{
        const { login } = user;
        setUser(login)
        console.log(login)
      })
  },[])

  if(loading){
    return <h2>Loading...</h2>
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
