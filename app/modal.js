"use client"

import React from 'react'
import ReactDom from 'react-dom'

import useCart from './(store)/store'
import { useRouter } from 'next/navigation'

export default function Modal() {

  const router = useRouter()

  const setOpenModal = useCart(state => state.setOpenModal)

  const cartItems = useCart(state => state.cart)

  const removeItem = useCart(state => state.removeItemFromCart)

  const emptyCart = useCart(state => state.emptyCart)

  function toggleModal () {
    setOpenModal()
  }

  async function checkout() {

    const lineItems = cartItems.map((item) => {
      return {
        price: item.price_id,
        quantity: 1
      }
    })

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ lineItems })
    })
    const data = await res.json()

    emptyCart()

    setOpenModal()

    router.push(data.session.url)
  }

  return ReactDom.createPortal(
    <div className='fixed top-0 left-0 h-screen w-screen z-50'>
      <div onClick={toggleModal} className='bg-transparent absolute inset-0'></div>
      <div className='absolute top-0 right-0 bg-[#fff7dd] h-screen shadow
      w-screen sm:w-96 max-w-screen py-3 px-5 flex flex-col gap-8'>
        <div className='relative flex items-center justify-between text-2xl h-[50px]'>
          <div>Cart:</div>
          <i onClick={toggleModal} className="fa-solid fa-xmark"></i>
          <div className='absolute bottom-0 w-2/3 h-[1px] bg-slate-900 left-1/2 -translate-x-1/2'></div>
        </div>
        <div className='flex flex-col gap-4 overflow-y-auto no-scrollbar flex-1'>
          {cartItems.length === 0 ? "Hmmm... nothing in the cart." : ( cartItems.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex flex-col border-l-2 border-slate-900 p-3 gap-2'>
                <div className='font-bold'>{item.name}</div>
                <div>Price: ${item.cost/100}</div>
                <i className='font-light'>Midi file and video preview included</i>
                <button onClick={() => removeItem({itemIndex})} className='flex items-center gap-2 hover:bg-[white] w-[100px] rounded-full justify-center'>
                  <i className="fa-solid fa-trash-can"></i>
                  <div className='mt-1'>Remove?</div>
                </button>
              </div>
            )
          }) )}
        </div>
        {cartItems.length > 0 && (<button onClick={checkout} className='hover:opacity-65 w-full border rounded-full p-5 uppercase bg-[#b173d7] text-3xl'>
          Checkout
        </button>)}
      </div>
    </div>
    ,
    document.getElementById('portal')
  )
}

// timestamp...
/*

About to figure how to get rid of scrollbar DONE
Then remove item from cart integration DONE
Then fix the add to cart same issue DONE
Then add a big checkout button to the bottom
Then route checkout

*/