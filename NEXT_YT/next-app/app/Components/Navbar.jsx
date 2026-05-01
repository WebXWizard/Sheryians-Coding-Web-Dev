import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-red-500 justify-between items-center px-6 py-2 shadow-md mb-2'>
        <h3 className='font-[600]'>Sheryians</h3>
        <div className='flex text-md gap-8 text-white cursor-pointer font-[600]'>
         <Link href='/'>Home</Link>
         <Link href='/about'>About</Link>
         <Link href='/product'>Products</Link>
         <Link href='/contact'>Contact</Link>
         <Link href='/courses'>Courses</Link>
         
        </div>
    </div>
  )
}

export default Navbar