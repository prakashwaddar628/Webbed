import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[54px] bg-[#262626] text-white flex justify-between items-center px-4 top-[18px] fixed z-100 m-b-[1px] w-full'>
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
