import React from 'react'
import { useState } from 'react'


export const OnsiteRemote = () => {
const[isOpen, setIsOpen] = useState(false)
const handleOpen = () => {
    setIsOpen(!isOpen)
}

  return (
    <>
        <li>
    <button
        onClick={handleOpen}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        >
        {isOpen ? 'Close' : 'On-site/Remote'}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

        </li>


    </>
  )
}
