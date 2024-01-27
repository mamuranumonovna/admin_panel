import React from 'react'
import search from '../assets/order/Search.svg'
import { Link } from 'react-router-dom'

export default function Order() {

  const data=[
    {
      num:'1',
      name:'Арсений Морозов',
      tel:'+998 (90) 123-45-67',
      id:'5262261',
    },
    {
      num:'2',
      name:'Дамир Баранов',
      tel:'+998 (90) 123-45-67',
      id:'5637657',
    },
    {
      num:'3',
      name:'Вероника Новикова',
      tel:'+998 (90) 123-45-67',
      id:'5425683',
    },
    {
      num:'4',
      name:'Денис Андреев',
      tel:'+998 (90) 123-45-67',
      id:'9003237',
    },
    {
      num:'5',
      name:'Дмитрий Лебедев',
      tel:'+998 (90) 123-45-67',
      id:'9232734',
    },
    {
      num:'6',
      name:'Елизавета Фёдорова',
      tel:'+998 (90) 123-45-67',
      id:'5227365',
    },
    {
      num:'7',
      name:'Марьяна Соловьёва',
      tel:'+998 (90) 123-45-67',
      id:'9232734',
    },
    {
      num:'8',
      name:'Ева Васильева',
      tel:'+998 (90) 123-45-67',
      id:'7527365',
    },
    {
      num:'9',
      name:'Амелия Белова',
      tel:'+998 (90) 123-45-67',
      id:'7426774',
    },
    {
      num:'10',
      name:'Павел Титов',
      tel:'+998 (90) 123-45-67',
      id:'6426778',
    },
   

    
  ]


  return (
    <div>
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
      <div className='w-full h-screen'>
        <nav>
          <ul className='flex gap-11 items-center px-4 py-4 bg-white text-gray-600'>
            <li>
              <Link>
              Курьер в пути
              </Link>
            </li>
            <li>
              <Link>
              Новый
              </Link>
            </li>
            <li>
              <Link>
              Оператор принял
              </Link>
            </li>
            <li>
              <Link>
              Оператор принял
              </Link>
            </li>
            <li>
              <Link>
              Загатовка
              </Link>
            </li>
            <li>
              <Link>
              Завершен
              </Link>
            </li>
            <li>
              <Link>
              Все заказы
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div>
        {
         data.map((item,index)=>(
         <div className='text-gray-500  mt-4 text-xl' key={index}  >
          <div className='flex justify-around items-center'>
          <h1>{item.num}</h1>
          <div>
          <h1>{item.name}</h1>
          <h1>{item.tel}</h1>
          </div>
          <h1>{item.id}</h1>
          </div>
         </div>
         ))
         }
        </div>
      </div>
    </div>
  )
  }
