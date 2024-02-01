import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiUsers } from 'react-icons/hi2';
import { IoMdSettings } from 'react-icons/io';
import { MdAnalytics, MdMyLocation } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import client from '../assets/clientGirl.svg'

export default function Sidebar({ children }) {
    const location = useLocation(); 
    const menuItem = [
        {
            path: '/',
            icon: <MdAnalytics />,
            border:'bl'
        },
        {
            path: '/order',
            icon: <IoMdCart />
        },
        {
            path: '/client',
            icon: <HiUsers />
        },
        {
            path: '',
            icon: <MdMyLocation />
        }
       
    ];

    return (
        <div className='flex flex-col items-center justify-between bg-white'>
            <div className='flex h-[80vh]'>
            <div className='h-screen border-r-[2px] border-gray-100 w-20  block'>
                <div className='rounded-full text-center text-white py-2 m-4 bg-blue-600 font-semibold text-xl'>D</div>
                <div className="bg-[#f0f3f8] w-[55px] rounded-md mx-auto flex flex-col items-center">
                    {menuItem.map((item, index) => (
                        <NavLink
                            className='text-xl'
                            to={item.path}
                            key={index}
                            isActive={() => {
                                
                                   return location.pathname === item.path;
                            }}
                        >
                            <div className={`px-4 text-center mx-auto py-3 font-semibold text-gray-700 ${location.pathname === item.path ? 'text-white' : 'hover:text-blue-600'} ${location.pathname === item.path ? 'bg-blue-600 rounded-md' : 'hover:bg-gray-200'}`}>
                                {item.icon}
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-6 text-xl text-gray-700'>
        <IoMdNotifications />
        <IoMdSettings />
        <img src={client}/>
        </div>
        </div>
    );
}
