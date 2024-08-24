import React, { useState } from 'react'
import Navbar from './navbar'

const Expanses = () => {
    const[addTransaction,setAddTransaction]=useState({})
    const [transactionList,setTransactionList] = useState({})

    const handleAddForm = (e) => {
        setAddTransaction(e.target.value)
    }

    const handleAddTransaction = (e) =>{
        e.preventDefault()
        setTransactionList({...addTransaction})

    }
    return (
        <div>
            <Navbar />
            <div className='m-5 p-5'>
                <div className="grid grid-flow-col gap-4">
                    <div className='col-span-1 overflow-x-auto shadow-md sm:rounded-lg '>
                        <div className='bg-cyan-200 text-cyan-800 font-bold m-3 p-2 text-center text-2xl'>
                            Add New Transaction
                        </div>
                        <div className='p-3'>
                            <form className="max-w-sm mx-auto ">
                                <div className="mb-5">
                                    <label
                                        htmlFor="paid"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Paid for :
                                    </label>
                                    <input
                                        type="text"
                                        id="paid"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=" "
                                        required=""
                                        value={addTransaction}
                                        onChange={handleAddForm}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="amount"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Amount:
                                    </label>
                                    <input
                                        type="text"
                                        id="amount"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=" "
                                        required=""
                                        value={addTransaction}
                                        onChange={handleAddForm}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="transaction"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Transaction type :
                                    </label>
                                    <input
                                        type="text"
                                        id="transaction"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=" "
                                        required=""
                                        value={addTransaction}
                                        onChange={handleAddForm}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="date"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Date:
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={addTransaction}
                                        onChange={handleAddForm}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category :
                                    </label>
                                    <input
                                        type="text"
                                        id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=" "
                                        required=""
                                        value={addTransaction}
                                        onChange={handleAddForm}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleAddTransaction}
                                >
                                    Add Transaction
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className=" overflow-x-auto shadow-md sm:rounded-lg col-span-3">
                        <div className='bg-cyan-200 text-cyan-800 font-bold m-3 p-2 text-center text-2xl'>List Of Transactions</div>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        1
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                    <td className="px-6 py-4">$2999</td>
                                    <td className="px-6 py-4">$2999</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Expanses