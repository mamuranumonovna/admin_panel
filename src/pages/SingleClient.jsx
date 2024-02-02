import React from 'react';
import { useGlobalContext } from '../context';
import shop from '../assets/Shop.svg'
import user from '../assets/Users.svg'
import notification from '../assets/notifications.svg'
import car from '../assets/directions_car.svg'
import { BiImageAdd } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function SingleClient() {
  const { selectedRow } = useGlobalContext();
const navigate=useNavigate()
  const backClick=()=>{
    navigate('/client')
  }

  return (
    <div className='w-full'>
        <nav className="py-[4px] bg-white border-sw">
        <div className='flex items-center px-8'>
           <button onClick={backClick}>
           <IoArrowBackOutline className='text-xl text-blue-500 ' />
           </button>
            <h1 className='py-4 px-4 pl-9  text-3xl font-thin text-gray-700 inter-bold'>{`${selectedRow.title}`}</h1>
        </div>
        </nav>
        <section className="">
            <div className="flex items-center justify-between p-8 w-full">
                <div className="flex w-[410px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">24</span>
                        <h3 className="text-[#6E8BB7]">Филиалы</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={shop} alt=""/>
                </div>
                <div className="flex w-[410px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">110,823</span>
                        <h3 className="text-[#6E8BB7]">Клиенты</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={user} alt=""/>
                </div>
                <div className="flex w-[410px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">110,823</span>
                        <h3 className="text-[#6E8BB7]">Подписчики</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={notification} alt=""/>
                </div>
                <div className="flex w-[410px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">75</span>
                        <h3 className="text-[#6E8BB7]">Курьеры</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={car} alt=""/>
                </div>
            </div>
        </section>
      {selectedRow && (
        <div className='px-8'>
            <div className='bg-white w-full p-4 rounded-lg'>
            <h1 className='pb-4 px-4 font-semibold'>Клиент</h1>
            <hr />
            <div className=' py-8 flex items-center'>
          <div className='relative m-4'>
          <img src="" alt="" className='bg-red-300 w-24 rounded-full  px-4 py-12 ml-2'/>
          <BiImageAdd className='absolute top-[37px] left-[44px] text-2xl'/>
          <p className='font-semibold text-blue-500 py-4'>Изменить фото</p>
          </div>
          <div className='m-8 w-[1500px]'>
            <div className='flex items-center '>
                <h1 className='w-48 font-semibold text-gray-600'>Имя</h1>
              
                <span className='p-2 font-medium text-gray-600 border w-full rounded-lg '>{`${selectedRow.title}`}</span>
                
                
            </div>
        
            <div className='flex items-center gap-2 py-8'>
                <h1 className='w-48 font-semibold text-gray-600'>Телефон</h1>
                <span className='p-2 font-medium text-gray-600 border rounded-lg w-full'>{`${selectedRow.tel}`}
                </span>
                <button className='px-4 py-1.5 border rounded-lg text-blue-500 bg-blue-100 text-lg'>+</button>
               
            </div>
            <div className='flex items-center'>
                <h1 className='w-48 font-semibold text-gray-600'>Тип клиента</h1>
                
                    <select name="" id="" className='p-2 font-medium text-gray-600 border rounded-lg  w-full focus:outline-none bg-white'>
                        <option value="">VIP</option>
                        <option value="">Regular Clients </option>
                        <option value="">Corporate Clients</option>
                        <option value="">Wholesale Clients</option>
                        <option value="">Online Clients</option>
                    </select>
             
               
            </div>
          </div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
}
