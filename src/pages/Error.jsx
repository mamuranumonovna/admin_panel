import React from 'react'
import err404 from '../assets/error/err404.svg'

export default function Error() {
  return (
    <div className='flex gap-[100px] mx-auto items-center'>
<div>
<h1 className='text-blue-500 text-9xl font-semibold'>404</h1>
<h1 className='text-5xl py-8 font-semibold text-gray-800'>Page Not Found</h1>
<p className='pb-8 text-xl'>Sorry, the page you visited does not exist.</p>
<button className='bg-blue-500 rounded-lg px-4 py-2 text-white'>Вернутся в главную</button>
</div>
<div>
    <img src={err404} />
</div>
    </div>
  )
}
