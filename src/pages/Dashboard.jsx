import React from 'react';
import filial from '../assets/dash/Filial.svg';
import klient from '../assets/dash/klient.svg';
import podpiski from '../assets/dash/podpiski.svg';
import kuryer from '../assets/dash/kuryer.svg';
import order from '../assets/dash/order.svg'
import topOrder from '../assets/dash/topOrder.svg';
import average from '../assets/dash/average.svg';
import orders from '../assets/dash/orders.svg';
import earning from '../assets/dash/earning.svg';
import linechart from '../assets/dash/linechart.svg';





export default function Dashboard() {
  return (
    <div>
        <h1 className='bg-white py-4 px-4 text-xl font-semibold text-gray-700 '>Dashboard</h1>
        <div className='flex gap-6 p-8'>
            <img src={filial}/>
            <img src={klient} />
            <img src={podpiski} />
            <img src={kuryer}/>
        </div>
        <div className='flex px-8 pt-2 gap-6'>
            <img src={order}/>
            <img src={topOrder} />
            <img src={average} />
        </div>
        <div className='flex gap-4 pt-8 px-8'>
            <div>
                <img src={earning} />
                <img src={orders} />
            </div>
            <div>
                <img src={linechart} />
            </div>
        </div>
    </div>
  )
}
