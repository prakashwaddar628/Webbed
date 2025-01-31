import React from 'react'

const Review = () => {
  return (
    <div className='flex items-center flex-col'>
      <div>
        <h2>Trusted by thousand of users around the wordl</h2>
      </div>
      <div className='flex justify-between px-5'>
        <div className='flex items-center'>
        <div>
            <img src="/src/assets/motionarteffect-img2.png" alt="rouond" />
        </div>
        <div className='flex flex-col'>
            <div>
            <img src="/src/assets/motionarteffect-img4.png" alt="stars" className='p-2'/>
            <p className='p-2'>4.5 Score, 9 Reviews</p>
            </div>
        </div>
        <div>
            <img src="/src/assets/motionarteffect-img2.png" alt="rouond" />
        </div>
        <div className='flex flex-col'>
            <div>
            <img src="/src/assets/motionarteffect-img4.png" alt="stars" className='p-2'/>
            <p className='p-2'>4.5 Score, 9 Reviews</p>
            </div>
        </div>
        <div>
            <img src="/src/assets/motionarteffect-img2.png" alt="rouond" />
        </div>
        <div className='flex flex-col'>
            <div>
            <img src="/src/assets/motionarteffect-img4.png" alt="stars" className='p-2'/>
            <p className='p-2'>4.5 Score, 9 Reviews</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Review
