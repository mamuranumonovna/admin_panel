import React from 'react'
import { NavLink } from 'react-router-dom'
import {HiUsers} from 'react-icons/hi2'
import {GoStarFill} from 'react-icons/go'
import {PiClockCounterClockwiseBold} from 'react-icons/pi'
import {IoMdSettings} from 'react-icons/io'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {FaClipboardList} from 'react-icons/fa'
import {GiDiscGolfBag} from 'react-icons/gi'
import { IoBarChartOutline } from "react-icons/io5"
import { IoMdCart } from "react-icons/io";


export default function Sidebar({children}) {

    const menuItem=[
        {
            path:'/',
            icon:<IoBarChartOutline />
            
          },
    
        {
          path:'/login',
          icon:<HiUsers/>
        },
        {
            path:'',
            icon:<GiDiscGolfBag />
          },
          {
            path:'',
            icon:<FaClipboardList />
          },
          {
            path:'',
            icon:<SiHomeassistantcommunitystore />
          },
        {
          path:'',
          icon:<GoStarFill />
        },
        {
          path:'',
          icon:<PiClockCounterClockwiseBold />
        },
        {
            path:'',
            icon:<IoMdSettings />
          }, 
          {
            path:'/order',
            icon:<IoMdCart/>
          } 
    
      ]


  return (
    <div className='flex'>
        <div className='h-screen bg-white block '>
        <div className='rounded-full text-center text-white py-2 m-4 bg-blue-600 font-semibold text-xl'>D</div>
        {
         menuItem.map((item,index)=>(
         <NavLink className='text-gray-500  mt-4 text-xl' to={item.path} key={index}  >
            
            <div className='text-center mx-auto px-7 py-3 font-semibold hover:text-blue-600 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 focus:text-blue-600'>{item.icon}</div>
         
        
         </NavLink>
         ))
         }
        </div>
        <main className='w-full bg-sky-300'>{children}</main>
    </div>
  )
}
