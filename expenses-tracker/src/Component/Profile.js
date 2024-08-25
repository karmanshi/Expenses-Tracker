import React from 'react'
import Navbar from './navbar'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='p-5 m-8 bg-black	w-1/2 h-96 rounded-lg shadow-xl shadow-gray-500	'>
      <div className='mt-2 p-5 text-xl font-bold text-white'>Transactions: </div>
      <div className='mt-5 p-4 text-base font-semibold text-white'>Total Amount Withdraw: </div>
      <div className='mt-5 p-4 text-base font-semibold text-white'>Total Amount Credit: </div>
      <div className='mt-5 p-4 text-base font-semibold text-white'>Total Amount Saved:</div>

      </div>
    </div>
  )
}

export default Profile