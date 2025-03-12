import React from 'react'
import navdata from '../../data/navdata'
import { Link } from 'react-router-dom'
import SearchBox from '../Input/searchBox'
const Navbar = () => {
  return (
    <div className='w-full bg-yellow-300 flex flex-col justify-center items-center'>
        <div className='max-w-[1440px] px-8 w-full grid grid-cols-5 justify-between items-center py-4'>
            <div className='w-[180px] h-[50px] col-span-1'>
                <img 
                    src="https://bachlongmobile.com/assets/images/logo/logo-website-1.png" 
                    alt="logo" 
                    className='w-full h-full object-contain' 
                />
            </div>

            <div className='flex flex-col justify-center items-center gap-1 w-full col-span-2'>
                <SearchBox/>
                <p className='text-[10px]'>16 Series, 16 Pro Max, S25 Ultra, AirPods 4, ...</p>
            </div>

            <div className='flex space-x-4 w-full col-span-2 justify-end'>
                <div className='flex items-center space-x-6'>
                    {navdata.map((nav) => (
                        <Link key={nav.id} to={nav.link} className='flex items-center flex-col gap-1 hover:bg-amber-200 p-2 rounded-lg transition-all 0.3s ease-in-out'>
                            <div>{nav.icon}</div>
                            <div
                                className='text-black text-[12px]'
                            >
                                {nav.title}
                            </div>
                        </Link>       
                    )
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar