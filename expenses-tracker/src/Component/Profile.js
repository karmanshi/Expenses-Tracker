import React from 'react'
import Navbar from './navbar'
import { useEffect, useState } from 'react';
const Profile = () => {
  const [transactionList, setTransactionList] = useState(() => {
    return JSON.parse(localStorage.getItem('transaction')) || []
  })
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalCredit, setTotalCredit] = useState(0)
  const [totalDebit, setTotalDebit] = useState(0)

  useEffect(() => {
    let totalCredit = 0;
    let totalDebit = 0;
    for (let i = 0; i < transactionList.length; i++) {
      if (transactionList[i].transaction == 'credit') {
        totalCredit += parseInt(transactionList[i].amount)
        setTotalCredit(totalCredit)
      }
      else {
        totalDebit += parseInt(transactionList[i].amount)
        setTotalDebit(totalDebit)
      }
    }
    setTotalAmount(totalCredit - totalDebit)

  }, []);

  return (
    <div>
      <Navbar />
      <div className='p-5 m-8 bg-black	w-1/2 h-96 rounded-lg shadow-xl shadow-gray-500	'>
        <div className='mt-2 p-5 text-xl font-bold text-white'>Transactions: </div>
        <div className='mt-5 p-4 text-base font-semibold text-white'>Total Amount Debit : <span className='p-5'>₹ {totalDebit}/-</span> </div>
        <div className='mt-5 p-4 text-base font-semibold text-white'>Total Amount Credit : <span className='p-5'>₹ {totalCredit}/-</span> </div>
        <div className='mt-5 p-4 text-base font-semibold text-white'>Total Amount Saved : <span className='p-5'>₹ {totalAmount}/-</span></div>

      </div>
    </div>
  )
}

export default Profile