import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-screen  bg-truegray-50 flex flex-col justify-between'>
        <div className='m-auto flex flex-col'>

        <h1 className='bold py-3 text-4xl'>Tennis Court Address</h1>
        <input className='py-1 mb-3 bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-sky-200 focus:border-sky-200 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-black dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500' placeholder='Enter Tennis Court Location Here' type="text"></input>
        <button className='text-2xl md:text-3xl bg-sky-800 hover:bg-sky-900 hover:text-white' >Search</button>
        </div>
        
    </div>
  )
}
