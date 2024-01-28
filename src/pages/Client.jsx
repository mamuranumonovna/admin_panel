import React from 'react'
import shop from '../assets/Shop.svg'
import user from '../assets/Users.svg'
import notification from '../assets/notifications.svg'
import car from '../assets/directions_car.svg'
import { IoIosArrowBack } from "react-icons/io";
import { BiColumns } from "react-icons/bi"
import { FaFilter } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";
import search from '../assets/order/Search.svg'

export default function Client() {
  return (
    
         <div className="w-full">
        <nav className="py-[4px] bg-white border-sw">
            <h1 className='py-4 px-4 pl-9  text-3xl font-thin text-gray-700 inter-bold'>Клиенты</h1>
        </nav>
        <div className='flex p-6 bg-gray-100 w-full items-center justify-between'>
      <div className=''>
        <form action="" className='relative'>
          <img src={search} className='absolute top-1.5 left-1' />
          <input className=' w-[450px] px-8 py-1 focus:outline-none rounded-lg'
          type="text" 
          placeholder='Поиск'
          />
        </form>
      </div>
      <div>
        < div className='flex items-center gap-8'>
          <div className='flex items-center'>
          <button className='p-2 bg-gray-200 rounded-l-lg'>
          <IoIosArrowBack className='text-gray-500' />
          </button>
          <div className='bg-white px-2 py-1.5 text-sm text-gray-800'>Сегодня</div>
          <button className='p-2 bg-gray-200 rounded-r-lg'>
          <IoIosArrowBack className='rotate-180 text-gray-500'/>
          </button>
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-800'>
          <BiColumns />
          <h1>Столбцы</h1>
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-800'>
          <FaFilter />
          <h1>Фильтр</h1>
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-800'>
          <TfiDownload />
          <h1>Скачать</h1>
          </div>
        </div>
      </div>
      </div>
        <section className="pl-[36px] pt-[24px]">
            <div className="flex items-center gap-[20px]">
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">24</span>
                        <h3 className="text-[#6E8BB7]">Филиалы</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={shop} alt=""/>
                </div>
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">110,823</span>
                        <h3 className="text-[#6E8BB7]">Клиенты</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={user} alt=""/>
                </div>
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">110,823</span>
                        <h3 className="text-[#6E8BB7]">Подписчики</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={notification} alt=""/>
                </div>
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">75</span>
                        <h3 className="text-[#6E8BB7]">Курьеры</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={car} alt=""/>
                </div>
            </div>
        </section>
    </div>
    
  )
}
