import React from 'react'
import { useState } from 'react'


export const OnsiteRemote = ({onsiteOrRemote, onOnsiteOrRemote}) => {
const[isOpen, setIsOpen] = useState(false)
const handleOpen = () => {
    setIsOpen(!isOpen)
}

const handleCheckboxChange = (or) => {
    const updatedCheckboxes = onsiteOrRemote.includes(or) ? onsiteOrRemote.filter((o)=>o !==or) :
    [...onsiteOrRemote, or];
    onOnsiteOrRemote(updatedCheckboxes)
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
        {isOpen ? 'On-site/Remote' : 'On-site/Remote'}
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
       <div className="flex absolute h-max w-max z-50 w-56 p-3 bg-white rounded-lg shadow" id="dropdown">
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li className="flex items-center">
            <input
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
            type="checkbox"
            checked={onsiteOrRemote.includes("On-site")}
            onChange={() => handleCheckboxChange("On-site")}
            />
            <label> On-site </label>
            </li>
            <li className="flex items-center">
            <input
            type="checkbox"
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
            checked={onsiteOrRemote.includes("Remote")}
            onChange={() => handleCheckboxChange("Remote")}
            />
            <label> Remote</label>
            </li>
            <li className="flex items-center">
            <input type="checkbox"
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
            checked={onsiteOrRemote.includes("Hybrid")}
            onChange={() => handleCheckboxChange("Hybrid")}
            />
            <label> Hybrid </label>
            </li>
        </ul>
       </div>
      }

        </li>


    </>
  )
}
