'use client'
import React from 'react'
import Link from 'next/link'

export default function Button(props) {

  const { message } = props;


  return (
    <Link href={'/'}>
      <button className="font-thin text-xl px-3 py-2 bg-slate-500 rounded-full hover:opacity-65">
        {message}
      </button>
    </Link>
  )
}
