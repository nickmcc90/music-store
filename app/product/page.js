"use client"
import React from 'react'
import useCart from '../(store)/store'
import VideoPlayer from '../VideoPlayer'


export default function ProductPage(props) {

  const { searchParams } = props
  const { price_id } = searchParams

  const product = useCart(state => state.product)

  const { cost, name, description, product_data } = product

  // console.log(product_data.metadata.Video)

  const addItemToCart = useCart(state => state.addItemToCart)

  function addHandle() {
    const newItem = {
      cost,
      name,
      price_id
    }

    addItemToCart({ newItem })
  }


  return (
    <div className='flex flex-col gap-7'>
      <div className='uppercase border-b text-2xl sm:text-3xl md:text-4xl'>
        {name}
      </div>
      <div className='flex flex-col max-w-[1100px] gap-[100px] mr-auto'>
        <div className="flex flex-col gap-10">
          <p className='text-lg'>Price: ${cost/100}</p>
          <p className='text-lg'>Description: {description}</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 place-items-start gap-10'>
            <VideoPlayer videoFilename={product_data.metadata.Video} />
            <button onClick={addHandle} className='my-auto bg-slate-600 rounded-full hover:opacity-60 text-white p-3'>Add MIDI to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// <video className='' controls src={`/${product_data.metadata.Video}`} />