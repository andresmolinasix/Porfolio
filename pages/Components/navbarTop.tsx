import React from 'react'
import type { NextPage,  } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react' 
const navbarTop: NextPage = () => {
    const [navButton, setNavButton] = useState(false)
  return (
    <div>

        <nav className="bg-black border-gray-200 px-2 py-2.0 my-0 h-9 align-middle">
        <div className="container flex sm:justify-center lg:justify- justify-evenly items-center ">
          
          <Link href="/#" className="flex content-center">
            
            <span className="flex md:shrink-0 justify-center text-lg font-semibold whitespace-nowrap dark:text-white">Andres Molina</span>
          </Link>

          <button
          onClick={()=>setNavButton(!navButton)}
          className=' lg:hidden inline-flex items-center justify-center text-white  h-6 w-10 rounded-md outline-none focus:outline-none ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${navButton? '':'hidden'} flex w-full lg:inline-flex mt-2 lg:mt-0 lg:text-center justify-center`}  >
          <ul className='flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:text-center'>
            <li>
              <Link href='/economia/'><p className='px-4 py-2  font-medium text-gray-200 hover:text-blue-600 rounded-md'>Economía</p></Link>
            </li>
            <li>
              <Link href='/politica'><p className='flex px-4 py-2  font-medium text-gray-200 hover:text-blue-600 rounded-md'>Política</p></Link>
            </li>
            <li>
              <Link href='/deportes'><p className='flex px-4 py-2  font-medium text-gray-200 hover:text-blue-600 rounded-md'>Deportes</p></Link>
            </li>
            <li>
              <Link href='/tecnologia'><p className='flex px-4 py-2  font-medium text-gray-200 hover:text-blue-600 rounded-md'>Tecnología</p></Link>
            </li>
            <li>
              <Link href='/tendencias'><p className='flex px-4 py-2  font-medium text-gray-200 hover:text-blue-600 rounded-md'>Tendencias</p></Link>
            </li>
            <li>
              <Link href='/internacional'><p className='flex px-4 py-2  font-medium text-gray-200 hover:text-blue-600 rounded-md'>Internacional</p></Link>
            </li>
          </ul>
          
        </div>
          

          
        </div>

        </nav>
        


    </div>
  )
}

export default navbarTop