import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-[#0e0f1a] text-white min-h-screen flex items-center justify-center px-12 relative">
      {/* Purchase Button on Top Right */}
      <button className="absolute top-8 right-8 bg-white text-black font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-gray-200 transition duration-300">
        Purchase Now
      </button>

      {/* Left Sidebar Text */}
      <div className="absolute left-10 top-1/3 text-lg">
        <h2 className="text-orange-400 font-medium">Transform</h2>
        <h2 className="text-purple-400 font-medium">Your Website</h2>
        <p className="text-gray-400 mt-2">With Motion Art Effect</p>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-2xl">
        <h2 className="text-5xl font-extrabold text-gray-200 leading-tight">
          Attract Your Visitors' Attention <br /> With Colorful
        </h2>

        {/* Gradient Text for Motion Art Effect */}
        <h2 className="text-5xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
          Motion Art Effect
        </h2>

        {/* Description Text */}
        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          Unleash the power of creativity with Motion Art for Elementor - your ultimate
          solution for seamlessly integrating captivating animations into your website.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
