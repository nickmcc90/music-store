import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center gap-7'>
      <i className="fa-solid fa-music"></i>
      <div className='flex justify-center align-bottom'>
        <p>Loading</p>
        <div className='h-1 w-1 bg-black rounded-full'></div>
        <div className='h-1 w-1 bg-black rounded-full'></div>
        <div className='h-1 w-1 bg-black rounded-full'></div>
      </div>
      <i className="fa-solid fa-music"></i>
    </div>
  )
}
