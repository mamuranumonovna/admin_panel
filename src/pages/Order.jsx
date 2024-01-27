import React from 'react'
import search from '../assets/order/Search.svg'
import { Link } from 'react-router-dom'
import DataTable from '../components/DataTable'

export default function Order() {

  


  return (
    <div className='w-full'>
      <h1 className='bg-white py-4 px-4 text-xl font-semibold text-gray-700 '>Заказы</h1>
      <div className='p-4 bg-blue-100 w-full'>
        <form action="" className='relative'>
          <img src={search} className='absolute top-1.5 left-1' />
          <input className='border w-[400px] px-8 py-1 focus:outline-none'
          type="text" 
          placeholder='Поиск'
          />
        </form>
      </div>
      <div className='w-full'>
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
