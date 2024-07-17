import React from 'react'
import Button from '../button'

export default function Success() {
  return (
      <main className='min-h-screen w-full flex flex-col bg-[#3b3b58] text-white items-center justify-center gap-[50px] relative'>
        <div className="flex flex-col items-center gap-3">
          <div className='text-6xl uppercase font-bold'>
            Nick's notes
          </div>
          <div className="text-xl font-thin">
            Thank you for your order!
          </div>
        </div>
        <div className='flex gap-[150px]'>
          <i className="fa-solid fa-music text-white text-3xl md:text-5xl"></i>
          <i className="fa-solid fa-music text-white text-3xl md:text-5xl scale-x-[-1]"></i>
        </div>
        <Button message="Back to home"/>
      </main>
  )
}
