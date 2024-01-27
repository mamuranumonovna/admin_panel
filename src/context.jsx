import React, {createContext, useContext, useRef, useState} from 'react'
import getStore from './utils/get'
import { useNavigate } from 'react-router-dom'


const UserContext = createContext()
export function UserProvider({ children }) {
 
    const[list,setList]=useState(getStore('lists'));
    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');
    const chartRef = useRef(null);
  
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
          chartRef,
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
