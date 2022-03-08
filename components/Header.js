import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.gif'
import Sections from './Sections'

function Header() {
  return (
    <div className='top-0 z-50 pt-4 pl-2 bg-stone-400 cursor-pointer border-b-4 border-b-black pb-4'>
        <Image 
            src={logo}
            alt='IVL Logo'
            width={270}
            height='100%'
            objectPosition='left'
            onClick={() => router.push('/')}
        />
        <h1 className='font-bold text-xl'>Industrial Volleyball League, Inc.</h1>
        <div>
            <Sections />
        </div>
    </div>
  )
}

export default Header