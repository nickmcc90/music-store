"use client"
import React from 'react'
import useCart from '../(store)/store'

export default function ProductPage(props) {

  const { searchParams } = props
  const { price_id } = searchParams

  const product = useCart(state => state.product)
  
  console.log(product)
  return (
    <div>
      Hi
    </div>
  )
}
