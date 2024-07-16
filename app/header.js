"use client"
import React from 'react'
import Link from 'next/link'
import Modal from './modal'

import useCart from './(store)/store'

export default function Header() {

  const cart = useCart(state => state.cart)

  const openModal = useCart(state => state.openModal)
  const setOpenModal = useCart(state => state.setOpenModal)

  function handleModal () {
    setOpenModal()
  }

  return (
    <header className='sticky top-0 left-0 right-0 bg-[#3b3b58] h-[120px] flex justify-between items-center py-6 px-14
    text-xl sm:text-2xl md:text-3xl z-50'>
      <Link href={'/'}>
        <div id='start' className='text-white flex justify-center items-center gap-6 hover:scale-110 cursor-pointer'>
          <i className="fa-solid fa-music text-white text-3xl md:text-5xl"></i>
          <h1 className="text-white">Nick&apos;s Notes</h1>
        </div>
      </Link>
      <div className="text-white flex justify-center items-center gap-10">
        <p className="cursor-pointer hover:text-gray-400">About</p>
        <p className="cursor-pointer hover:text-gray-400">Contact</p>
        <div onClick={handleModal} className='relative'>
          {cart.length > 0 && <div className='flex justify-center items-center absolute bg-blue-500 text-md -top-4 -right-3 rounded-full w-8 h-8'>{cart.length}</div>}
          <i className="fa-solid fa-cart-shopping text-white text-3xl md:text-5xl cursor-pointer hover:text-gray-400"></i>
        </div>
      </div>
      {openModal && <Modal />}
    </header>
  )
}
