import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import Search from './search'

const Expanses = () => {
    const [addTransaction, setAddTransaction] = useState({})
    const [transactionList, setTransactionList] = useState(() => {
        return JSON.parse(localStorage.getItem('transaction')) || []
    })
    const [searchData, setSearchData] = useState('')
    const [filterList, setFilterList] = useState([])

    const handleAddForm = (e) => {
        setAddTransaction({ ...addTransaction, [e.target.name]: e.target.value })
    }

    const handleAddTransaction = (e) => {
        e.preventDefault()
        setTransactionList([...transactionList, addTransaction])
        setAddTransaction({ paid: '', amount: '', transaction: '', date: '', category: '' })
    }

    const handleDelete = (e) => {
        const dataDelete = [...transactionList]
        dataDelete.splice(e.target.name, 1)
        setTransactionList([...dataDelete])
    }

    useEffect(() => {
        localStorage.setItem('transaction', JSON.stringify(transactionList))
        setFilterList([...transactionList])
    }, [transactionList]);

    const handleSearch = (e) => {
        setSearchData(e.target.value)
        if (e.target.value == '') {
            setFilterList([...transactionList])
        }
        else {
            let data = transactionList.filter((items) => {
                if (e.target.value == items.paid) {
                    return items
                }
            })
            setFilterList([...data])
        }
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
                                        name='paid'
                                        value={addTransaction.paid}
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
                                        name='amount'
                                        value={addTransaction.amount}
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
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        name='transaction'
                                        value={addTransaction.transaction}
                                        onChange={handleAddForm}
                                    >
                                        <option className="px-4 py-4 text-lg	 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2" defaultValue=''>Select an Option</option>

                                        <option className="px-4 py-4 text-lg bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2 " value={'credit'}>Credit</option>
                                        <option className="px-4 py-4 text-lg bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2" value={'debit'}>Debit</option>

                                    </select>
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
                                        name='date'
                                        id="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={addTransaction.date}
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
                                        name='category'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=" "
                                        required=""
                                        value={addTransaction.category}
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
                        <Search handleSearch={handleSearch} searchData={searchData} />
                        <table className="mt-5 p-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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

                                {filterList.map((elements, index) => {
                                    return <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{elements.paid}</td>
                                        <td className="px-6 py-4">{elements.amount}</td>
                                        <td className="px-6 py-4">{elements.transaction}</td>
                                        <td className="px-6 py-4">{elements.category}</td>
                                        <td className="px-6 py-4">{elements.date}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                type='button'
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                key={index}
                                                name={index}
                                                onClick={handleDelete}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Expanses