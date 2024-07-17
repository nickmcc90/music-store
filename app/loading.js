import React from 'react'

export default function Loading() {
  return (
    <main className='min-h-screen w-full flex flex-col text-black items-center justify-center gap-[50px] relative'>
      <div className="flex flex-col items-center gap-3">
        <div className='text-6xl uppercase font-bold'>
          
        </div>
        <div className="text-xl font-thin">
          Loading....
        </div>
      </div>
      <div className='flex gap-[150px]'>
        <i className="fa-solid fa-music text-black text-3xl md:text-5xl"></i>
        <i className="fa-solid fa-music text-black text-3xl md:text-5xl scale-x-[-1]"></i>
      </div>
  </main>
  )
}
