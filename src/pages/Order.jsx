import React from 'react'
import search from '../assets/order/Search.svg'
import { Link } from 'react-router-dom'
import DataTable from '../components/DataTable'
import { IoIosArrowBack } from "react-icons/io";
import { BiColumns } from "react-icons/bi"
import { FaFilter } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";


export default function Order() {

  


  return (
    <div className='w-full'>
      <h1 className='py-5 px-4 pl-9  text-3xl font-thin text-gray-700 inter-bold bg-white'>Заказы</h1>
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
      <div className='w-full px-4 mt-4'>
        <nav>
          <ul className='flex gap-11 items-center px-4 py-4 bg-white text-gray-600'>
            <li className='flex gap-2 items-center'>
              <Link>
              Курьер в пути
              </Link>
              <div className='px-1.5 text-[10px] py-1 text-white font-semibold bg-gray-400 rounded-full'>10</div>
            </li>
            <li className='flex gap-2 items-center'>
              <Link>
              Новый
              </Link>
              <div className='px-1.5 text-[10px] py-1 text-white font-semibold bg-gray-400 rounded-full'>12</div>
            </li>
            
            <li className='flex gap-2 items-center'>
              <Link>
              Оператор принял
              </Link>
              <div className='px-1.5 text-[10px] py-1 text-white font-semibold bg-gray-400 rounded-full'>12</div>
            </li>
            <li className='flex gap-2 items-center'>
              <Link>
              Загатовка
              </Link>
              <div className='px-2 text-[10px] py-1 text-white font-semibold bg-gray-400 rounded-full'>5</div>
            </li>
            <li className='flex gap-2 items-center'>
              <Link>
              Завершен
              </Link>
              <div className='px-1.5 text-[10px] py-1 text-white font-semibold bg-gray-400 rounded-full'>120</div>
            </li>
            <li className='flex gap-2 items-center'>
              <Link>
              Все заказы
              </Link>
              <div className='px-2 text-[10px] py-1 text-white font-semibold bg-gray-400 rounded-full'>1</div>
            </li>
          </ul>
        </nav>
        <hr />
       
      </div>

<DataTable/>
      
    </div>
  )
  }
