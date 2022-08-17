import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
export default function Navbar() {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-lime-300 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Tennis Court Status</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Maps</li>
                        <li>Search</li>
                    </ul>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5'/>}
                    
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-lime-300 w-full px-8 pb-3'}>
                <li className='border-b-2 border-x-zinc-200 w-full'>Home</li>
                <li className='border-b-2 border-x-zinc-200 w-full'>About</li>
                <li className='border-b-2 border-x-zinc-200 w-full'>Maps</li>
                <li className='border-b-2 border-x-zinc-200 w-full'>Search</li>
            </ul>
            <div className='flex flex-col my-4'>
                
            </div>
        </div>
    )
}
