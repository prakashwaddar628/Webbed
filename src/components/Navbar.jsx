import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-[#262626] text-white flex justify-between items-center px-4 top-[18px] fixed z-10'>
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
