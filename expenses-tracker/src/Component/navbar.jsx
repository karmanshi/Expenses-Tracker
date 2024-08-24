import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black  border-gray-200 dark:bg-gray-900 mb-6 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a
        href="https://flowbite.com/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
         Expenses Tracker
        </span>
      </a>
      
     
    </div>
  </nav>
  
  )
}

export default Navbar