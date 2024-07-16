"use client"

import React from 'react'
import ReactDom from 'react-dom'

import useCart from './(store)/store'

export default function Modal() {

  const setOpenModal = useCart(state => state.setOpenModal)

  const cartItems = useCart(state => state.cart)

  function toggleModal () {
    setOpenModal()
  }

  return ReactDom.createPortal(
    <div className='fixed top-0 left-0 h-screen w-screen z-50'>
      <div onClick={toggleModal} className='bg-transparent absolute inset-0'></div>
      <div className='absolute top-0 right-0 bg-[#fff7dd] h-screen shadow
      w-screen sm:w-96 max-w-screen py-3 px-5 flex flex-col gap-8'>
        <div className='relative flex items-center justify-between text-2xl h-[50px]'>
          <div>Cart:</div>
          <i onClick={toggleModal} class="fa-solid fa-xmark"></i>
          <div className='absolute bottom-0 w-2/3 h-[1px] bg-slate-900 left-1/2 -translate-x-1/2'></div>
        </div>
        <div className='flex flex-col gap-4 overflow-y-auto no-scrollbar flex-1'>
          {cartItems.length > 0 && ( cartItems.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex flex-col border-l-2 border-slate-900 p-3 gap-2'>
                <div className='font-bold'>{item.name}</div>
                <div>Price: ${item.cost/100}</div>
                <i className='font-light'>Midi file and video preview included</i>
                <div className='flex items-center gap-2'>
                  <i class="fa-solid fa-trash-can"></i>
                  <div className='mt-1'>Remove?</div>
                </div>
              </div>
            )
          }) )}
        </div>
      </div>
    </div>
    ,
    document.getElementById('portal')
  )
}

// timestamp...
/*

About to figure how to get rid of scrollbar
Then remove item from cart integration
Then fix the add to cart same issue
Then add a big checkout button to the bottom
Then route checkout

*/