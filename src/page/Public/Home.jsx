import React from 'react'
import { ProductAndroidList } from '../../components/pages'

const Home = () => {
  return (
    <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-2 relative gap-4">
      <ProductAndroidList />
    </div>
  )
}

export default Home