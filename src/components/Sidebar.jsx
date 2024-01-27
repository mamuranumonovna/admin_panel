import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiUsers } from 'react-icons/hi2';
import { IoMdSettings } from 'react-icons/io';
import { MdAnalytics, MdMyLocation } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

export default function Sidebar({ children }) {
    const location = useLocation(); // Get the current location
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
            path: '/login',
            icon: <HiUsers />
        },
        {
            path: '',
            icon: <IoMdSettings />
        },
        {
            path: '',
            icon: <MdMyLocation />
        },
    ];

    return (
        <div className='flex h-screen'>
            <div className='h-screen border-r-[2px] border-gray-100 w-20 bg-white block'>
                <div className='rounded-full text-center text-white py-2 m-4 bg-blue-600 font-semibold text-xl'>D</div>
                <div className="bg-[#f0f3f8] w-[55px] rounded-md mx-auto flex flex-col items-center">
                    {menuItem.map((item, index) => (
                        <NavLink
                            className='text-xl'
                            to={item.path}
                            key={index}
                            isActive={() => {
                                // Check if the current location matches the path
                                   return location.pathname === item.path;
                            }}
                        >
                            <div className={`px-4 text-center mx-auto py-3 font-semibold ${location.pathname === item.path ? 'text-white' : 'hover:text-blue-600'} ${location.pathname === item.path ? 'bg-blue-600 rounded-md' : 'hover:bg-gray-200'}`}>
                                {item.icon}
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
