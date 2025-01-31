import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray-800 text-white flex justify-between items-center px-4'>
      <div className='flex items-center space-x-2'>
        <h3 className='text-white'>envato<span>market</span></h3>
      </div>
      <div>
        <button>Buy now</button>
      </div>
    </div>
  )
}

export default Navbar
