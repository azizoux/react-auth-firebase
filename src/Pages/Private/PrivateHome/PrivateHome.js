import React from 'react'
import cat from './cat.webp'

export default function PrivateHome() {
  return (
    <div className='container p-5'>
      <h1 className='display-3 text-dark mb-4'>Home sweet Private Home</h1>
      <img src={cat} />
    </div>
  )
}
