import React, { createContext, useContext, useState } from 'react'
import getStore from './utils/get'
import { useNavigate } from 'react-router-dom'


const UserContext = createContext()
export function UserProvider({ children }) {
 
    const[list,setList]=useState(getStore('lists'));
    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');
 
  
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
    e.preventDefault()
    const newItem={title:user,password:password}
    setList([...list,newItem])
    setUser('')
    setPassword('')
    navigate('/')
 }
  

  return (
    <UserContext.Provider
      value={{
        
          list,
          setList,
          user,
          setUser,
          password,
          setPassword,
          handleSubmit


      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(UserContext)
}
