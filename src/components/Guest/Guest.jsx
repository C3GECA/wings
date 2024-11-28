import React from 'react'
import CardHolder from './CardHolder'

const Guest = () => {
  return (
    <div>
      <div className='flex flex-col h-screen justify-center items-center gap-y-36 bg-black w-full bg-[#0a0a1a] py-20' >
        <div className="text-center mb-16">
            <h1 className="text-8xl font-bold text-white mb-4">GUEST</h1>
            <p className="text-2xl text-gray-400">Meet our distinguished guests for WINGS '25</p>
        </div>
        <div className=''>
            <CardHolder/>
        </div>
      </div>
    </div>
  )
}

export default Guest
