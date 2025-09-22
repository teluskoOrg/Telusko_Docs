import React from 'react'
import { Link } from 'react-router'

function error() {
  return (
    <div className='h-screen flex justify-center items-center'>
    <h1 className='text-[#7F4BEA] text-5xl'>Ooppss</h1>
    <p>Source doesn't exist</p>
    <div className='flex justify-center gap-4'>
        <button className='hero-btn bg-[#7F4BEA] hover:bg-[#6939c6]  text-white'>
            <Link to="/docs">Home</Link>
            </button>
        </div>
    </div>
  )
}

export default error