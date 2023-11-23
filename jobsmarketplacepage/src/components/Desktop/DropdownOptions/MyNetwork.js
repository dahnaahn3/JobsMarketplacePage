import React from 'react'
import { MockData } from '../../MockData'
import { useState } from 'react'

export const MyNetwork = () => {
const[isOpen, setIsOpen] = useState(false)

const handleOpen = () => {
    setIsOpen(!isOpen)
}


  return (
    <div>

    <button
        onClick={handleOpen}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-black h-max w-max bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {isOpen ? 'My network' : 'My network'}
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

    {isOpen &&
    <div className="absolute h-max w-max z-50 w-56 p-3 bg-white rounded-lg shadow" id="dropdown">
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"/>
                <label>Name 1 </label>
            </li>

            <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"/>
                <label>Name 2 </label>
            </li>

            <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"/>
                <label>Name 3 </label>
            </li>

            <li className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"/>
                <label>Name 4 </label>
            </li>

        </ul>
    </div>
    }

    </div>
  )
}
