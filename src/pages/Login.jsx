import React, { useEffect, useState } from 'react'
import desktop from '../assets/desktop.svg'
import User from '../assets/User.svg'
import eye from '../assets/Eye.svg'
import lock from '../assets/lock.svg'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'



export default function Login() {
const{user,password,handleSubmit,setUser,setPassword}=useGlobalContext()
   

  return (
    <div className='mx-auto flex justify-between'>
        <div className='w-full bg-blue-500'>
         <h1 className='font-Inter text-white text-4xl font-bold mx-11 my-20'>Bootcamp</h1>
         <div className='flex items-center justify-center h-screen mt-[-100px]'>
         <img  src={desktop} />
         </div>
        </div>
        <div className='flex w-full justify-center items-center h-screen '>
      <div className='w-[700px] p-6  bg-white rounded-md'>
        <h1 className='text-3xl block font-semibold py-11'>Вход в платформу</h1>
      
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="user" className='block font-bold text-base  relative'>Имя пользователья <span className='text-red-500'>*</span>
        <img className='absolute left-[12px] top-[47px]' src={User}/>
        <input className=' rounded-md border w-full text-base px-11 py-4  focus:outline-none focus:ring-0 focus:border-gray-400 mb-4 mt-2'
        type="text"
        id='user'
        value={user}
        onChange={(e)=>setUser(e.target.value)}
        required
        placeholder=''
        />
        </label>
        <label htmlFor="password" className='block font-bold text-base mt-2 relative'>Пароль <span className='text-red-500'>*</span>
        <img className='absolute left-[12px] top-[47px]' src={lock}/>
        <input className=' rounded-md border w-full text-base px-11 py-4 focus:outline-none focus:ring-0 focus:border-gray-400 mb-6 mt-2'
         type="text"
         id='password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         required
         placeholder='Введите пароль'
         />
         <img className='absolute right-[12px] top-[47px]' src={eye} />
         </label>
        <button className='block w-full rounded-md mx-auto bg-blue-500 text-white py-4 px-5 mt-4' >Войти</button>
      </form>
      </div>
    </div>
    </div>
  )
}
