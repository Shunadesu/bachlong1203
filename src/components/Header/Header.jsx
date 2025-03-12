import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full bg-black flex justify-center items-center'>
        <div className='max-w-[1440px]  w-full flex px-8 justify-center items-center py-2 uppercase text-white'>
            <Link to={'https://bachlongmobile.com/'} className='border border-white rounded-2xl px-12 py-1'>
               <p className='font-semibold'>Hệ thống Ủy Quyền Chính Hãng Apple Việt Nam</p> 
            </Link>
        </div>
    </div>
  )
}

export default Header