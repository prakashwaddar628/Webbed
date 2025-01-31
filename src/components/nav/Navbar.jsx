import React from 'react';

const Navbar = () => {
  return (
    <div className="h-[54px] bg-[#262626] text-white flex justify-between items-center px-6 fixed z-50 w-full top-0 shadow-md">
      <div className="flex items-center space-x-2">
        <h3 className="text-white text-lg font-semibold">
          envato<span className="text-green-500">market</span>
        </h3>
      </div>
      <div className="relative">
        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm transition duration-300">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
