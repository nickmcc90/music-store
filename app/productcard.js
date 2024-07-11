"use client"
import React from 'react'

import { useRouter } from 'next/navigation'

import useCart from './(store)/store'

export default function ProductCard(props) {

  const { product } = props
  const { id: price_id, product: product_data, unit_amount: cost } = product
  const { name, description } = product_data

  const router = useRouter()

  console.log(name)

  const setProduct = useCart(state => state.setProduct)

  function handleRoute () {
    const newProduct = {
      price_id,
      cost,
      name,
      description,
      product_data
    }
    setProduct({ newProduct })
    router.push('/product?price_id=' + price_id)
  }

  return (
    <div 
      className='flex flex-col bg-[#D2DAEF] shadow-lg hover:shadow-2xl'
      onClick={handleRoute}
    >
      <div className='flex flex-col relative'>
        <img className='w-full h-full max-h-[300px] object-contain' src={product_data.images[0]}/>
        { name.includes("rework") ? (
            <div className='absolute top-3 right-5  h-[20px] w-[80px] bg-green-400 
            text-white rounded-xl flex justify-center items-center'>
              Rework
            </div>
          ) : null
        }
        { name.includes("Original") ? (
            <div className='absolute top-3 right-5  h-[20px] w-[80px] bg-orange-400 
            text-white rounded-xl flex justify-center items-center'>
              Original
            </div>
          ) : null
        }
      </div>
      <div className='flex flex-col p-2 gap-6 flex-1'>
        <p className='flex justify-center uppercase text-center text-xl sm:text-2xl md:text-3xl border-b border-solid border-black border-spacing-3'>{name}</p>
        <p className=''>{description}</p>
        <p className=''>${cost/100}</p>
      </div>
    </div>
  )
}
