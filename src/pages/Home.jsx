import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        
        <h1 className='text-3xl'>Home page</h1>
        <Link to={'/login'}>login pagega o'tish</Link>
    </div>
  )
}
